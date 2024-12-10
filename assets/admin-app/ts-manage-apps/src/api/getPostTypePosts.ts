// src/api/getPostTypePosts.ts

import {replacePlaceholders} from "../utils/helpers.ts";
import {PostTypePost} from "../types";

interface SyncPostsResponse {
    success: boolean;
    message?: string;
    posts: PostTypePost[];
}

export const getPostTypePosts = async (appId: string, postType: string): Promise<{ posts?: PostTypePost[]; error?: string }> => {
    const {getAppPosts, nonce} = window.tsfmData;

    if (!getAppPosts || !nonce) {
        const error = 'Missing getAppPosts or nonce.';
        console.error(error);
        return {error};
    }

    try {
        const resolvedEndpoint = replacePlaceholders(getAppPosts, {app_id: appId, post_type: postType  });

        const response = await fetch(resolvedEndpoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            }
        });

        const data: SyncPostsResponse = await response.json();

        if (response.ok && data.success) {
            return {posts: data.posts as PostTypePost[] };
        } else {
            console.error('Error fetching apps:', data.message);
            return {error: data.message};
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred.';
        console.error('Error fetching posts:', errorMessage);
        return {error: errorMessage};
    }
};
