// src/components/TestApp.tsx

import React, {useEffect, useState, useRef} from 'react';
import {decodeAndCheckToken} from "../utils/decodeToken.ts";
import {AppData, PostTypePost, RelatedPostTypes, WPPostType} from "../types";
import {useSetRecoilState} from "recoil";
import {infoMessageState} from "../recoil/atoms.ts";
import {getPostTypePosts} from "../api/getPostTypePosts.ts";

interface TestAppProps {
    app: AppData;
    isVisible: boolean;
    relatedPostTypes: RelatedPostTypes;
    postTypes: Record<string, WPPostType> | null;
    toggleVisibility: (newVisibility: boolean) => void;
}

interface PostTypePosts {
    posts: PostTypePost[];
}

const TestApp: React.FC<TestAppProps> = ({app, isVisible, toggleVisibility, relatedPostTypes, postTypes}) => {
    // Refs
    const chatIframeRef = useRef<HTMLIFrameElement>(null);
    const postTypeSelectedRef = useRef(false);
    const createTokenRef = useRef(false);
    const createThreadRef = useRef(false);

    const setInfoMessage = useSetRecoilState(infoMessageState);

    // State
    const [token, setToken] = useState<string | null>(localStorage.getItem('tsfmJwtToken'));
    const [isCreatingChat, setIsCreatingChat] = useState<boolean>(false);
    const [iframeSrcUrl, setIframeSrcUrl] = useState<string | undefined>(undefined);
    const [selectedPostType, setSelectedPostType] = useState<string | null>(null);
    const [selectedPostTypePosts, setSelectedPostTypePosts] = useState<PostTypePosts>({posts: []});
    const [selectedPost, setSelectedPost] = useState<PostTypePost | null>(null);

    // Destructure global data
    const {authEndpoint, threadEndpoint, theosummaFrontendUrl, nonce, locale} = window.tsfmData;

    const getAppsThreadsLocalStorage = () => {
        return JSON.parse(localStorage.getItem('tsfmAppsThreads') || '{}') as Record<number, string | Record<number, string>>;
    }
    const setAppsThreadsLocalStorage = (appsThreads: Record<number, string | Record<number, string>>) => {
        localStorage.setItem('tsfmAppsThreads', JSON.stringify(appsThreads));
    }

    /**
     * Helper function to toggle visibility
     */
    const handleToggleVisibility = () => {
        toggleVisibility(!isVisible);
    }

    /**
     * Helper function to create a new JWT token
     */
    const createToken = async (): Promise<string | null> => {
        if (createTokenRef.current) return null;
        createTokenRef.current = true;
        try {
            const response = await fetch(authEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify({}),
                credentials: 'include',
            });
            const data = await response.json();
            if (data.success && data.token) {
                localStorage.setItem('tsfmJwtToken', data.token);
                setToken(data.token);
                createTokenRef.current = false;
                return data.token;
            } else {
                console.error('Failed to create token:', data.message);
                alert('An error occurred while authenticating.');
                createTokenRef.current = false;
                return null;
            }
        } catch (error) {
            console.error('Error creating token:', error);
            alert('An error occurred while authenticating.');
            createTokenRef.current = false;
            return null;
        }
    }

    /**
     * Helper function to create a new thread
     */
    const createThread = async (post_id_value: number | null = null): Promise<string | null> => {
        if (createThreadRef.current) return null;
        createThreadRef.current = true;
        const body: {
            locale: string,
            app_id: string,
            post_id?: number,
        } = {
            locale: locale,
            app_id: app.app_id,
        }
        if (post_id_value) {
            body.post_id = post_id_value;
        }
        try {
            const response = await fetch(threadEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(body),
                credentials: 'include',
            });
            const data = await response.json();
            const thread = data?.thread_data ? JSON.parse(data.thread_data) : null;
            if (data.success && thread?.thread_id) {
                const appsThreads = getAppsThreadsLocalStorage();
                if (app.has_posts) {
                    if (selectedPost && selectedPost.post_id) {
                        appsThreads[app.ID] = {[selectedPost.post_id]: thread.thread_id};
                    }
                } else {
                    appsThreads[app.ID] = thread.thread_id;
                }

                setAppsThreadsLocalStorage(appsThreads);
                createThreadRef.current = false;
                return thread.thread_id;
            } else {
                throw new Error('Failed to create thread');
            }
        } catch (error) {
            console.error('Error creating thread:', error);
            alert('An error occurred while creating thread.');
            createThreadRef.current = false;
            return null;
        }
    }

    /**
     * Helper function to set the iframe source
     */
    const setIframeSrc = (currentThreadId: string, currentToken: string) => {
        setIframeSrcUrl(`${theosummaFrontendUrl}threads/${currentThreadId}?token=${currentToken}`)
    }

    const checkThreadStatus = async (currentThreadId: string, currentToken: string) => {
        // TODO: Implement thread status check
        console.log('Checking thread status:', currentThreadId, currentToken);
    }

    /**
     * Initialize token and thread on component mount
     */
    const initialize = async () => {
        let currentToken = token;

        if (!currentToken) {
            currentToken = await createToken();
        } else {
            const decoded = decodeAndCheckToken(currentToken);
            if (decoded.expired) {
                currentToken = await createToken();
            }
        }

        if (app.has_posts) { // it will create the thread after selecting the post in handleCreateNewChat
            setInfoMessage({
                message: `Select a post type to test "${app.title}".. `,
                type: 'info',
            });
            return;
        }

        const appsThreads = getAppsThreadsLocalStorage();
        let currentThreadId: string = '';
        if (!app.has_posts) {
            currentThreadId = appsThreads[app.ID] as string;
        }

        if (currentToken && !currentThreadId) {
            const newThreadId = await createThread();
            if (newThreadId) {
                setIframeSrc(newThreadId, currentToken);
            }
        } else if (currentToken && currentThreadId) {
            await checkThreadStatus(currentThreadId, currentToken);
            setIframeSrc(currentThreadId, currentToken);
        }

        setInfoMessage({
            message: `You can start testing "${app.title}".. `,
            type: 'info',
        });
    }

    useEffect(() => {
        initialize();
    }, []);

    /**
     * Handler for creating a new chat
     */
    const handleCreateNewChat = async (post_id_value: number | null = null) => {
        if (isCreatingChat) return;
        setInfoMessage({
            message: `The app is generating a new chat.. do not refresh the page or click any button..`,
            type: 'info',
        });
        const pastSelectedPost = selectedPost;
        setSelectedPostType(null);
        setSelectedPost(null);
        setSelectedPostTypePosts({posts: []});
        setIframeSrcUrl(undefined);

        setIsCreatingChat(true);

        let currentToken = token;

        if (!currentToken) {
            currentToken = await createToken();
            if (!currentToken) {
                setIsCreatingChat(false);
                return;
            }
        } else {
            const decoded = decodeAndCheckToken(currentToken);
            if (decoded.expired) {
                currentToken = await createToken();
                if (!currentToken) {
                    setIsCreatingChat(false);
                    return;
                }
            }
        }

        const newThreadId = await createThread(post_id_value);
        if (newThreadId && currentToken) {
            if(post_id_value){
                setSelectedPost(pastSelectedPost)
            }
            await checkThreadStatus(newThreadId, currentToken);
            setIframeSrc(newThreadId, currentToken);
        }

        setInfoMessage({
            message: `You can start testing "${app.title}".. `,
            type: 'info',
        });

        setIsCreatingChat(false);
    }

    const handlePostTypeSelection = async (postTypeSlug: string) => {
        if (postTypeSelectedRef.current) return;
        postTypeSelectedRef.current = true;
        setSelectedPostType(postTypeSlug);
        const postsResponse = await getPostTypePosts(app.app_id, postTypeSlug);
        if (postsResponse && postsResponse.posts && postsResponse.posts.length > 0) {
            setSelectedPostTypePosts({posts: postsResponse.posts});
        } else {
            setSelectedPostTypePosts({posts: []});
        }
        setInfoMessage({
            message: `Select a post so you can chat with the post.. `,
            type: 'info',
        });
        postTypeSelectedRef.current = false;
    }

    const handleNewChatButtonClick = () => {
        if (!app.has_posts) {
            handleCreateNewChat();
        } else {
            if (app.has_posts && selectedPost && selectedPost.post_id) {
                const appsThreads = getAppsThreadsLocalStorage();
                if (appsThreads[app.ID] && typeof appsThreads[app.ID] === 'object') {
                    console.log('Deleting thread for post:', selectedPost.post_id);
                    const appPosts = appsThreads[app.ID] as Record<number, string>;
                    delete appPosts[selectedPost.post_id];
                    appsThreads[app.ID] = appPosts; // Update the object in localStorage
                    setAppsThreadsLocalStorage(appsThreads);
                }
            }
            setIframeSrcUrl(undefined);
            setInfoMessage({
                message: `Select a post type to test "${app.title}".. `,
                type: 'info',
            });
        }
    }

    const handleSelectPost = async (post: PostTypePost) => {
        setSelectedPost(post);
        if (app.has_posts) {
            const appsThreads = getAppsThreadsLocalStorage();
            if (appsThreads[app.ID] && typeof appsThreads[app.ID] === 'object') {
                if (appsThreads[app.ID][post.post_id] && token) {
                    const threadId = appsThreads[app.ID][post.post_id];
                    await checkThreadStatus(threadId, token);
                    setIframeSrc(threadId, token);
                    setInfoMessage({
                        message: `There is already a chat for this post, continue chatting.. `,
                        type: 'info',
                    });
                }
            }
        }
    }

    return (
        <div className="flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden font-sans bg-gray-50">
            <div className="flex justify-between items-center bg-tsMain text-black px-4 py-3">
                <div className={'flex items-center gap-3'}>
                    <button
                        type="button"
                        onClick={handleToggleVisibility}
                        className="px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition"
                    >
                        Back
                    </button>
                    {selectedPost && iframeSrcUrl && (
                        <h4>Chatting with "{selectedPost.post_title}"</h4>
                    )}
                </div>
                {iframeSrcUrl && <button
                    type="button"
                    onClick={handleNewChatButtonClick}
                    className={`px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition ${
                        isCreatingChat ? 'cursor-not-allowed bg-gray-300' : ''
                    }`}
                    disabled={isCreatingChat}
                >
                    {isCreatingChat ? 'Creating new chat...' : 'New Chat'}
                </button>}
            </div>
            <div className="flex-grow">
                {
                    !iframeSrcUrl && app.has_posts && (
                        <div className={'h-full w-full flex items-stretch'}>
                            {
                                relatedPostTypes.post_types.length
                                    ? (
                                        <ul className={'border-e-2 h-full p-2 me-2 flex flex-col gap-3 overflow-y-scroll'}>
                                            {postTypes && relatedPostTypes.post_types.map((postType, index) => (
                                                <li
                                                    key={index}
                                                    onClick={() => handlePostTypeSelection(postType)}
                                                    className={`bg-white rounded-md p-2 hover:cursor-pointer ${
                                                        selectedPostType == postType ? 'border-4' : 'border'
                                                    }`}>
                                                    {postTypes[postType].name}
                                                </li>
                                            ))}
                                        </ul>
                                    )
                                    : (
                                        <p className={'text-center text-gray-400'}>Please sync a post type before you can test
                                            the app.</p>
                                    )
                            }
                            {
                                selectedPostType && (
                                    <ul className={'border-e-2 h-full p-2 me-2 flex flex-col gap-3 overflow-y-scroll'}>
                                        {
                                            selectedPostTypePosts.posts.length > 0
                                                ? (
                                                    selectedPostTypePosts.posts.map((post, index) => (
                                                        <li
                                                            key={index}
                                                            onClick={() => handleSelectPost(post) }
                                                            className={`bg-white rounded-md p-2 hover:cursor-pointer ${
                                                                selectedPost && selectedPost.post_id === post.post_id
                                                                    ? 'border-4' : 'border'
                                                            }`}>
                                                            {post.post_title}
                                                        </li>
                                                    ))
                                                )
                                                : (
                                                    <p className={'text-center text-gray-400'}>No synced posts found for this post
                                                        type yet.</p>
                                                )
                                        }
                                    </ul>
                                )
                            }
                            {
                                selectedPost !== null && (
                                    <div className={'flex justify-center items-center flex-grow'}>
                                        <button
                                            type="button"
                                            onClick={() => handleCreateNewChat(selectedPost?.post_id)}
                                            className={`px-4 py-2 bg-white text-black rounded-md font-semibold hover:bg-gray-200 transition ${
                                                isCreatingChat ? 'cursor-not-allowed bg-gray-300' : ''
                                            }`}
                                            disabled={isCreatingChat}
                                        >
                                            Start Chatting..
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                {
                    iframeSrcUrl !== undefined && (
                        <iframe
                            ref={chatIframeRef}
                            className="w-full h-full border-0 overflow-hidden"
                            src={iframeSrcUrl}
                            title="TheoSumma Chat Widget"
                        ></iframe>
                    )
                }
            </div>
        </div>
    );
};

export default TestApp;
