const projects = [
  {
    name: "AfghanLMS",
    description:
      "A learning management system designed for Afghan educational institutions. Supports multiple languages including Dari and Pashto.",
    category: "Education",
    language: "JavaScript",
    license: "MIT",
    score: 85,
    tags: ["education", "lms", "multilingual"],
    github: "https://github.com/example/afghanlms",
    website: "https://afghanlms.example.com",
  },
  {
    name: "Kabul Maps",
    description:
      "Open source mapping solution for Kabul with detailed local data and points of interest.",
    category: "Geography",
    language: "Python",
    license: "GPL-3.0",
    score: 72,
    tags: ["maps", "gis", "kabul"],
    github: "https://github.com/example/kabul-maps",
    website: null,
  },
  {
    name: "Dari NLP Toolkit",
    description:
      "Natural language processing tools for Dari language including tokenization, stemming, and sentiment analysis.",
    category: "AI/ML",
    language: "Python",
    license: "Apache-2.0",
    score: 91,
    tags: ["nlp", "dari", "ai", "language-processing"],
    github: "https://github.com/example/dari-nlp",
    website: "https://dari-nlp.example.com",
  },
];
function getScoreClass(score) {
  if (score >= 80) return "score-high";
  if (score >= 60) return "score-medium";
  return "score-low";
}
function renderProjects() {
  const container = document.getElementById("projects-list");
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'project-card';
    
    card.innerHTML = `
        <h2>${project.name}</h2>
        <div class="project-meta">
            <div class="meta-item">
                <span class="label">Category:</span>
                <span>${project.category}</span>
            </div>
            <div class="meta-item">
                <span class="label">Language:</span>
                <span>${project.language}</span>
            </div>
            <div class="meta-item">
                <span class="label">License:</span>
                <span>${project.license}</span>
            </div>
            <div class="meta-item">
                <span class="label">Score:</span>
                <span class="score ${getScoreClass(project.score)}">${project.score}/100</span>
            </div>
        </div>
        <div class="description">
            ${project.description}
        </div>
        <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <div class="links">
            <a href="${project.github}" target="_blank">GitHub Repository</a>
            ${project.website ? `<a href="${project.website}" target="_blank">Website</a>` : ''}
        </div>
    `;
    
    container.appendChild(card);
});
}
// Initialize
renderProjects();
