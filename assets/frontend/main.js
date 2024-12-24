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
    const chatButtonWrapper = document.getElementById('tsfm-chat-button');
    const openChatButton = document.getElementById('tsfm-open-chat');
    const closeChatButton = document.getElementById('tsfm-close-chat');
    const modalContainer = document.getElementById('tsfm-modal-container');
    const chatIframe = document.getElementById('ts-chat-widget-iframe');
    const chatImage = openChatButton.querySelector('img');
    const createNewThreadButton = document.getElementById('tsfm-new-chat');

    let shouldOpenChat = false;

    let token = localStorage.getItem('tsfmJwtToken');
    let threadId = localStorage.getItem('tsfmThreadId');

    // ===============================================================
    // ===================== define inner functions ==================
    // ===============================================================

    const openChatWindow = () => {
        modalContainer.classList.remove('hidden');
        modalContainer.classList.add('one');
        modalContainer.style.display = 'block';

        document.body.classList.add('modal-active');
    }

    const closeChatWindow = () => {
        modalContainer.classList.add('out');

        setTimeout(function () {
            modalContainer.classList.remove('one', 'out');
            modalContainer.style.display = 'none';

            document.body.classList.remove('modal-active');

            // Prevent the onload event from opening the chat again
            shouldOpenChat = false;
            chatIframe.setAttribute('src', '');
        }, 1000);
    }

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

    let isCreatingThread = false;
    const createThread = async () => {
        if (isCreatingThread) return;
        isCreatingThread = true;
        try {
            const response = await fetch(tsfmData.threadEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': tsfmData.nonce,
                },
                body: JSON.stringify({
                    locale: tsfmData.locale,
                    app_id: tsfmData.popUpAppId
                }),
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
        } finally {
            isCreatingThread = false;
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
        if (token) {
            chatButtonWrapper.style.display = 'block';
        } else {
            return;
        }
    } else {
        const decryptedToken = decodeAndCheckToken(token);
        if (decryptedToken.expired) {
            await createToken();
            if (token) {
                chatButtonWrapper.style.display = 'block';
            } else {
                return;
            }
        } else {
            chatButtonWrapper.style.display = 'block';
        }
    }


    // ===============================================================
    // ========================== listeners ==========================
    // ===============================================================

    openChatButton.addEventListener('click', async function () {
        const decryptedToken = decodeAndCheckToken(token);
        if (decryptedToken.expired) {
            await createToken();
            if (!token) {
                return;
            }
        }
        openChatWindow();
        if (!threadId) {
            await createThread();
        }

        if (threadId) {
            setIframeSrc(threadId, token);
        }
    });

    // // Set up the onload listener once
    // chatIframe.addEventListener('load', () => {
    //     if (shouldOpenChat && token) {
    //         // Verify that the src is the chat URL
    //         const expectedSrc = `${tsfmData.theosummaFrontendUrl}threads/`;
    //         if (chatIframe.src.startsWith(expectedSrc)) {
    //             openChatWindow();
    //         }
    //     }
    // });

    closeChatButton.addEventListener('click', function () {
        closeChatWindow();
    });

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
