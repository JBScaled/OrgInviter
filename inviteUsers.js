const { Octokit } = require("@octokit/rest");
require("dotenv").config();
const fs = require("fs");

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });
const org = process.env.GITHUB_ORG;

// Load GitHub usernames from file
const usernames = require("./github_usernames.json");

const failedInvites = [];

async function inviteUsers() {
  for (const username of usernames) {
    try {
      await octokit.rest.orgs.setMembershipForUser({
        org,
        username,
        role: "member", // can also be "admin"
      });
      console.log(`✅ Invited ${username}`);
    } catch (err) {
      console.error(`❌ Failed to invite ${username}: ${err.message}`);
      failedInvites.push({ username, error: err.message });
    }
  }

  // Save failed invites to file
  fs.writeFileSync("failed_invites.json", JSON.stringify(failedInvites, null, 2));
  console.log("✍️  Failed invites saved to failed_invites.json");
}

inviteUsers();
