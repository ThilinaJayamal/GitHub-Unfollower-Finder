# GitHub Follower Checker

A simple and effective Chrome extension to help you identify which GitHub users you are following are not following you back. This tool is perfect for managing your network and keeping your following list tidy.

### Features

* **Quick & Easy Check**: Get a list of non-followers with a single click.

* **Persistent Data**: Securely saves your GitHub username and Personal Access Token (PAT) locally so you only have to enter them once.

* **Clear Interface**: A simple and clean user interface that is easy to understand.

* **Direct Links**: Each user in the results list is a clickable link to their GitHub profile.

* **Pagination Support**: Efficiently handles large lists of followers and following by automatically fetching all pages from the GitHub API.

### Installation

To use this extension, you'll need to load it as an "unpacked" extension in your Chrome browser.

1. **Create the Project Folder**: Create a new folder on your computer and save the following files inside it: `manifest.json`, `popup.html`, `popup.css`, and `popup.js`. The extension's code should be in these four files. You'll also need to create a subfolder named `icons` and add `16.png`, `48.png`, and `128.png` files for the extension's icon.

2. **Enable Developer Mode**: Open Chrome and
I can certainly provide the content of the `README.md` file as code, which shows the raw Markdown text.


```markdown
# GitHub Follower Checker

A simple and effective Chrome extension to help you identify which GitHub users you are following are not following you back. This tool is perfect for managing your network and keeping your following list tidy.

### Features

* **Quick & Easy Check**: Get a list of non-followers with a single click.

* **Persistent Data**: Securely saves your GitHub username and Personal Access Token (PAT) locally so you only have to enter them once.

* **Clear Interface**: A simple and clean user interface that is easy to understand.

* **Direct Links**: Each user in the results list is a clickable link to their GitHub profile.

* **Pagination Support**: Efficiently handles large lists of followers and following by automatically fetching all pages from the GitHub API.

### Installation

To use this extension, you'll need to load it as an "unpacked" extension in your Chrome browser.

1. **Create the Project Folder**: Create a new folder on your computer and save the following files inside it: `manifest.json`, `popup.html`, `popup.css`, and `popup.js`. The extension's code should be in these four files. You'll also need to create a subfolder named `icons` and add `16.png`, `48.png`, and `128.png` files for the extension's icon.

2. **Enable Developer Mode**: Open Chrome and navigate to `chrome://extensions/`. In the top-right corner, toggle on **Developer mode**.

3. **Load the Extension**: Click the **Load unpacked** button that appears.

4. **Select the Folder**: Select the folder you created in step 1. The extension should now be added to your Chrome browser.

### How to Use

1. **Generate a GitHub Personal Access Token (PAT)**:

   * This extension requires user permissions with `Read access to followers` and `Read and Write access to profile` to fetch your follower data. Your regular GitHub password will not work.

   * Go to [**GitHub Settings > Developer settings > Personal access tokens (classic)**](https://github.com/settings/tokens).

   * Click **Generate new token (classic)**.

   * Give your token a name (e.g., "Follower Checker"), set an expiration, and check the `Read access to followers` and `Read and Write access to profile` permissions.

   * **IMPORTANT**: Copy the generated token immediately! You will not be able to see it again.

2. **Open the Extension**: Click the GitHub Follower Checker icon in your Chrome toolbar.

3. **Enter Credentials**: Enter your GitHub username and the PAT you just created.

4. **Run the Check**: Click the **Check** button. The extension will fetch your data and display a list of users who are not following you back.

5. **Clear Saved Data**: You can click the **Clear Saved Data** button at any time to remove your username and token from the browser's local storage.

### Important Note on Security

Your Personal Access Token is stored securely in your browser's local storage. The token is **never** sent to any external server other than the GitHub API itself. However, please be mindful of who has access to your browser and computer. If you have any security concerns, you can always delete the token from your GitHub settings after you are done using the extension.

### Troubleshooting

* **"Error: Bad credentials"**: Double-check your GitHub username and PAT. The PAT must be copied correctly and have the `read:user` scope.

* **"Error: Failed to fetch"**: This could indicate a network issue or that the GitHub API is temporarily unavailable. Try again after a few minutes.

* **Extension doesn't appear**: Make sure you have **Developer mode** enabled and have selected the correct folder when clicking **Load unpacked**.

### Contributing

We welcome contributions! If you have suggestions for new features, bug fixes, or improvements, please feel free to contribute.

### License

This project is open-source and available under the MIT License.
