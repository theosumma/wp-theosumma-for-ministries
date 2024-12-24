// src/App.tsx

import React, { useState, useEffect } from 'react';
import AppList from './components/AppList';
import NewAppForm from './components/NewAppForm';
import AppDetails from './components/AppDetails';
import InfoMessage from './components/InfoMessage';
import { AppData } from './types';
import { fetchApps } from './api/fetchApps';
import { createApp } from './api/createApp';
import {deleteApp} from './api/deleteApp';
import {infoMessageState} from "./recoil/atoms.ts";
import {useSetRecoilState} from "recoil";

const App: React.FC = () => {
    const isAdministratorUser = window.tsfmData.isAdministratorUser;
    const [apps, setApps] = useState<AppData[]>([]);
    const [selectedApp, setSelectedApp] = useState<AppData | null>(null);
    const [showNewAppForm, setShowNewAppForm] = useState<boolean>(false);

    const setInfoMessage = useSetRecoilState(infoMessageState);

    useEffect(() => {
        const initialize = async () => {
            const fetchedApps = await fetchApps();
            if (fetchedApps) {
                setApps(fetchedApps);
            } else {
                setInfoMessage({ message: 'Failed to fetch apps.', type: 'error' });
            }
        };

        initialize();
    }, [setInfoMessage]);

    const handleCreateApp = async (appId: string) => {
        if(!isAdministratorUser) return;
        setInfoMessage({ message: 'Creating app...', type: 'info' });

        const { appData, error } = await createApp(appId);

        if (appData) {
            setInfoMessage({ message: 'App created successfully!', type: 'success' });
            setApps([...apps, appData]);
            setSelectedApp(appData);
            setShowNewAppForm(false);
        } else {
            const errorMessage = error || 'Failed to create the app. Please try again.';
            setInfoMessage({ message: errorMessage, type: 'error' });
        }
    };

    const handleDeleteApp = async (appId: string) => {
        if(!isAdministratorUser) return;
        const confirmDeletion = window.confirm(
            'Are you sure you want to delete this app? This action cannot be undone.'
        );
        if (!confirmDeletion) {
            return;
        }

        const { success, error } = await deleteApp(appId);

        if (success) {
            setInfoMessage({ message: 'App deleted successfully!', type: 'success' });
            setApps(apps.filter((app) => app.app_id !== appId));
            setSelectedApp(null);
        } else {
            const errorMessage = error || 'Failed to delete the app. Please try again.';
            setInfoMessage({ message: errorMessage, type: 'error' });
        }
    };


    const handleSelectApp = (app: AppData) => {
        setSelectedApp(app);
        setShowNewAppForm(false);
    };

    const handleShowNewAppForm = () => {
        setShowNewAppForm(true);
        setSelectedApp(null);
        setInfoMessage({ message: 'Please enter the app id provided by Theosumma.', type: 'info' });
    };

    const handleCancelNewApp = () => {
        setShowNewAppForm(false);
        setInfoMessage({ message: '', type: 'info' });
    };

    return (
        <div className="container">
            <div className={'flex flex-col'}>
                <div className={'flex justify-between items-end p-2 bg-white rounded-t-md'} style={{minHeight: '5vh'}}>
                    <h2 className="text-2xl font-bold">TheoSumma Apps Management</h2>
                    {
                        isAdministratorUser && (
                            <button
                                className="rounded-md p-2 bg-primary hover:bg-primary-dark text-white h-full"
                                onClick={handleShowNewAppForm}
                            >
                                Create New App
                            </button>
                        )
                    }
                </div>
                <div style={{height: '77vh'}} className={'overflow-y-auto mt-2 bg-white rounded-b-md p-2'}>
                    <div className="flex h-full">
                        <div className="w-1/4 border-r border-gray-200 pr-4 h-full">
                            <AppList apps={apps} onSelectApp={handleSelectApp}/>
                        </div>
                        <div className="w-3/4 pl-4 h-full">
                            {showNewAppForm && (
                                <NewAppForm onCreateApp={handleCreateApp} onCancel={handleCancelNewApp}/>
                            )}
                            {!showNewAppForm && selectedApp && (
                                <AppDetails app={selectedApp} onDeleteApp={handleDeleteApp}/>
                            )}
                            {!showNewAppForm && !selectedApp && (
                                <div className={'h-full w-full flex justify-center items-center'}>
                                    <p className="text-center text-gray-500">Please select or create an app</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={'min-h-[5vh] mt-2'}>
                    <InfoMessage />
                </div>
            </div>
        </div>
    );
};

export default App;
