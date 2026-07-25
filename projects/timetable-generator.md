# Timetable Generator

> 📅 An automated school scheduling engine that eliminates the manual headache of timetable planning — generating conflict-free schedules across all classes, teachers, and rooms in seconds.

## 🚀 Why this project matters
Creating school timetables manually is a time-consuming, error-prone process. Teachers get double-booked, rooms get double-assigned, and the whole schedule has to be redone whenever anything changes. This system automates the entire scheduling process, providing a massive quality-of-life improvement for school administrators and educational institutions in Afghanistan and beyond.

## ✨ Key Features
- **Teacher Availability Management**: Define when each teacher is available and let the system respect those constraints automatically.
- **Conflict Detection**: Prevents double-booking of teachers, rooms, and classes at the same time slot.
- **Multi-Room Support**: Schedule across multiple classrooms simultaneously.
- **PDF Export**: Export any generated timetable as a print-ready PDF for instant distribution.
- **Class & Subject Management**: Manage all classes, subjects, and their relationships from one place.
- **Admin Dashboard**: Full visibility over the schedule with the ability to make manual adjustments.

## 🏗️ Architecture
Built as a modern, robust full-stack application:
- **Backend**: Node.js + Express REST API with Prisma ORM and PostgreSQL.
- **Frontend**: Next.js + Tailwind CSS for a responsive, modern UI.
- **Testing**: Comprehensive unit and end-to-end (e2e) test coverage.

## 💡 Usage for Developers & Schools
Schools can deploy this to instantly generate semester schedules. Developers can use this repository as a high-quality reference for:
1. Building constraint-satisfaction/scheduling algorithms in Node.js.
2. Structuring a full-stack TypeScript monorepo with Prisma and Next.js.
3. Implementing PDF generation and complex state management in web apps.

---

## 🤖 AI Analysis & Scoring Report

**Model:** Qwen (Qwen3.7)  
**Analysis Date:** Sunday, July 26, 2026  

### Scoring Breakdown
| Criteria | Score | Max | Notes |
|----------|-------|-----|-------|
| 📚 Documentation | 20 | 20 | Exceptional README. Includes tech badges, clear problem statement, architecture overview, API table, setup instructions, and a roadmap. |
| 💻 Code Quality | 18 | 20 | Modern, robust stack (Next.js, Prisma, TypeScript). Well-structured separation of concerns and includes both unit and e2e tests. |
| 🤝 Community & Maintenance | 15 | 20 | Strong maintenance signals (roadmap, tests). May have lower external contributor metrics as it appears to be a focused portfolio/production project. |
| 🌍 Impact & Local Relevance | 35 | 40 | Highly relevant. Solves a real, painful administrative problem for Afghan schools and educational institutions transitioning to digital management. |
| **Total Score** | **88** | **100** | 🟢 **Excellent** |

### Reasoning for Score
This project receives an **88/100** because it is a highly polished, production-ready application that solves a tangible, widespread problem in educational administration. The documentation is top-tier, making it easy for anyone to clone, set up, and understand. The use of a modern TypeScript stack with Prisma and comprehensive testing demonstrates strong software engineering practices. It loses minor points only because external community engagement (forks, external PRs) is typically lower for specialized, deployment-ready applications compared to open-source libraries, but its practical impact is undeniable.

---
*Report generated automatically based on repository analysis.*