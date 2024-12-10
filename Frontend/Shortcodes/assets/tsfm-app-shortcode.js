/**
 * Decodes a JWT token and checks if it has expired.
 *
 * @param {string} token - The JWT token to decode and check.
 * @returns {object} An object containing the decoded payload and expiration status.
 */
function decodeAndCheckToken(token) {
    if (!token) {
        return {isValid: false, expired: true, payload: null, error: 'No token provided'};
    }

    try {
        // Split the token into its parts
        const parts = token.split('.');
        if (parts.length !== 3) {
            return {isValid: false, expired: true, payload: null, error: 'Invalid token format'};
        }

        // Decode the payload
        const payloadBase64 = parts[1];
        const payloadJson = atob(payloadBase64.replace(/-/g, '+').replace(/_/g, '/'));
        const payload = JSON.parse(decodeURIComponent(escape(payloadJson)));

        // Get the current time
        const currentTime = Math.floor(Date.now() / 1000);

        // Check if the token has expired
        const expired = payload.exp ? currentTime >= payload.exp : false;

        return {
            isValid: true,
            expired: expired,
            payload: payload,
            error: null,
        };
    } catch (error) {
        console.error('Error decoding token:', error);
        return {isValid: false, expired: true, payload: null, error: 'Error decoding token'};
    }
}


document.addEventListener('DOMContentLoaded', async function () {
    if (tsfmAppShortcodeData === undefined)
        return;

    const nonce = tsfmAppShortcodeData.nonce;
    const locale = tsfmAppShortcodeData.locale;
    const appId = tsfmAppShortcodeData.appId;
    const authEndpoint = tsfmAppShortcodeData.authEndpoint;
    const threadEndpoint = tsfmAppShortcodeData.threadEndpoint;
    const theosummaFrontendUrl = tsfmAppShortcodeData.theosummaFrontendUrl;

    // ===============================================================
    // ========================= define vars =========================
    // ===============================================================
    const chatIframe = document.getElementById('ts-chat-widget-iframe');
    let createTokenRef = false;
    let createThreadRef = false;

    let isVisible = false;

    let token = localStorage.getItem('tsfmJwtToken');
    let threadId = localStorage.getItem('tsfmThreadId');
    let iframeSrcUrl = '';

    const getAppsThreadsLocalStorage = () => {
        return JSON.parse(localStorage.getItem('tsfmAppsThreads') || '{}');
    }
    const setAppsThreadsLocalStorage = (appsThreads) => {
        localStorage.setItem('tsfmAppsThreads', JSON.stringify(appsThreads));
    }

    /**
     * Helper function to toggle visibility
     */
    const toggleVisibility = () => {
        isVisible = !isVisible;
    }

    /**
     * Helper function to create a new JWT token
     */
    const createToken = async () => {
        if (createTokenRef) return null;
        createTokenRef = true;
        try {
            const response = await fetch(authEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify({}),
                credentials: 'include',
            });
            const data = await response.json();
            if (data.success && data.token) {
                localStorage.setItem('tsfmJwtToken', data.token);
                token = data.token;
                createTokenRef = false;
                return data.token;
            } else {
                console.error('Failed to create token:', data.message);
                createTokenRef = false;
                return null;
            }
        } catch (error) {
            console.error('Error creating token:', error);
            createTokenRef = false;
            return null;
        }
    }

    /**
     * Helper function to create a new thread
     */
    const createThread = async (post_id_value) => {
        if (createThreadRef) return null;
        createThreadRef = true;
        const body = {
            locale: locale,
            app_id: appId,
        }

        try {
            const response = await fetch(threadEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': nonce,
                },
                body: JSON.stringify(body),
                credentials: 'include',
            });
            const data = await response.json();
            const thread = data?.thread_data ? JSON.parse(data.thread_data) : null;
            if (data.success && thread?.thread_id) {
                const appsThreads = getAppsThreadsLocalStorage();
                appsThreads[appId] = thread.thread_id;
                setAppsThreadsLocalStorage(appsThreads);
                createThreadRef = false;
                return thread.thread_id;
            } else {
                throw new Error('Failed to create thread');
            }
        } catch (error) {
            console.error('Error creating thread:', error);
            createThreadRef = false;
            return null;
        }
    }

    const setIframeSrc = (currentThreadId, currentToken) => {
        iframeSrcUrl = `${theosummaFrontendUrl}threads/${currentThreadId}?locale=${locale}&token=${currentToken}`;
        chatIframe.src = iframeSrcUrl;
    }

    const initialize = async () => {
        let currentToken = token;

        if (!currentToken) {
            currentToken = await createToken();
        } else {
            const decoded = decodeAndCheckToken(currentToken);
            if (decoded.expired) {
                currentToken = await createToken();
            }
        }

        const appsThreads = getAppsThreadsLocalStorage();
        const currentThreadId = appsThreads[appId];

        if (currentToken && !currentThreadId) {
            const newThreadId = await createThread();
            if (newThreadId) {
                setIframeSrc(newThreadId, currentToken);
            }
        } else if (currentToken && currentThreadId) {
            setIframeSrc(currentThreadId, currentToken);
        }
    }

    await initialize();

});
