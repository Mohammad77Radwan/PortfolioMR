# Portfolio MR - BTS SIO SLAM (Session 2026)

[Français](README.md) | [English](README.en.md)

Main repository for Mohammad Radwan's professional and academic portfolio.

This repository centralizes:
- the modern web portfolio (Next.js),
- E4/E5 compliance documentation,
- BTS SIO competency evidence,
- project, internship, certification, and CV resources.

## Repository goals

This repository has two primary goals:
1. Provide clear and auditable evidence for BTS SIO assessment (CCF E4/E5).
2. Present a strong technical profile for further studies and hiring.

## Quick contents

- [Overview](#overview)
- [Quick start](#quick-start)
- [Repository structure](#repository-structure)
- [Main web portfolio](#main-web-portfolio)
- [E4E5 documentation](#e4e5-documentation)
- [Projects and technical evidence](#projects-and-technical-evidence)
- [Compliance checklist](#compliance-checklist)
- [Recommended workflow](#recommended-workflow)
- [Roadmap](#roadmap)
- [Contact](#contact)

## Overview

Main entry points:
- [portfolio-next](portfolio-next/README.md): primary Next.js portfolio app
- [index.html](index.html): static portfolio version
- [documentation](documentation/README.md): E4/E5 documentation hub
- [projets](projets/README.md): project folders and templates
- [stages](stages/README.md): internship evidence
- [certifications](certifications/README.md): technical certifications
- [cv](cv/README.md): CV resources
- [medias](medias/README.md): visual assets

## Quick start

### Requirements
- Node.js 20+
- npm 10+
- Git

### Run the Next.js portfolio
```bash
cd /workspaces/Portfolio-MR/portfolio-next
npm install
npm run dev
```

Then open: [http://localhost:3000](http://localhost:3000)

### Build verification
```bash
cd /workspaces/Portfolio-MR/portfolio-next
npm run lint
npm run build
```

## Repository structure

```text
Portfolio-MR/
|-- README.md
|-- README.en.md
|-- index.html
|-- assets/
|-- portfolio-next/
|   |-- app/
|   |-- components/
|   |-- lib/
|   |-- public/
|   |-- types/
|   `-- README.md
|-- documentation/
|   |-- README.md
|   |-- CHECKLIST-CONFORMITE-E4-E5.md
|   |-- E5-EXIGENCES-OFFICIELLES.md
|   |-- competences/
|   |-- cybersecurite/
|   |-- diaporama/
|   |-- evaluation/
|   |-- oral/
|   |-- tableau-synthese/
|   `-- veille-technologique/
|-- projets/
|   |-- README.md
|   `-- _template/
|-- stages/
|-- certifications/
|-- cv/
`-- medias/
```

## Main web portfolio

The main app is [portfolio-next](portfolio-next/README.md).

Core stack:
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Zod

Main functional sections:
- Advanced hero
- Animated stats
- Bento projects with modal details
- Skills / Experience / Testimonials / Blog
- Live GitHub section
- Downloadable E5 documents
- Newsletter
- Contact form with server-side validation

Important public assets:
- Jury documents: [portfolio-next/public/documents](portfolio-next/public/documents)
- Project visuals: [portfolio-next/public/projects](portfolio-next/public/projects)
- Social preview: [portfolio-next/public/og-cover.svg](portfolio-next/public/og-cover.svg)

## E4E5 documentation

Entry point: [documentation/README.md](documentation/README.md)

Critical documents:
- Official requirements: [documentation/E5-EXIGENCES-OFFICIELLES.md](documentation/E5-EXIGENCES-OFFICIELLES.md)
- Compliance checklist: [documentation/CHECKLIST-CONFORMITE-E4-E5.md](documentation/CHECKLIST-CONFORMITE-E4-E5.md)
- BTS competencies: [documentation/competences/BLOCS-BTS-SIO-COMPETENCES-SAVOIRS.md](documentation/competences/BLOCS-BTS-SIO-COMPETENCES-SAVOIRS.md)
- Summary table: [documentation/tableau-synthese/README.md](documentation/tableau-synthese/README.md)
- Oral script: [documentation/oral/SCRIPT-ORAL-10-MIN.md](documentation/oral/SCRIPT-ORAL-10-MIN.md)
- Jury questions: [documentation/oral/QUESTIONS-JURY-30-QA.md](documentation/oral/QUESTIONS-JURY-30-QA.md)
- Evaluation annexes: [documentation/evaluation/README.md](documentation/evaluation/README.md)

## Projects and technical evidence

Entry point: [projets/README.md](projets/README.md)

Standard template:
- [projets/_template/README-projet-template.md](projets/_template/README-projet-template.md)

The template includes:
- context and objectives,
- architecture and technical choices,
- BTS competency mapping,
- security,
- testing,
- challenges and lessons learned.

## Compliance checklist

Before jury submission, verify at least:
1. E5 document links are working.
2. Internship documents are present and final.
3. The competency summary table is complete and consistent.
4. The portfolio runs locally with no errors.
5. Production build succeeds (`npm run build`).
6. Mobile navigation is usable.
7. BTS evidence is explicit in each project.

## Recommended workflow

1. Update content in [portfolio-next/lib/data.ts](portfolio-next/lib/data.ts).
2. Add or replace visuals in [portfolio-next/public/projects](portfolio-next/public/projects).
3. Add final official documents to [portfolio-next/public/documents](portfolio-next/public/documents).
4. Run lint/build checks.
5. Update E4/E5 documentation when evidence changes.
6. Commit with clear messages.

## Roadmap

- Replace PDF placeholders with final signed files.
- Replace placeholder project visuals with final screenshots.
- Add a full English app version (optional).
- Add lightweight analytics/observability (optional).

## Contact

- GitHub: [Mohammad77Radwan](https://github.com/Mohammad77Radwan)
- Email: mohammadradwn804@gmail.com
- LinkedIn: Mohammad Radwan

---

If this is your first time in this repository, start with [portfolio-next/README.md](portfolio-next/README.md) for technical run instructions, then [documentation/README.md](documentation/README.md) for E4/E5 scope.
