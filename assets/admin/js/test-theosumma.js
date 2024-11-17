document.addEventListener('DOMContentLoaded', function () {
    const modalContainer = document.getElementById('tsfm-modal-container');
    const chatIframe = document.getElementById('ts-chat-widget-iframe');
    const chatPlaceholder = document.getElementById('ts-chat-placeholder');
    const createNewThreadButton = document.getElementById('tsfm-test-theosumma-new-chat');

    let token = localStorage.getItem('tsfm_jwt_token');
    let threadId = localStorage.getItem('tsfm_thread_id');
    let threadCreatedAt = localStorage.getItem('tsfm_thread_created');

    const isLoading = () => {
        console.log('Loading...');
    }

    const failedLoading = (location = 0) => {
        console.log('Failed to load chat!', location);
    }

    const isLoaded = (threadId) => {
        if (!threadId) {
            failedLoading();
            return;
        }

        // Set iframe src to start loading
        const url = `${tsfmData.theosummaFrontendUrl}threads/${threadId}`;
        chatIframe.setAttribute('src', url);
    };

    const isThreadOld = () => {
        const sevenDaysAgo = Date.now() - 1000 * 60 * 60 * 24 * 7;
        return new Date(threadCreatedAt) < new Date(sevenDaysAgo);
    };

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
                localStorage.setItem('tsfm_jwt_token', data.token);
                token = data.token;
            } else {
                alert('Failed to authenticate. Please try again.');
                failedLoading(1);
            }
        } catch (error) {
            failedLoading(2);
            console.error('Error:', error);
            alert('An error occurred while authenticating.');
        }
    }

    if (
        !token ||
        !threadId ||
        isThreadOld()
    ) {
        // Hide the chat iframe if there's no token, no thread ID, or the thread is older than 7 days
        chatIframe.classList.add('hidden');
        (async () => {
            isLoading();
            if (!token) {
                await createToken()
            }

            if (
                token &&
                (
                    !threadId ||
                    isThreadOld()
                )
            ) {
                await createThread();
            }

            if (threadId && token) {
                isLoaded(threadId);
            } else {
                failedLoading(3);
            }
        })();
    } else if (
        token &&
        threadId &&
        !isThreadOld()
    ) {
        // Hide the chat placeholder if token and thread ID exist and the thread is not old
        chatPlaceholder.classList.add('hidden');
        isLoaded(threadId)
    }

    // Set up the onload listener once
    chatIframe.addEventListener('load', () => {
        console.log('Iframe loaded with src:', chatIframe.src);
        if (token) {
            // Verify that the src is the chat URL
            const expectedSrc = `${tsfmData.theosummaFrontendUrl}threads/`;
            if (chatIframe.src.startsWith(expectedSrc)) {
                chatIframe.contentWindow.postMessage({token: token}, tsfmData.theosummaFrontendUrl);
                console.log('Chat iframe loaded and message sent!');
            }
        }
    });

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
            if (data.success && thread && thread.thread_id && thread.created_at) {
                // Store the data
                localStorage.setItem('tsfm_thread_id', thread.thread_id);
                localStorage.setItem('tsfm_thread_created', thread.created_at);
                threadId = thread.thread_id;
                threadCreatedAt = thread.created_at;
            } else {
                alert('Failed to create thread. Please try again.');
                failedLoading(4);
            }
        } catch (error) {
            failedLoading(5);
            console.error('Error:', error);
            alert('An error occurred while creating thread.');
        }
    }

    createNewThreadButton.addEventListener('click', async function () {
        createNewThreadButton.disabled = true;
        createNewThreadButton.textContent = 'Creating thread...';
        isLoading();
        if (!token) {
            await createToken();
        }

        if (token) await createThread();

        if (threadId && token) {
            isLoaded(threadId);
        } else {
            failedLoading(3);
        }
        createNewThreadButton.disabled = false;
        createNewThreadButton.textContent = 'New Chat';
    });
});
