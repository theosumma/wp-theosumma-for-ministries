// src/api/fetchPostTypes.ts

import { WPPostType } from "../types";

export const fetchPostTypes = async (): Promise<Record<string, WPPostType> | null> => {
    const { postTypesEndpoint, nonce } = window.tsfmData || {}; // Adjust if your nonce and endpoint setup differs

    if (!postTypesEndpoint || !nonce) {
        console.error('REST API endpoint or nonce is missing.');
        return null;
    }

    try {
        const response = await fetch(`${postTypesEndpoint}`, { // Adjust endpoint as necessary
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce, // Include if using nonce for authentication
            },
        });

        if (!response.ok) {
            const error = await response.text();
            console.error('Error fetching post types:', error);
            return null;
        }

        const data = await response.json();

        // Assuming data is an object where keys are post type slugs and values are WPPostType objects
        return data as Record<string, WPPostType>;
    } catch (error) {
        console.error('Error fetching post types:', error);
        return null;
    }
};
