// src/components/AppList.tsx

import React, { useState } from 'react';
import { AppData } from '../types';
import AppListItem from './AppListItem';

interface AppListProps {
    apps: AppData[];
    onSelectApp: (app: AppData) => void;
}

const AppList: React.FC<AppListProps> = ({ apps, onSelectApp }) => {
    const [activeAppId, setActiveAppId] = useState<string | null>(null);

    const handleSelectApp = (app: AppData) => {
        setActiveAppId(app.app_id);
        onSelectApp(app);
    };

    return (
        <div className="h-full">
            {apps.length === 0 && (
                <div className="h-full flex justify-center items-center">
                    <p className="text-center text-gray-500">No app was created yet</p>
                </div>
            )}
            {apps.map((app) => (
                <AppListItem
                    key={app.app_id}
                    app={app}
                    onSelectApp={handleSelectApp}
                    isActive={app.app_id === activeAppId}
                />
            ))}
        </div>
    );
};

export default AppList;
