document.addEventListener('DOMContentLoaded', async function () {
    const apiNonce = tsfmData.nonce; // WordPress REST API nonce
    const endpoints = {
        appCrud: tsfmData.appCrudEndpoint
    }

    const infoMessages = {
        createApp: 'Please enter the app id provided by Theosumma.',
    };

    const newAppBtn = document.getElementById('tsfm-ma-new-app');
    const appItems = document.querySelectorAll('#tsfm-manage-apps .tsfm-ma-app-item');
    const noAppSelected = document.getElementById('tsfm-ma-no-app-selected');
    const newAppFormWrapper = document.getElementById('tsfm-ma-new-app-form-wrapper');
    const newAppForm = document.getElementById('tsfm-ma-new-app-form');
    const cancelCreateAppBtn = document.getElementById('tsfm-ma-cancel-create-btn');
    const infoMessage = document.getElementById('tsfm-ma-info-message');
    const appDetailsWrapper = document.getElementById('tsfm-ma-app-details-wrapper');
    const deleteAppBtn = document.getElementById('tsfm-ma-delete-app-btn');

    let typingAbortController;

    // Typing function
    const typeText = async (text, type, element, abortSignal) => {
        element.innerHTML = '';
        element.className = ''; // Reset classes

        if (type === 'success') {
            element.classList.add('tsfm-ma-success-message');
        } else if (type === 'error') {
            element.classList.add('tsfm-ma-error-message');
        } else {
            element.classList.add('tsfm-ma-info-text');
        }

        for (let i = 0; i < text.length; i++) {
            if (abortSignal?.aborted) {
                return;
            }
            element.innerHTML += text[i];
            await new Promise((resolve) => setTimeout(resolve, 30));
        }
    };

    // Function to handle UI changes and typing effect
    const handleUIAction = (options) => {
        const {
            appDetailsWrapper,
            showForm,
            showInfoText,
            infoText,
            messageType,
            hideNoAppSelected = false
        } = options;

        // Abort any ongoing typing
        if (typingAbortController) {
            typingAbortController.abort();
        }

        if (showForm) {
            newAppFormWrapper.style.display = 'block';
            noAppSelected.style.display = 'none';
        } else {
            newAppFormWrapper.style.display = 'none';
            if (!hideNoAppSelected) {
                noAppSelected.style.display = 'block';
            }
        }

        // Set up typing effect if text is provided
        if (showInfoText && infoText) {
            typingAbortController = new AbortController();
            typeText(infoText, messageType, infoMessage, typingAbortController.signal);
        } else {
            infoMessage.textContent = '';
            infoMessage.className = ''; // Reset classes
        }
    };


    // Function to display messages with typing effect
    const showMessage = (message, type) => {
        // Abort any ongoing typing
        if (typingAbortController) {
            typingAbortController.abort();
        }

        typingAbortController = new AbortController();
        typeText(message, type, infoMessage, typingAbortController.signal);
    };

    const createApp = async (appId) => {

        if (!endpoints.appCrud || !apiNonce) {
            console.error('Missing endpoint or nonce.');
            showMessage('An error occurred while creating the app. Please try again.', 'error');
            return null;
        }

        try {
            const response = await fetch(endpoints.appCrud, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': apiNonce, // Pass the WordPress REST API nonce
                },
                body: JSON.stringify({'app-id': appId}),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                console.log('App created successfully:', data);
                showMessage('App created successfully!', 'success');
                return data?.app_data;
            } else {
                console.error('Error creating app:', data.message);
                showMessage(data.message || 'Failed to create the app. Please try again.', 'error');
                return null;
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('An unexpected error occurred while creating the app.', 'error');
            return null;
        }
    };

    // Function to delete an app
    const deleteApp = async (appId) => {
        if (!endpoints.appCrud || !apiNonce) {
            console.error('Missing endpoint or nonce.');
            showMessage('An error occurred while deleting the app. Please try again.', 'error');
            return false;
        }

        try {
            const response = await fetch(`${endpoints.appCrud}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'X-WP-Nonce': apiNonce, // Pass the WordPress REST API nonce
                },
                body: JSON.stringify({'app-id': appId.toString()}),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                console.log('App deleted successfully:', data);
                showMessage('App deleted successfully!', 'success');
                return true;
            } else {
                console.error('Error deleting app:', data.message);
                showMessage(data.message || 'Failed to delete the app. Please try again.', 'error');
                return false;
            }
        } catch (error) {
            console.error('Error:', error);
            showMessage('An unexpected error occurred while deleting the app.', 'error');
            return false;
        }
    };

    // Function to add a new app to the app list
    const addAppToList = (appData) => {
        const appList = document.querySelector('#tsfm-manage-apps .list-group');
        if (!appList) {
            // If the app list doesn't exist, create it
            const listGroup = document.createElement('div');
            listGroup.className = 'list-group';
            document.querySelector('#tsfm-ma-left-container').appendChild(listGroup);
        }

        // Remove the "No app was created yet" message if it exists
        const noAppsMessage = appList.querySelector('p.text-muted.text-center');
        if (noAppsMessage) {
            noAppsMessage.remove();
        }

        const newAppItem = document.createElement('a');
        newAppItem.href = '#';
        newAppItem.className = 'tsfm-ma-app-item list-group-item list-group-item-action';
        newAppItem.textContent = appData.title || appData.app_id || 'New App';
        newAppItem.dataset.appId = appData.app_id;

        // Add event listener to the new app item
        newAppItem.addEventListener('click', function (e) {
            e.preventDefault();
            displayAppDetails(appData);
        });

        appList.appendChild(newAppItem);
    };

    // Function to display app details by targeting specific span elements
    const displayAppDetails = (appData) => {
        // Hide the "No app selected" message
        noAppSelected.style.display = 'none';

        // Get references to each detail span by their IDs
        const appIdElement = document.getElementById('tsfm-ma-app-details-app-id');
        const titleElement = document.getElementById('tsfm-ma-app-details-title');
        const descriptionElement = document.getElementById('tsfm-ma-app-details-description');
        const welcomeMessageElement = document.getElementById('tsfm-ma-app-details-welcome-message');

        // Check if all elements exist before updating
        if (appIdElement && titleElement && descriptionElement && welcomeMessageElement) {
            // Populate each span with the corresponding app data
            appIdElement.textContent = appData.app_id || 'N/A';
            titleElement.textContent = appData.title || 'N/A';
            descriptionElement.textContent = appData.description || 'N/A';
            welcomeMessageElement.textContent = appData.welcomeMessageContent || 'N/A';
        } else {
            console.error('One or more app detail elements are missing in the DOM.');
        }

        // Ensure the app details wrapper is visible
        appDetailsWrapper.style.display = 'flex';
    };


    // Event Listeners
    newAppBtn.addEventListener('click', function () {
        handleUIAction({
            showForm: true,
            showInfoText: true,
            infoText: infoMessages.createApp,
            messageType: 'info',
        });
    });

    cancelCreateAppBtn.addEventListener('click', function () {
        handleUIAction({
            showForm: false,
            showInfoText: false,
        });
        newAppForm.reset();
    });

    newAppForm.addEventListener('submit', async function (event) {
        event.preventDefault();
        const formData = new FormData(newAppForm);
        const appId = formData.get('app-id').trim();

        // UUID validation regex
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

        if (!appId) {
            showMessage('App ID cannot be empty.', 'error');
            return;
        }

        if (!uuidRegex.test(appId)) {
            showMessage('Invalid App ID. Please enter a valid UUID.', 'error');
            return;
        }

        // Disable the form while processing
        const submitButton = newAppForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        showMessage('Creating app...', 'info');

        const appData = await createApp(appId);

        // Re-enable the form
        submitButton.disabled = false;

        if (appData) {
            // Add the new app to the list
            addAppToList(appData);

            // Optionally, automatically select the new app
            displayAppDetails(appData);

            // Reset the form and hide it
            handleUIAction({
                showForm: false,
                showInfoText: false,
                hideNoAppSelected: true, // Prevent showing the "No app selected" message
            });
            newAppForm.reset();
        }
    });

    deleteAppBtn.addEventListener('click', async function () {
        const appId = document.getElementById('tsfm-ma-app-details-app-id').textContent.trim();

        if (!appId) {
            showMessage('No app selected for deletion.', 'error');
            return;
        }

        const confirmDeletion = confirm('Are you sure you want to delete this app? This action cannot be undone.');
        if (!confirmDeletion) {
            return;
        }

        const success = await deleteApp(appId);

        if (success) {
            // Remove the app from the list
            const appItem = document.querySelector(`.tsfm-ma-app-item[data-app-id="${appId}"]`);
            if (appItem) {
                appItem.remove();
            }

            // Reset the details and show the placeholder message if no apps are left
            handleUIAction({
                showForm: false,
                showInfoText: false,
            });
        }
    });

    // Initialize existing app items with click listeners
    appItems.forEach((appItem) => {
        appItem.addEventListener('click', function (e) {
            e.preventDefault();
            const appId = this.dataset.appId;
            const appTitle = this.dataset.appTitle;
            const appDescription = this.dataset.appDescription;
            const welcomeMessageContent = this.dataset.welcomeMessageContent;

            displayAppDetails({
                app_id: appId.trim(),
                title: appTitle.trim(),
                description: appDescription.trim(),
                welcomeMessageContent: welcomeMessageContent.trim(),
            });
        });
    });
});
