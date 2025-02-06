// src/api/fetchApps.ts

export const getPostsCount = async (postType: string): Promise<number> => {
    const { restBaseEndpoint, nonce } = window.tsfmData;

    if (!restBaseEndpoint || !nonce) {
        console.error('Missing restBaseEndpoint or nonce.');
        return 0;
    }

    try {
        const response = await fetch(restBaseEndpoint + `/${postType}?per_page=1`, {
            method: 'HEAD',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            },
        });

        if (!response.ok) {
            console.error('Error fetching post count:', response.statusText);
            return 0;
        }

        // Extract the total number of posts from the X-WP-Total header
        const totalPosts = response.headers.get('X-WP-Total');

        if (totalPosts) {
            return parseInt(totalPosts, 10);
        } else {
            console.error('X-WP-Total header not found.');
            return 0;
        }
    } catch (error) {
        console.error('Error fetching agents:', error);
        return 0;
    }
};
