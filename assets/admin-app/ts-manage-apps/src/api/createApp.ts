// src/api/createApp.ts

import { AppData } from '../types';

interface CreateAppResponse {
    success: boolean;
    message?: string;
    app_data?: AppData;
}

export const createApp = async (appId: string): Promise<{ appData?: AppData; error?: string }> => {
    const { appCrudEndpoint, nonce } = window.tsfmData;

    if (!appCrudEndpoint || !nonce) {
        const error = 'Missing appCrudEndpoint or nonce.';
        console.error(error);
        return { error };
    }

    try {
        const response = await fetch(appCrudEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            },
            body: JSON.stringify({ 'app-id': appId }),
        });

        const data: CreateAppResponse = await response.json();

        if (response.ok && data.success && data.app_data) {
            return { appData: data.app_data };
        } else {
            const error = data.message || 'Unknown error occurred.';
            console.error('Error creating app:', error);
            return { error };
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred.';
        console.error('Error creating app:', errorMessage);
        return { error: errorMessage };
    }
};
