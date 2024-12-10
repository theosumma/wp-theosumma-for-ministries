// src/api/fetchApps.ts

import { AppData } from '../types';

export const fetchApps = async (): Promise<AppData[] | null> => {
    const { appCrudEndpoint, nonce } = window.tsfmData;

    if (!appCrudEndpoint || !nonce) {
        console.error('Missing appCrudEndpoint or nonce.');
        return null;
    }

    try {
        const response = await fetch(appCrudEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            },
        });

        const data = await response.json();

        if (response.ok && data.success) {
            return data.apps as AppData[];
        } else {
            console.error('Error fetching apps:', data.message);
            return null;
        }
    } catch (error) {
        console.error('Error fetching apps:', error);
        return null;
    }
};
