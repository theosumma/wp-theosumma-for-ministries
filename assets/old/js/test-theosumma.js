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
    // ===============================================================
    // ========================= define vars =========================
    // ===============================================================
    const chatIframe = document.getElementById('ts-chat-widget-iframe');
    const createNewThreadButton = document.getElementById('tsfm-test-theosumma-new-chat');

    let shouldOpenChat = false;

    let token = localStorage.getItem('tsfmJwtToken');
    let threadId = localStorage.getItem('tsfmThreadId');

    // ===============================================================
    // ===================== define inner functions ==================
    // ===============================================================

    const createToken = async () => {
        try {
            // Send POST request to Auth endpoint with nonce to get a new token
            const response = await fetch(tsfmData.authEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': tsfmData.nonce,
                },
                body: JSON.stringify({}),
                credentials: 'include', // Use 'include' to send cookies in all requests
            });
            const data = await response.json();
            if (data.success && data.token) {
                // Store the JWT token in localStorage
                localStorage.setItem('tsfmJwtToken', data.token);
                token = data.token;
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while authenticating.');
        }
    }

    const createThread = async () => {
        try {
            const response = await fetch(tsfmData.threadEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': tsfmData.nonce,
                },
                body: JSON.stringify({
                    locale: tsfmData.locale
                }),
                credentials: 'include', // Use 'include' to send cookies in all requests
            });
            const data = await response.json();
            const thread = JSON.parse(data?.thread_data);
            if (data.success && thread && thread.thread_id) {
                // Store the data
                localStorage.setItem('tsfmThreadId', thread.thread_id);
                threadId = thread.thread_id;
            } else {
                throw new Error('Failed to create thread');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while creating thread.');
        }
    }

    const setIframeSrc = (localThreadId = '') => {
        let finalThreadId = localThreadId || threadId;
        if (!finalThreadId) {
            return;
        }
        console.log('Chat loaded!');
        // Set iframe src to start loading
        chatIframe.setAttribute(
            'src',
            `${tsfmData.theosummaFrontendUrl}threads/${finalThreadId}?token=${token}`
        );
    };

    // ===============================================================
    // =========================== execute ===========================
    // ===============================================================

    if (!token) {
        await createToken();
    } else {
        const decryptedToken = decodeAndCheckToken(token);
        if (decryptedToken.expired) {
            await createToken();
        }
    }

    if (token && !threadId) {
        await createThread();
    }

    if (token && threadId) {
        setIframeSrc(threadId);
    }


    // ===============================================================
    // ========================== listeners ==========================
    // ===============================================================

    createNewThreadButton.addEventListener('click', async function () {
        createNewThreadButton.disabled = true;
        createNewThreadButton.textContent = 'Creating new chat...';
        const decryptedToken = decodeAndCheckToken(token);
        if (decryptedToken.expired) {
            await createToken();
            if (!token) {
                return;
            }
        }
        await createThread();
        if (threadId && token) {
            setIframeSrc(threadId);
        }
        createNewThreadButton.disabled = false;
        createNewThreadButton.textContent = 'New Chat';
    });
});
