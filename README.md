# 🇦🇫 Afghan Open Source Projects

A curated directory of open source projects from Afghanistan, featuring detailed analysis and scoring for each project.

> *"Preserving and showcasing the contributions of Afghan developers to the global open source community."*


## 📖 About

This repository hosts a simple, static website that lists and showcases open source projects created by Afghan developers or focused on Afghanistan. Each project is documented in its own MDX file with detailed information and receives a score based on various quality criteria.

The design is inspired by **Wikipedia** — clean, readable, and focused on content over flashy visuals.


## ✨ Features

- 🎨 **Wikipedia-inspired design** — clean, classic, and readable
- 📊 **Scoring system** — each project rated from 0 to 100
- 🏷️ **Categorization** — projects organized by category and tags
- 📝 **MDX documentation** — detailed info for each project
- 🌐 **Static hosting** — works perfectly with GitHub Pages
- 📱 **Responsive layout** — readable on any device


## 🚀 Getting Started

### Prerequisites

- A modern web browser
- (Optional) A local HTTP server for development

### Running Locally

Since this is a pure HTML/CSS/JS project, you can simply open `index.html` in your browser.

For a better development experience, use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
.
├── index.html          # Main page
├── style.css           # Wikipedia-inspired styling
├── script.js           # Project rendering logic
├── projects/           # MDX files for each project
│   ├── project-one.mdx
│   ├── project-two.mdx
│   └── ...
└── README.md           # You are here
```

## 📝 Adding a New Project

Each project has its own MDX file in the `projects/` directory. Use the following template:

```mdx
---
name: "Project Name"
description: "Brief one-line description"
category: "Education | AI/ML | Web | Tools | Geography | ..."
language: "JavaScript | Python | Rust | ..."
license: "MIT | GPL-3.0 | Apache-2.0 | ..."
tags: ["tag1", "tag2", "tag3"]
github: "https://github.com/username/repo"
website: "https://example.com"
maintainers:
  - name: "Maintainer Name"
    github: "username"
created: "2024-01-15"
updated: "2026-07-20"
---

# Project Name

## Overview

A detailed description of the project, its goals, and its impact.

## Key Features

- Feature 1
- Feature 2
- Feature 3

## Technical Details

Architecture, stack, and implementation notes.

## How to Contribute

Guidelines for contributors.

## Analysis Notes

Why this project matters to the Afghan open source ecosystem.
```

---

## 📊 Scoring Criteria

Each project is scored from **0 to 100** based on the following criteria:

| Criteria | Weight | Description |
|----------|--------|-------------|
| 📚 Documentation | 20% | Quality of README, comments, and guides |
| 💻 Code Quality | 20% | Clean code, structure, and best practices |
| 🤝 Community | 15% | Issues, PRs, and contributor engagement |
| 🔧 Maintenance | 15% | Recent activity and update frequency |
| 🌍 Impact | 15% | Usefulness and real-world adoption |
| 🇦🇫 Local Relevance | 15% | Connection to Afghanistan or Afghan community |

### Score Ranges

- 🟢 **80–100** — Excellent project, highly recommended
- 🟡 **60–79** — Good project with room for improvement
- 🔴 **0–59** — Needs attention or is inactive


## 🤝 Contributing

Contributions are welcome! You can help by:

- 📋 Suggesting new Afghan open source projects to list
- ✍️ Writing MDX files for existing projects
- 🎨 Improving the design or styling
- 🐛 Reporting bugs or issues
- 💡 Suggesting new features

Please open an issue or submit a pull request.


## 🛠️ Tech Stack

- **HTML5** — Semantic structure
- **CSS3** — Wikipedia-inspired styling
- **Vanilla JavaScript** — No frameworks, no build tools
- **MDX** — Project documentation format
- **GitHub Pages** — Free static hosting


## 📜 License

This directory is open source and available under the [MIT License](LICENSE).


## 🙏 Acknowledgments

- Inspired by [Wikipedia](https://wikipedia.org)'s timeless design
- Built for the Afghan developer community
- Thanks to all Afghan open source contributors


<p align="center">
  <em>Made with ❤️ for the Afghan open source community</em>
</p>
