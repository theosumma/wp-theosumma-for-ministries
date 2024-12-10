// src/components/AppListItem.tsx

import React from 'react';
import { AppData } from '../types';

interface AppListItemProps {
    app: AppData;
    onSelectApp: (app: AppData) => void;
    isActive: boolean;
}

const AppListItem: React.FC<AppListItemProps> = ({ app, onSelectApp, isActive }) => {
    const handleClick = () => {
        onSelectApp(app);
    };

    return (
        <a
            href="#"
            className={`block px-4 py-2 border-b border-gray-200 ${
                isActive ? 'bg-secondary font-bold' : 'hover:bg-gray-100'
            }`}
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
        >
            {app.title || app.app_id || 'New App'}
        </a>
    );
};

export default AppListItem;
