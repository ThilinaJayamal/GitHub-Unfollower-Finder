# GitHub Follower Checker

A simple and effective Chrome extension to help you identify which GitHub users you are following are not following you back. This tool is perfect for managing your network and keeping your following list tidy.

---

## 🚀 Features

- **Quick & Easy Check**: Get a list of non-followers with a single click.
- **Persistent Data**: Securely saves your GitHub username and Personal Access Token (PAT) locally.
- **Clear Interface**: Simple and clean UI for easy interaction.
- **Direct Links**: Clickable links to each user's GitHub profile.
- **Pagination Support**: Automatically fetches all pages from the GitHub API for large lists.

---

## 🧩 Installation

To install the extension manually:

1. **Create the Project Folder**  
   Save the following files inside a new folder:
   - `manifest.json`
   - `popup.html`
   - `popup.css`
   - `popup.js`  
   Also create a subfolder named `icons` and add:
   - `16.png`
   - `48.png`
   - `128.png`

2. **Enable Developer Mode**  
   Open Chrome and go to `chrome://extensions/`.  
   Toggle **Developer mode** in the top-right corner.

3. **Load the Extension**  
   Click **Load unpacked** and select the folder you created.

---

## 🔧 How to Use

1. **Generate a GitHub Personal Access Token (PAT)**  
   - Go to [GitHub Settings > Developer settings > Personal access tokens (classic)](https://github.com/settings/tokens).
   - Click **Generate new token (classic)**.
   - Name your token (e.g., "Follower Checker"), set an expiration, and select:
     - `read:user`
     - `read:org` (optional for org data)
   - **Important**: Copy the token immediately. You won’t be able to view it again.

2. **Open the Extension**  
   Click the GitHub Follower Checker icon in your Chrome toolbar.

3. **Enter Credentials**  
   Input your GitHub username and PAT.

4. **Run the Check**  
   Click **Check** to fetch and display users who aren’t following you back.

5. **Clear Saved Data**  
   Use the **Clear Saved Data** button to remove stored credentials.

---

## 🔐 Security Notice

Your PAT is stored securely in your browser's local storage and is only used to communicate with the GitHub API. It is never sent to any third-party server. For added security, you can revoke the token from your GitHub settings after use.

---

## 🛠️ Troubleshooting

- **Error: Bad credentials**  
  Ensure your username and PAT are correct and that the token has the required scopes.

- **Error: Failed to fetch**  
  This may be due to network issues or GitHub API downtime. Try again later.

- **Extension not appearing**  
  Confirm Developer mode is enabled and the correct folder was selected during installation.

---

## 🤝 Contributing

We welcome contributions! Feel free to submit issues, feature requests, or pull requests to improve the extension.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
