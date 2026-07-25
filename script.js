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

      // Fetch live GitHub data
      const ghResponse = await fetch(
        `https://api.github.com/repos/${item.owner}/${item.repo}`,
      );
      if (!ghResponse.ok) throw new Error(`GitHub API failed for ${item.repo}`);
      const ghData = await ghResponse.json();
      console.log(ghData)

      // Fetch local Markdown report
      const mdResponse = await fetch(item.reportFile);
      if (!mdResponse.ok)
        throw new Error(`Failed to load report: ${item.reportFile}`);
      const mdText = await mdResponse.text();

      // Parse and sanitize Markdown
      const rawHtml = marked.parse(mdText);
      const cleanHtml = DOMPurify.sanitize(rawHtml);

      // Format date
      const updatedDate = new Date(ghData.updated_at).toLocaleDateString(
        "en-US",
        {
          year: "numeric",
          month: "short",
          day: "numeric",
        },
      );

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
