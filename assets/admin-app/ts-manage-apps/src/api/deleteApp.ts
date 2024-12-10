// src/api/deleteApp.ts

interface DeleteAppResponse {
    success: boolean;
    message?: string;
}

export const deleteApp = async (appId: string): Promise<{ success: boolean; error?: string }> => {
    const { appCrudEndpoint, nonce } = window.tsfmData;

    if (!appCrudEndpoint || !nonce) {
        const error = 'Missing appCrudEndpoint or nonce.';
        console.error(error);
        return { success: false, error };
    }

    try {
        const response = await fetch(appCrudEndpoint, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X-WP-Nonce': nonce,
            },
            body: JSON.stringify({ 'app-id': appId }),
        });

        const data: DeleteAppResponse = await response.json();

        if (response.ok && data.success) {
            return { success: true };
        } else {
            const error = data.message || 'Unknown error occurred.';
            console.error('Error deleting app:', error);
            return { success: false, error };
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unexpected error occurred.';
        console.error('Error deleting app:', errorMessage);
        return { success: false, error: errorMessage };
    }
};
