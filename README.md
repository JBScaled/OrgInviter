# GitHub Organization Inviter

This Node.js script automates the process of inviting GitHub users to an organization based on a list of GitHub usernames.

---

## 🚀 Getting Started

### 1. Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

This script uses:

- `@octokit/rest@18` – GitHub REST API SDK (Classic, compatible with CommonJS)
- `dotenv` – For loading environment variables

---

### 2. Set Up Your `.env` File

Create a `.env` file in the root directory and add the following:

```env
GITHUB_TOKEN=your_personal_access_token
GITHUB_ORG=your_organization_name
```

- `GITHUB_TOKEN` must have the **admin:org** scope.
- Generate a token here: [https://github.com/settings/tokens](https://github.com/settings/tokens)

---

### 3. Prepare Your GitHub Username List

Save your GitHub usernames in a file called `github_usernames.json` using the format:

```json
[
  "username1",
  "username2",
  "username3"
]
```

---

### 4. Run the Script

To execute the script:

```bash
node inviteUsers.js
```

---

### 5. Review Failed Invites

Any invite failures (e.g., invalid usernames, rate limits) will be saved to:

```bash
failed_invites.json
```

You can use this file to retry the failed invites later.

---

## 🛠 Script Overview

The script performs the following actions:

1. Loads the GitHub organization and token from `.env`
2. Reads a list of usernames from `github_usernames.json`
3. Attempts to invite each user via the GitHub API
4. Logs successes to the console
5. Writes any failures (with reasons) to `failed_invites.json`

---

## 🧠 Notes

- GitHub enforces a rate limit of **50 invitations per 24 hours**.
- The script skips usernames that are invalid or already invited.
- You can update the script to assign `"admin"` role instead of `"member"` if needed.

---

## 📁 Example File Structure

```
.
├── inviteUsers.js
├── .env
├── github_usernames.json
└── failed_invites.json  # Created automatically
```

---

## 📄 License

MIT
