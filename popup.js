document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const patInput = document.getElementById('pat');
    const checkButton = document.getElementById('checkButton');
    const clearButton = document.getElementById('clearButton');
    const statusDiv = document.getElementById('status');
    const resultsDiv = document.getElementById('results');

    // Load saved data from storage on startup
    chrome.storage.local.get(['githubUsername', 'githubPat'], (data) => {
        if (data.githubUsername) {
            usernameInput.value = data.githubUsername;
        }
        if (data.githubPat) {
            patInput.value = data.githubPat;
        }
    });

    checkButton.addEventListener('click', async () => {
        const username = usernameInput.value;
        const pat = patInput.value;

        if (!username || !pat) {
            statusDiv.textContent = 'Please enter both your GitHub username and a Personal Access Token.';
            return;
        }

        // Save data to storage
        chrome.storage.local.set({ githubUsername: username, githubPat: pat });

        resultsDiv.innerHTML = '';
        statusDiv.textContent = 'Fetching data... This might take a moment for large lists.';
        checkButton.disabled = true;

        try {
            // Fetch all users you are following
            const following = await fetchAllUsers(`https://api.github.com/users/${username}/following`, pat);
            // Fetch all users who are following you
            const followers = await fetchAllUsers(`https://api.github.com/users/${username}/followers`, pat);

            statusDiv.textContent = `Found ${following.length} users you are following and ${followers.length} followers.`;

            // Find users who are not following you back
            const followerLogins = new Set(followers.map(f => f.login));
            const notFollowingBack = following.filter(user => !followerLogins.has(user.login));

            displayResults(notFollowingBack);

        } catch (error) {
            statusDiv.textContent = `Error: ${error.message}. Check your username and PAT.`;
            console.error('Error fetching GitHub data:', error);
        } finally {
            checkButton.disabled = false;
        }
    });

    clearButton.addEventListener('click', () => {
        chrome.storage.local.clear(() => {
            usernameInput.value = '';
            patInput.value = '';
            resultsDiv.innerHTML = '';
            statusDiv.textContent = 'Saved data cleared.';
        });
    });

    /**
     * Fetches all users from a paginated GitHub API endpoint.
     * @param {string} url The initial API URL.
     * @param {string} pat The Personal Access Token.
     * @returns {Promise<Array>} An array of user objects.
     */
    async function fetchAllUsers(url, pat) {
        let allUsers = [];
        let nextUrl = url;

        while (nextUrl) {
            const response = await fetch(nextUrl, {
                headers: {
                    'Authorization': `token ${pat}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch data from GitHub API.');
            }

            const users = await response.json();
            allUsers = allUsers.concat(users);

            // Check for the 'next' page link
            const linkHeader = response.headers.get('Link');
            nextUrl = null;
            if (linkHeader) {
                const nextLink = linkHeader.split(',').find(s => s.includes('rel="next"'));
                if (nextLink) {
                    nextUrl = nextLink.split(';')[0].trim().slice(1, -1);
                }
            }
        }
        return allUsers;
    }

    /**
     * Displays the results in the results div.
     * @param {Array} users An array of user objects to display.
     */
    function displayResults(users) {
        if (users.length === 0) {
            resultsDiv.innerHTML = '<h2>Good news!</h2><p>Everyone you follow is following you back.</p>';
            return;
        }

        const title = document.createElement('h2');
        title.textContent = 'Not Following You Back:';
        resultsDiv.appendChild(title);

        const list = document.createElement('ul');
        list.classList.add('user-list');
        users.forEach(user => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = user.html_url;
            link.textContent = user.login;
            link.target = "_blank"; // Open in a new tab
            listItem.appendChild(link);
            list.appendChild(listItem);
        });
        resultsDiv.appendChild(list);
    }
});