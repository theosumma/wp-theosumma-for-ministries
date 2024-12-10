// src/api/fetchSyncingStatus.ts

import {PostTypeSyncingStatus} from "../types";
import {replacePlaceholders} from "../utils/helpers.ts";

export const fetchSyncingStatus = async (app_id: string): Promise<PostTypeSyncingStatus[] | null> => {
    const { syncingStatusEndpoint, nonce } = window.tsfmData || {};

    if (!syncingStatusEndpoint || !nonce) {
        console.error('REST API endpoint or nonce is missing.');
        return null;
    }

    const resolvedEndpoint = replacePlaceholders(syncingStatusEndpoint, { app_id: app_id });

    try {
        const response = await fetch(resolvedEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            },
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('Error fetching syncing status:', error);
            return null;
        }

        const data = await response.json();

        // Validate and transform the `post_types` field if `success` is true
        if (data.success && typeof data.post_types === 'object') {
            return Object.entries(data.post_types).map(
                ([post_type, values]: [string, any]) => ({
                    post_type,
                    total_posts: values.total_posts,
                    total_prepared_posts: values.total_prepared_posts,
                    unsynced_posts: values.unsynced_posts,
                })
            );
        } else {
            console.error('Invalid data structure:', data);
            return null;
        }
    } catch (error) {
        console.error('Error fetching syncing status:', error);
        return null;
    }
};
