// src/components/AppDetails.tsx

import React, {useEffect, useState, useRef} from 'react';
import {AppData, RelatedPostTypes, PostTypeSyncingStatus, WPPostType} from '../types';
import {useSetRecoilState} from 'recoil';
import {infoMessageState} from '../recoil/atoms';
import {fetchPostTypes} from '../api/fetchPostTypes';
import {fetchRelatedPostTypes} from '../api/fetchRelatedPostTypes';
import {getPostsCount} from '../api/getPostsCount';
import {syncPosts} from '../api/syncPosts';
import {fetchSyncingStatus} from "../api/fetchSyncingStatus";
import TestApp from "./TestApp.tsx";

interface AppDetailsProps {
    app: AppData;
    onDeleteApp: (appId: string) => void;
}

const excludedPostTypes = ['attachment', 'revision', 'nav_menu_item'];

const AppDetails: React.FC<AppDetailsProps> = ({app, onDeleteApp}) => {
    const isAdministratorUser = window.tsfmData.isAdministratorUser;
    const setInfoMessage = useSetRecoilState(infoMessageState);
    const [disabledPostTypes, setDisabledPostTypes] = useState<boolean>(true);
    const [syncInProgress, setSyncInProgress] = useState<boolean>(false);
    const [isTestingApp, setIsTestingApp] = useState<boolean>(false);

    // Existing state variables
    const [postTypes, setPostTypes] = useState<Record<string, WPPostType> | null>(null);
    const [postsTypesToBeSynced, setPostsTypesToBeSynced] = useState<Record<string, number>>({});
    const [syncProgress, setSyncProgress] = useState<Record<string, number>>({});
    const [relatedPostTypes, setRelatedPostTypes] = useState<RelatedPostTypes>({post_types: []});
    const [postTypesSyncingStatus, setPostTypesSyncingStatus] = useState<PostTypeSyncingStatus[]>([]);

    // Reference to store the polling interval ID
    const pollingInterval = useRef<ReturnType<typeof setInterval> | null>(null);

    // Initial data fetching
    useEffect(() => {
        setInfoMessage({message: '', type: 'info'});
        setDisabledPostTypes(true);
        setSyncInProgress(false);
        setIsTestingApp(false);
        setPostTypes(null);
        setPostsTypesToBeSynced({});
        setSyncProgress({});
        setRelatedPostTypes({post_types: []});
        setPostTypesSyncingStatus([]);


        (async () => {
            if(!isAdministratorUser) return;
            try {
                const fetchedPostTypes = await fetchPostTypes();
                if (fetchedPostTypes) {
                    setPostTypes(fetchedPostTypes);
                } else {
                    setInfoMessage({message: 'Failed to fetch post types.', type: 'error'});
                }

                const fetchedRelatedPostTypes = await fetchRelatedPostTypes(app.app_id);
                if (fetchedRelatedPostTypes) {
                    setRelatedPostTypes(fetchedRelatedPostTypes);
                } else {
                    setInfoMessage({message: 'Failed to fetch related post types.', type: 'error'});
                }

                const fetchedSyncingStatus = await fetchSyncingStatus(app.app_id);
                if (fetchedSyncingStatus) {
                    setPostTypesSyncingStatus(fetchedSyncingStatus);
                } else {
                    setInfoMessage({message: 'Failed to fetch syncing status.', type: 'error'});
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setInfoMessage({message: 'An unexpected error occurred.', type: 'error'});
            }
        })();

        return () => {
            // Clean up on unmount
            if (pollingInterval.current) {
                clearInterval(pollingInterval.current);
            }
        };
    }, [app.app_id]);

    // Polling mechanism to refresh syncing status every 10 seconds if syncing is in progress
    useEffect(() => {
        if(!isAdministratorUser) return;
        if (syncInProgress && !pollingInterval.current) {
            // Set up polling
            pollingInterval.current = setInterval(async () => {
                const fetchedSyncingStatus = await fetchSyncingStatus(app.app_id);
                if (fetchedSyncingStatus) {
                    setPostTypesSyncingStatus(fetchedSyncingStatus);

                    // Check if syncing is still in progress
                    const stillSyncing = fetchedSyncingStatus.some(
                        status => status.unsynced_posts > 0 || status.total_posts !== status.total_prepared_posts
                    );

                    if (!stillSyncing && pollingInterval.current) {
                        clearInterval(pollingInterval.current);
                        pollingInterval.current = null;
                        setSyncInProgress(false);
                        setInfoMessage({
                            message: 'All syncing processes have completed.',
                            type: 'success',
                        });
                    }
                } else {
                    setInfoMessage({message: 'Failed to fetch syncing status during polling.', type: 'error'});
                }
            }, 10000); // 10 seconds
        }

        // Cleanup on unmount or when syncInProgress becomes false
        return () => {
            if (!syncInProgress && pollingInterval.current) {
                clearInterval(pollingInterval.current);
                pollingInterval.current = null;
            }
        };
    }, [syncInProgress, app.app_id, setInfoMessage]);

    const handleDelete = () => {
        if(!isAdministratorUser) return;
        const confirmDeletion = window.confirm(
            'Are you sure you want to delete this app? This action cannot be undone.'
        );
        if (confirmDeletion) {
            onDeleteApp(app.app_id);
        }
    };

    const handleCheckboxChange = (slug: string) => {
        if(!isAdministratorUser) return;
        setRelatedPostTypes(prevState => {
            const isChecked = prevState.post_types.includes(slug);
            let updatedPostTypes: string[];

            if (isChecked) {
                // Remove the slug
                updatedPostTypes = prevState.post_types.filter(type => type !== slug);
            } else {
                // Add the slug
                updatedPostTypes = [...prevState.post_types, slug];
            }

            return {...prevState, post_types: updatedPostTypes};
        });
    };

    const handleSyncClick = async () => {
        if(!isAdministratorUser) return;
        if (syncInProgress) return;
        setSyncInProgress(true);
        setDisabledPostTypes(true);
        setInfoMessage({
            message:
                "Your website is feeding TheoSumma AI with the post's data in order to relate the AI answers with the requested post. Please do not refresh or exit this window.",
            type: 'info',
        });

        // Initialize sync progress
        setSyncProgress({}); // Reset progress
        setPostsTypesToBeSynced({}); // Reset postsTypesToBeSynced

        // Fetch counts and initialize progress
        for (const postTypeSlug of relatedPostTypes.post_types) {
            const totalPosts = await getPostsCount(postTypeSlug);
            setPostsTypesToBeSynced(prev => ({...prev, [postTypeSlug]: totalPosts}));

            // Initialize progress for this post type
            setSyncProgress(prev => ({...prev, [postTypeSlug]: 0}));
        }

        // Prepare the data and add the posts into the database
        for (const postTypeSlug of relatedPostTypes.post_types) {
            // app_id and post_type are required for syncPosts
            const syncPostsInDB = await syncPosts(app.app_id, postTypeSlug);
            if (syncPostsInDB?.success) {
                // Set sync progress to 100% for this post type
                setSyncProgress(prev => ({...prev, [postTypeSlug]: 100}));
            } else {
                // Handle error (optional: set progress to error state)
                setInfoMessage({
                    message: `Failed to sync post type: ${postTypeSlug}. ${syncPostsInDB.error || ''}`,
                    type: 'error',
                });
            }
        }

        // Update syncing status after syncing
        const syncingStatus = await fetchSyncingStatus(app.app_id);
        if (syncingStatus) {
            setPostTypesSyncingStatus(syncingStatus);
        } else {
            setInfoMessage({
                message: 'Failed to fetch syncing status.',
                type: 'error',
            });
        }

        // After syncing is complete
        setInfoMessage({
            message: 'The data was prepared and was sent to TheoSumma AI. It will take time, so we are completing the work behind the scenes. Check the status later.',
            type: 'success',
        });
        // Do not set syncInProgress to false here; let the polling mechanism handle it
        setDisabledPostTypes(true);
        setSyncInProgress(false);
    };

    return (
        <div className="h-full w-full ">
            <div
                className={`h-full w-full p-4 border border-gray-200 rounded bg-gray-50 overflow-y-scroll ${isTestingApp ? 'hidden' : 'flex'} flex-col overflow-y-scroll`}>
                <h3 className="mb-4 text-xl font-semibold">App Details</h3>
                <table className="table-auto w-full border-collapse border border-gray-300 bg-white rounded-md">
                    <tbody>
                    <tr>
                        <td className="px-4 py-2 font-semibold border border-gray-200">App ID</td>
                        <td className="px-4 py-2 border border-gray-200">{app.app_id || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 font-semibold border border-gray-200">Name</td>
                        <td className="px-4 py-2 border border-gray-200">{app.title || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 font-semibold border border-gray-200">Description</td>
                        <td className="px-4 py-2 border border-gray-200">{app.description || 'N/A'}</td>
                    </tr>
                    {app.accept_welcome_message && (
                        <tr>
                            <td className="px-4 py-2 font-semibold border border-gray-200">Welcome Message</td>
                            <td className="px-4 py-2 border border-gray-200">{app.welcome_message_content || 'N/A'}</td>
                        </tr>
                    )}
                    <tr>
                        <td className="px-4 py-2 font-semibold border border-gray-200">Short Code</td>
                        <td className="px-4 py-2 border border-gray-200">[tsfm_app app-id="{app.ID}"]</td>
                    </tr>
                    </tbody>
                </table>
                <div className="mt-4">
                    {isAdministratorUser && app.has_posts && postTypes && Object.keys(postTypes).length > 0 && (
                        <div>
                            <h4 className="mb-2 font-semibold">
                                Post types available for syncing with TheoSumma: (supports only syncing posts for now)
                            </h4>
                            <div className="flex flex-wrap">
                                {Object.entries(postTypes).map(([key, postType]) => {
                                    // Exclude any post that is in the excluded list in addition to any post type that starts with wp_
                                    if (excludedPostTypes.includes(key) || key.startsWith('wp_')) {
                                        return null;
                                    }
                                    const isChecked = relatedPostTypes.post_types.includes(postType.slug);
                                    return (
                                        <span key={key} className="inline-flex items-center me-4 mb-2">
                                        <input
                                            type="checkbox"
                                            disabled={disabledPostTypes}
                                            checked={isChecked}
                                            onChange={() => handleCheckboxChange(postType.slug)}
                                            className="form-checkbox h-4 w-4 text-blue-600"
                                        />
                                        <span className="ml-2">{postType.name}</span>
                                    </span>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                {/* Progress Table */}
                {syncInProgress && (
                    <div className="flex flex-col gap-3 mt-4">
                        <h4 className="mb-2 font-semibold">Sync Progress</h4>
                        <table className="table-auto w-full border-collapse border border-gray-300 bg-white rounded-md">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 border border-gray-200">Post Type</th>
                                <th className="px-4 py-2 border border-gray-200">Progress</th>
                            </tr>
                            </thead>
                            <tbody>
                            {relatedPostTypes.post_types.map((postTypeSlug) => {
                                const progress = syncProgress[postTypeSlug] || 0;
                                const percentage = progress; // Directly use progress (0 or 100)

                                return (
                                    <tr key={postTypeSlug}>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {postTypes?.[postTypeSlug]?.name || postTypeSlug} ({postsTypesToBeSynced[postTypeSlug]} to
                                            be prepared)
                                        </td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <div className="w-full bg-gray-200 rounded">
                                                    <div
                                                        className={`${
                                                            percentage === 100 ? 'bg-green-600' : 'bg-blue-600'
                                                        } text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded`}
                                                        style={{width: `${percentage}%`}}
                                                    >
                                                        {percentage === 100 ? 'Completed' : 'In Progress'}
                                                    </div>
                                                </div>
                                                <span className="text-xs">{`${percentage}%`}</span>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                )}
                {/* Syncing Status Table */}
                {postTypesSyncingStatus.length > 0 && (
                    <div className="mt-4">
                        <h4 className="mb-2 font-semibold">Syncing Status</h4>
                        <table className="table-auto w-full border-collapse border border-gray-300 bg-white rounded-md">
                            <thead>
                            <tr>
                                <th className="px-4 py-2 border border-gray-200">Post Type</th>
                                <th className="px-4 py-2 border border-gray-200">Total Posts</th>
                                <th className="px-4 py-2 border border-gray-200">Total Prepared Posts</th>
                                <th className="px-4 py-2 border border-gray-200">Total Unsynced Posts</th>
                                <th className="px-4 py-2 border border-gray-200">Syncing Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {postTypesSyncingStatus.map((status) => {
                                const {post_type, total_posts, total_prepared_posts, unsynced_posts} = status;
                                const postTypeInfo = postTypes?.[post_type];
                                const postTypeName = postTypeInfo?.name || post_type;

                                let syncingStatusContent;

                                if (unsynced_posts > 0) {
                                    // Syncing in progress
                                    syncingStatusContent = (
                                        <div className="flex items-center">
                                            <svg
                                                className="animate-spin h-5 w-5 text-blue-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8v8H4z"
                                                ></path>
                                            </svg>
                                            <span className="ml-2 text-blue-600">Syncing in progress...</span>
                                        </div>
                                    );
                                } else if (total_posts !== total_prepared_posts) {
                                    // Sync Again
                                    syncingStatusContent = (
                                        <span className="text-yellow-600 font-semibold">Sync Again</span>
                                    );
                                } else {
                                    // Synced
                                    syncingStatusContent = (
                                        <span className="text-green-600 font-semibold">Synced</span>
                                    );
                                }

                                return (
                                    <tr key={post_type}>
                                        <td className="px-4 py-2 border border-gray-200">{postTypeName}</td>
                                        <td className="px-4 py-2 border border-gray-200">{total_posts}</td>
                                        <td className="px-4 py-2 border border-gray-200">{total_prepared_posts}</td>
                                        <td className="px-4 py-2 border border-gray-200">{unsynced_posts}</td>
                                        <td className="px-4 py-2 border border-gray-200">
                                            {syncingStatusContent}
                                        </td>
                                    </tr>
                                );
                            })}
                            </tbody>
                        </table>
                    </div>
                )}
                {/* Action Buttons */}
                <div className="flex-grow"></div>
                <div
                    className={`w-full mt-4 ${
                        disabledPostTypes ? 'flex' : 'hidden'
                    } justify-between gap-3`}
                >
                    <div className={'flex gap-3'}>
                        {
                            isAdministratorUser && (
                                <button
                                    type="button"
                                    className="rounded-md p-2 bg-red-500 hover:bg-red-600 text-white"
                                    onClick={handleDelete}
                                >
                                    Delete App
                                </button>
                            )
                        }

                        {
                            isAdministratorUser && app.has_posts && (
                                <button
                                    type="button"
                                    className="rounded-md p-2 bg-blue-500 hover:bg-blue-600 text-white"
                                    onClick={() => {
                                        setDisabledPostTypes(!disabledPostTypes);
                                        setInfoMessage({
                                            message:
                                                'Select the post types that you want to sync with TheoSumma Service through this Application and then click "Start Syncing Process"',
                                            type: 'info',
                                        });
                                    }}
                                >
                                    Sync Posts
                                </button>
                            )
                        }
                    </div>
                    <button
                        type="button"
                        className="rounded-md p-2 bg-tsMain text-dark hover:bg-gray-400 hover:text-white"
                        onClick={() => {
                            setIsTestingApp(!isTestingApp);
                        }}
                    >
                        Test App
                    </button>
                </div>
                {
                    isAdministratorUser && app.has_posts && (
                        <div
                            className={`w-full mt-4 ${
                                !disabledPostTypes ? 'flex' : 'hidden'
                            } justify-end gap-3`}
                        >
                            <button
                                type="button"
                                className="rounded-md p-2 bg-red-500 hover:bg-red-600 disabled:bg-gray-500 text-white"
                                disabled={syncInProgress}
                                onClick={() => setDisabledPostTypes(!disabledPostTypes)}
                            >
                                Cancel Syncing Process
                            </button>
                            <button
                                type="button"
                                className="rounded-md p-2 bg-green-500 hover:bg-green-600 disabled:bg-gray-500 text-white"
                                disabled={syncInProgress}
                                onClick={handleSyncClick}
                            >
                                Start Syncing Process
                            </button>
                        </div>
                    )
                }
            </div>
            {isTestingApp &&
                <TestApp
                    app={app}
                    isVisible={isTestingApp}
                    postTypes={postTypes}
                    relatedPostTypes={relatedPostTypes}
                    toggleVisibility={(newVisibility: boolean) => {
                        setIsTestingApp(newVisibility);
                        setInfoMessage({
                            message: '',
                            type: 'info',
                        });
                    }}/>}
        </div>
    );

};

export default AppDetails;
