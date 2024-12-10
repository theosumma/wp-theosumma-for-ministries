// src/api/fetchRelatedPostTypes.ts

import {RelatedPostTypes} from "../types";
import {replacePlaceholders} from "../utils/helpers.ts";

export const fetchRelatedPostTypes = async (app_id: string): Promise<RelatedPostTypes | null> => {
    const {appRelatedPostTypesEndpoint, nonce} = window.tsfmData || {};

    if (!appRelatedPostTypesEndpoint || !nonce) {
        console.error('REST API endpoint or nonce is missing.');
        return null;
    }

    const resolvedEndpoint = replacePlaceholders(appRelatedPostTypesEndpoint, {app_id: app_id});

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
            console.error('Error fetching post types:', error);
            return null;
        }

        const data = await response.json();

        // Validate and return only the `post_types` field if `success` is true
        if (data.success && Array.isArray(data.post_types)) {
            return { post_types: data.post_types };
        } else {
            console.error('Invalid data structure:', data);
            return null;
        }
    } catch (error) {
        console.error('Error fetching post types:', error);
        return null;
    }
};
