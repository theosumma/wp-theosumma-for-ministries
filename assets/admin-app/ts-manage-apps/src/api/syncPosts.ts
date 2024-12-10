// src/api/syncPosts.ts

import {replacePlaceholders} from "../utils/helpers.ts";

interface SyncPostsResponse {
    success: boolean;
    message?: string;
}

export const syncPosts = async (appId: string, postType: string): Promise<{ success?: boolean; error?: string }> => {
    const {syncAppPosts, nonce} = window.tsfmData;

    if (!syncAppPosts || !nonce) {
        const error = 'Missing syncAppPosts or nonce.';
        console.error(error);
        return {error};
    }

    try {
        const resolvedEndpoint = replacePlaceholders(syncAppPosts, {app_id: appId, post_type: postType  });

        const response = await fetch(resolvedEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            }
        });

        const data: SyncPostsResponse = await response.json();

        if (response.ok && data.success) {
            return {success: true};
        } else {
            const error = data.message || 'Unknown error occurred.';
            console.error('Error creating app:', error);
            return {error};
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred.';
        console.error('Error creating app:', errorMessage);
        return {error: errorMessage};
    }
};
