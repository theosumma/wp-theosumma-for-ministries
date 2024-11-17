document.addEventListener('DOMContentLoaded', function () {
    const openChatButton = document.getElementById('tsfm-open-chat');
    const closeChatButton = document.getElementById('tsfm-close-chat');
    const modalContainer = document.getElementById('tsfm-modal-container');
    const chatIframe = document.getElementById('ts-chat-widget-iframe');
    const chatImage = openChatButton.querySelector('img');
    const createNewThreadButton = document.getElementById('tsfm-new-chat');

    let shouldOpenChat = false;

    let token = localStorage.getItem('tsfm_jwt_token');
    let threadId = localStorage.getItem('tsfm_thread_id');
    let threadCreatedAt = localStorage.getItem('tsfm_thread_created');

    // Helper: Generate a random ID
    function generateRandomId() {
        return 'anon_' + Math.random().toString(36).substr(2, 10);
    }

// Helper: Fetch user IP (simple external example)
    async function getUserIP() {
        const res = await fetch('https://api.ipify.org?format=json');
        const { ip } = await res.json();
        return ip;
    }

    const isLoading = () => {
        console.log('Loading...');
        // Disable the button to prevent multiple clicks
        openChatButton.disabled = true;
        // Add loading animation to the image
        chatImage.classList.add('loading-icon');
    }

    const failedLoading = (location = 0) => {
        console.log('Failed to load chat!', location);
        openChatButton.disabled = false;
        chatImage.classList.remove('loading-icon');
    }

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

    // Set up the onload listener once
    chatIframe.addEventListener('load', () => {
        console.log('Iframe loaded with src:', chatIframe.src);
        if (shouldOpenChat && token) {
            // Verify that the src is the chat URL
            const expectedSrc = `${tsfmData.theosummaFrontendUrl}threads/`;
            if (chatIframe.src.startsWith(expectedSrc)) {
                chatIframe.contentWindow.postMessage({ token: token }, tsfmData.theosummaFrontendUrl);
                console.log('Chat iframe loaded and message sent!');
                openChatWindow();
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

    openChatButton.addEventListener('click', async function () {
        isLoading();
        if (!token) {
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
                    localStorage.setItem('tsfm_jwt_token', data.token);
                    token = data.token;
                } else {
                    alert('Failed to authenticate. Please try again.');
                    failedLoading(1);
                    return;
                }
            } catch (error) {
                failedLoading(2);
                console.error('Error:', error);
                alert('An error occurred while authenticating.');
                return;
            }
        }

        if (
            !threadId || // 1. If there's no thread ID, it enters the block.
            (threadId && new Date(threadCreatedAt) < new Date(Date.now() - 1000 * 60 * 60 * 24 * 7)) // 2. If there is a thread ID but it's older than 7 days, it also enters the block.
        ) {
            await createThread();
        }

        if (threadId && token) {
            shouldOpenChat = true; // Set the flag to open chat on iframe load
            isLoaded(threadId, token);
        } else {
            failedLoading(3);
        }
    });

    const isLoaded = (threadId) => {
        if (!threadId) {
            failedLoading();
            return;
        }
        console.log('Chat loaded!');
        openChatButton.disabled = false;
        chatImage.classList.remove('loading-icon');

        // Set iframe src to start loading
        const url = `${tsfmData.theosummaFrontendUrl}threads/${threadId}`;
        chatIframe.setAttribute('src', url);
    };

    closeChatButton.addEventListener('click', function () {
        closeChatWindow();
    });

    createNewThreadButton.addEventListener('click', async function () {
        createNewThreadButton.disabled = true;
        createNewThreadButton.textContent = 'Creating new chat...';
        await createThread();
        if (threadId && token) {
            isLoaded(threadId, token);
        }
        createNewThreadButton.disabled = false;
        createNewThreadButton.textContent = 'New Chat';
    });
});
