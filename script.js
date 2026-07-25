async function loadProjects() {
  const container = document.getElementById("projects-list");
  try {
    // 1. Fetch the registry of projects
    const registryResponse = await fetch("registry.json");
    if (!registryResponse.ok) throw new Error("Failed to load registry.json");
    const registry = await registryResponse.json();

    container.innerHTML = ""; // Clear loading message

    // 2. Process each project
    for (const item of registry) {
      const card = document.createElement("div");
      card.className = "project-card";

      // Fetch live GitHub repo data
      const ghResponse = await fetch(
        `https://api.github.com/repos/${item.owner}/${item.repo}`,
      );
      if (!ghResponse.ok) throw new Error(`GitHub API failed for ${item.repo}`);
      const ghData = await ghResponse.json();

      // Fetch GitHub user profile data
      const userResponse = await fetch(
        `https://api.github.com/users/${item.owner}`,
      );
      if (!userResponse.ok)
        throw new Error(`GitHub user API failed for ${item.owner}`);
      const userData = await userResponse.json();

      // Try to find npm packages by this user
      let npmPackages = [];
      try {
        const npmResponse = await fetch(
          `https://registry.npmjs.org/-/v1/search?text=maintainer:${item.owner}&size=5`,
        );
        if (npmResponse.ok) {
          const npmData = await npmResponse.json();
          npmPackages = npmData.objects.map((obj) => ({
            name: obj.package.name,
            version: obj.package.version,
            url: `https://www.npmjs.com/package/${obj.package.name}`,
          }));
        }
      } catch (e) {
        console.log("Could not fetch npm data:", e);
      }

      // Fetch local Markdown report
      const mdResponse = await fetch(item.reportFile);
      if (!mdResponse.ok)
        throw new Error(`Failed to load report: ${item.reportFile}`);
      const mdText = await mdResponse.text();

      // Parse and sanitize Markdown
      const rawHtml = marked.parse(mdText);
      const cleanHtml = DOMPurify.sanitize(rawHtml);

      // Format dates
      const updatedDate = new Date(ghData.updated_at).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      );

      const joinedDate = new Date(userData.created_at).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "short",
        },
      );

      // Build npm packages HTML
      const npmHtml =
        npmPackages.length > 0
          ? `
            <div class="contact-section">
                <h4>📦 npm Packages</h4>
                <ul class="npm-list">
                    ${npmPackages
                      .map(
                        (pkg) => `
                        <li>
                            <a href="${pkg.url}" target="_blank">${pkg.name}</a>
                            <span class="version">v${pkg.version}</span>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>
        `
          : "";

      // Build contact links HTML
      const contactLinks = [];
      if (userData.blog) {
        contactLinks.push(
          `<a href="${userData.blog.startsWith("http") ? userData.blog : "https://" + userData.blog}" target="_blank">🌐 Website</a>`,
        );
      }
      if (userData.twitter_username) {
        contactLinks.push(
          `<a href="https://twitter.com/${userData.twitter_username}" target="_blank">🐦 Twitter</a>`,
        );
      }
      if (userData.email) {
        contactLinks.push(`<a href="mailto:${userData.email}">📧 Email</a>`);
      }
      if (userData.company) {
        contactLinks.push(`<span>🏢 ${userData.company}</span>`);
      }
      if (userData.location) {
        contactLinks.push(`<span>📍 ${userData.location}</span>`);
      }

      // Build the card HTML
      card.innerHTML = `
            <div class="github-stats">
                <div class="stat-item">
                    <span>⭐</span> <strong>${ghData.stargazers_count}</strong> Stars
                </div>
                <div class="stat-item">
                    <span>🍴</span> <strong>${ghData.forks_count}</strong> Forks
                </div>
                <div class="stat-item">
                    <span>📌</span> <strong>${ghData.language || "N/A"}</strong>
                </div>
                <div class="stat-item">
                    <span>⚖️</span> <strong>${ghData.license ? ghData.license.spdx_id : "No License"}</strong>
                </div>
                <div class="stat-item">
                    <span>🕒</span> Updated: ${updatedDate}
                </div>
                <div class="stat-item" style="margin-left: auto;">
                    <span class="stat-badge">AI Score: 95/100</span>
                </div>
            </div>

            <div class="markdown-content">
                ${cleanHtml}
            </div>

            <div class="links">
                <a href="${ghData.html_url}" target="_blank">View on GitHub</a>
                ${ghData.homepage ? `<a href="${ghData.homepage}" target="_blank">Live Website</a>` : ""}
            </div>

            <div class="owner-section">
                <div class="owner-header">
                    <img src="${userData.avatar_url}" alt="${userData.login}" class="owner-avatar">
                    <div class="owner-info">
                        <h3>${userData.name || userData.login}</h3>
                        <p class="owner-username">@${userData.login} • Joined ${joinedDate}</p>
                        ${userData.bio ? `<p class="owner-bio">${userData.bio}</p>` : ""}
                    </div>
                </div>
                
                ${
                  contactLinks.length > 0
                    ? `
                    <div class="contact-links">
                        ${contactLinks.join(" • ")}
                    </div>
                `
                    : ""
                }
                
                ${npmHtml}
                
                <div class="owner-stats">
                    <div class="stat-item">
                        <span>📚</span> <strong>${userData.public_repos}</strong> Public Repos
                    </div>
                    <div class="stat-item">
                        <span>👥</span> <strong>${userData.followers}</strong> Followers
                    </div>
                </div>
                
                <div class="owner-links">
                    <a href="${userData.html_url}" target="_blank">View GitHub Profile</a>
                </div>
            </div>
        `;

      container.appendChild(card);
    }
  } catch (error) {
    console.error("Error loading projects:", error);
    container.innerHTML = `
        <p style="color: #d33; padding: 20px; background: #fee; border: 1px solid #d33; border-radius: 4px;">
            <strong>Error:</strong> Failed to load project data. <br>
            <small>${error.message}</small><br>
            <em>Note: GitHub API has a rate limit of 60 requests/hour for unauthenticated requests.</em>
        </p>
    `;
  }
}

loadProjects();
