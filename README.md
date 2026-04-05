# Mohammad Radwan – Portfolio-MR

---

## 🚩 Table of Contents | Table des matières

- [Project Overview | Vue d’ensemble](#project-overview--vue-densemble)
- [Badges & Status](#badges--status)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Setup & Usage](#setup--usage)
- [API & Integrations](#api--integrations)
- [DevOps & CI/CD](#devops--cicd)
- [Testing & Quality](#testing--quality)
- [Security & Compliance](#security--compliance)
- [Accessibility](#accessibility)
- [Performance & Analytics](#performance--analytics)
- [Advanced Customization](#advanced-customization)
- [Tech Radar](#tech-radar)
- [Project Roadmap](#project-roadmap)
- [Contributing Like a Pro](#contributing-like-a-pro)
- [FAQ](#faq)
- [Troubleshooting](#troubleshooting)
- [License](#license)
- [Contact](#contact)

---

[![Build](https://img.shields.io/github/actions/workflow/status/Mohammad77Radwan/Portfolio-MR/ci.yml?branch=main)](https://github.com/Mohammad77Radwan/Portfolio-MR/actions)
[![License](https://img.shields.io/github/license/Mohammad77Radwan/Portfolio-MR)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.2-blue)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.2-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🇫🇷 Français | 🇬🇧 English

Ce README est bilingue. Faites défiler pour la version française ou anglaise.

This README is bilingual. Scroll for the French or English version.

---

# 🇬🇧 English

## 🚀 Advanced Developer Portfolio
A modern, production-grade portfolio for full-stack and AI projects. Built with Next.js 16, React 19, Tailwind CSS, and a real-time blog integration. Designed for performance, accessibility, and developer experience.

## 🏗️ Tech Stack
| Layer         | Technology                | Version   |
|--------------|---------------------------|-----------|
| Frontend     | Next.js                   | 16.2.2    |
| UI           | React                     | 19.2.4    |
| Styling      | Tailwind CSS              | 4.2.2     |
| Animations   | Framer Motion, Lucide     | 11.14.0, 1.7.0 |
| Markdown     | gray-matter               | 4.0.3     |
| API          | Next.js API Routes        |           |
| Data Fetch   | Axios, Fetch API          | 1.7.7     |
| State        | React, Zustand            | 4.5.5     |
| Forms        | React Hook Form           | 7.52.2    |
| Lint/Format  | ESLint, Prettier          | 9.x       |
| CI/CD        | GitHub Actions            |           |

## 📦 Folder Structure
```
Portfolio-MR/
├── portfolio-next/
│   ├── app/
│   │   ├── api/
│   │   │   └── blog-articles/route.ts   # Real-time blog API
│   │   ├── layout.tsx                   # Root layout
│   │   └── page.tsx                     # Main page
│   ├── components/                      # UI components
│   ├── lib/                             # Data & utils
│   ├── public/                          # Static assets
│   ├── styles/                          # Global styles
│   ├── types/                           # TypeScript types
│   ├── tailwind.config.js               # Tailwind config
│   └── ...
├── certifications/                      # Certifications & docs
├── cv/                                  # CV & resume
├── documentation/                       # E5/E4 docs, checklists
├── projets/                             # Project templates
├── stages/                              # Internships
└── ...
```

## 🖼️ Architecture Diagram
<p align="center">
  <img src="assets/architecture-diagram.svg" alt="Architecture Diagram" width="600"/>
</p>

### CI/CD Pipeline
<p align="center">
  <img src="assets/cicd-pipeline.svg" alt="CI/CD Pipeline Diagram" width="600"/>
</p>

### Data Flow
<p align="center">
  <img src="assets/data-flow.svg" alt="Data Flow Diagram" width="600"/>
</p>

## ✨ Features
- ⚡ **Lightning-fast**: Next.js 16 + Turbopack
- 🎨 **Modern UI**: Tailwind, Framer Motion, Lucide
- 📝 **Live Blog Sync**: Fetches MDX articles from GitHub in real time
- 🧑‍💻 **Developer Experience**: TypeScript, ESLint, Prettier, VS Code ready
- 🛡️ **Accessibility**: Keyboard nav, color contrast, semantic HTML
- 📱 **Responsive**: Mobile-first, adaptive layouts
- 🧩 **Component-driven**: Reusable, composable UI
- 🌐 **Multi-language**: French-first, easy to localize
- 🏆 **Showcases Skills**: Real projects, tech radar, certifications

## ⚙️ Setup & Usage
```bash
# 1. Clone the repo
$ git clone https://github.com/Mohammad77Radwan/Portfolio-MR.git
$ cd Portfolio-MR/portfolio-next
# 2. Install dependencies
$ npm install
# 3. (Optional) Add a GitHub token for higher API rate limits
$ echo "GITHUB_TOKEN=ghp_xxx..." >> .env.local
# 4. Start the dev server
$ npm run dev
# 5. Open http://localhost:3000
```

## 🔌 API & Integrations
- **/api/blog-articles**: Serverless API route fetches MDX articles from the Blog-Veille-Tech repo using the GitHub API.
- **Contact Form**: Integrated with Formspree (see `.env.local`).
- **Live GitHub Stats**: Pulls real commit/project data for credibility.

## 🧑‍💻 Advanced Developer Notes
- **Performance**: Turbopack, code splitting, image optimization, minimal bundle size.
- **Accessibility**: Focus rings, ARIA labels, color contrast, keyboard nav.
- **Testing**: Ready for Jest/React Testing Library (add your tests in `/__tests__/`).
- **CI/CD**: GitHub Actions for lint/build/test (add your workflow in `.github/workflows/`).
- **Security**: No secrets in repo, uses environment variables, rate-limited API.
- **Customization**: Easily add new sections, projects, or integrations.
- **Deployment**: Vercel-ready, works on Netlify/Render/Heroku.

## 🏅 Why This Portfolio Stands Out
- **Real-time blog integration** (not static): Showcases live writing and technical depth.
- **Professional structure**: Mirrors enterprise-grade monorepo setups.
- **Modern stack**: Next.js 16, React 19, Tailwind 4, Framer Motion, Lucide.
- **Impressive UI/UX**: Animations, gradients, accessibility, and mobile-first.
- **Comprehensive documentation**: For recruiters, collaborators, and future you.
- **Ready for scale**: Add more projects, sections, or even a CMS.

## 🤝 Contributing
Pull requests are welcome! For major changes, open an issue first to discuss what you’d like to change.

## 📄 License
This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## 📬 Contact
- **Email**: mohammadradwn804@gmail.com
- **GitHub**: [@Mohammad77Radwan](https://github.com/Mohammad77Radwan)
- **Location**: Saint-Étienne, France

> _“Built with passion for modern web, developer experience, and technical excellence.”_

---

# 🇫🇷 Français

## 🚀 Portfolio Développeur Avancé
Un portfolio moderne et professionnel pour projets full-stack et IA. Construit avec Next.js 16, React 19, Tailwind CSS, et une intégration blog en temps réel. Pensé pour la performance, l’accessibilité et l’expérience développeur.

## 🏗️ Stack Technique
| Couche        | Technologie               | Version   |
|--------------|--------------------------|-----------|
| Frontend     | Next.js                  | 16.2.2    |
| UI           | React                    | 19.2.4    |
| Style        | Tailwind CSS             | 4.2.2     |
| Animations   | Framer Motion, Lucide    | 11.14.0, 1.7.0 |
| Markdown     | gray-matter              | 4.0.3     |
| API          | Next.js API Routes       |           |
| Data Fetch   | Axios, Fetch API         | 1.7.7     |
| State        | React, Zustand           | 4.5.5     |
| Forms        | React Hook Form          | 7.52.2    |
| Lint/Format  | ESLint, Prettier         | 9.x       |
| CI/CD        | GitHub Actions           |           |

## 📦 Structure des Dossiers
```
Portfolio-MR/
├── portfolio-next/
│   ├── app/
│   │   ├── api/
│   │   │   └── blog-articles/route.ts   # API blog temps réel
│   │   ├── layout.tsx                   # Layout racine
│   │   └── page.tsx                     # Page principale
│   ├── components/                      # Composants UI
│   ├── lib/                             # Données & utilitaires
│   ├── public/                          # Assets statiques
│   ├── styles/                          # Styles globaux
│   ├── types/                           # Types TypeScript
│   ├── tailwind.config.js               # Config Tailwind
│   └── ...
├── certifications/                      # Certificats & docs
├── cv/                                  # CV & résumé
├── documentation/                       # Docs E5/E4, checklists
├── projets/                             # Templates projets
├── stages/                              # Stages
└── ...
```

## 🖼️ Schéma d’Architecture
<p align="center">
  <img src="assets/architecture-diagram.svg" alt="Schéma d’Architecture" width="600"/>
</p>

### Pipeline CI/CD
<p align="center">
  <img src="assets/cicd-pipeline.svg" alt="Schéma CI/CD" width="600"/>
</p>

### Flux de Données
<p align="center">
  <img src="assets/data-flow.svg" alt="Schéma Flux de Données" width="600"/>
</p>

## ✨ Fonctionnalités
- ⚡ **Ultra-rapide** : Next.js 16 + Turbopack
- 🎨 **UI Moderne** : Tailwind, Framer Motion, Lucide
- 📝 **Blog en temps réel** : Récupère les articles MDX depuis GitHub
- 🧑‍💻 **Expérience Dev** : TypeScript, ESLint, Prettier, prêt pour VS Code
- 🛡️ **Accessibilité** : Navigation clavier, contraste, HTML sémantique
- 📱 **Responsive** : Mobile-first, adaptatif
- 🧩 **Composants** : UI réutilisables, composables
- 🌐 **Multi-langue** : Français par défaut, facile à localiser
- 🏆 **Valorise les compétences** : Projets réels, radar tech, certifications

## ⚙️ Installation & Utilisation
```bash
# 1. Cloner le repo
$ git clone https://github.com/Mohammad77Radwan/Portfolio-MR.git
$ cd Portfolio-MR/portfolio-next
# 2. Installer les dépendances
$ npm install
# 3. (Optionnel) Ajouter un token GitHub pour lever les limites API
$ echo "GITHUB_TOKEN=ghp_xxx..." >> .env.local
# 4. Lancer le serveur dev
$ npm run dev
# 5. Ouvrir http://localhost:3000
```

## 🔌 API & Intégrations
- **/api/blog-articles** : API serverless qui récupère les articles MDX du repo Blog-Veille-Tech via GitHub API.
- **Formulaire de contact** : Intégré à Formspree (voir `.env.local`).
- **Stats GitHub live** : Données réelles de commits/projets.

## 🧑‍💻 Notes Avancées
- **Performance** : Turbopack, code splitting, optimisation images, bundle minimal.
- **Accessibilité** : Focus, ARIA, contraste, navigation clavier.
- **Tests** : Prêt pour Jest/React Testing Library (ajoutez vos tests dans `/__tests__/`).
- **CI/CD** : GitHub Actions pour lint/build/test (workflow dans `.github/workflows/`).
- **Sécurité** : Pas de secrets dans le repo, variables d’env, API limitée.
- **Customisation** : Ajoutez facilement sections, projets, intégrations.
- **Déploiement** : Prêt Vercel, fonctionne sur Netlify/Render/Heroku.

## 🏅 Pourquoi ce Portfolio est Unique
- **Blog temps réel** (pas statique) : Montre la veille et la profondeur technique.
- **Structure pro** : Inspirée des monorepos d’entreprise.
- **Stack moderne** : Next.js 16, React 19, Tailwind 4, Framer Motion, Lucide.
- **UI/UX remarquable** : Animations, gradients, accessibilité, mobile-first.
- **Doc complète** : Pour recruteurs, collaborateurs, et vous-même.
- **Prêt à scaler** : Ajoutez projets, sections, ou un CMS.

## 🤝 Contribution
Les PR sont bienvenues ! Pour les changements majeurs, ouvrez une issue pour discuter.

## 📄 Licence
Projet sous licence MIT. Voir [LICENSE](LICENSE).

## 📬 Contact
- **Email** : mohammadradwn804@gmail.com
- **GitHub** : [@Mohammad77Radwan](https://github.com/Mohammad77Radwan)
- **Localisation** : Saint-Étienne, France

> _“Conçu avec passion pour le web moderne, l’expérience dev et l’excellence technique.”_