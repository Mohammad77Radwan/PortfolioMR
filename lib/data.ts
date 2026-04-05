import { Project, Skill, Experience, BlogPost, Testimonial } from "@/types";

export const projects: Project[] = [
  {
    id: "morefix-webstore",
    title: "MoreFix WebStore",
    description: "E-commerce - Boutique dynamique de produits reconditionnés",
    context:
      "Projet développé pour une boutique de produits reconditionnés avec une attente forte sur la clarté du catalogue, la confiance et le passage à l'achat.",
    problem:
      "Concevoir une expérience e-commerce crédible, rapide et sécurisée qui mette en valeur les produits tout en simplifiant la navigation et l'authentification.",
    longDescription:
      "WebStore e-commerce dynamique construite avec Next.js, React, Firebase Auth et Tailwind CSS. Plateforme complète de vente en ligne pour MoreFix avec authentification sécurisée et interface utilisateur moderne et réactive.",
    image: "/projects/screenshots/morefix-webstore-shot-4.png",
    tags: ["E-commerce", "Next.js", "Firebase"],
    category: "fullstack",
    categories: ["ecommerce"],
    screenshots: [
      "/projects/screenshots/morefix-webstore-shot-4.png",
      "/projects/screenshots/morefix-webstore-shot-2.png",
      "/projects/screenshots/morefix-webstore-shot-3.png",
    ],
    btsBlocks: ["Bloc 1", "Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    link: "https://morefix.netlify.app/",
    github: "https://github.com/Mohammad77Radwan/Morefix_WebStore",
    date: "2026",
    featured: true,
    stats: [
      { label: "Score Lighthouse", value: "96" },
      { label: "Produits", value: "500+" },
      { label: "Conversion", value: "+45%" },
    ],
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "TypeScript" },
      { name: "Firebase Auth" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "enterprise-rag-pipeline",
    title: "Enterprise RAG Pipeline",
    description: "IA - Pipeline Retrieval-Augmented Generation asynchrone et distribuée",
    context:
      "Prototype orienté usage entreprise pour retrouver rapidement de l'information dispersée dans plusieurs sources documentaires.",
    problem:
      "Réduire la latence d'interrogation tout en gardant des réponses pertinentes, traçables et exploitables à grande échelle.",
    longDescription:
      "Pipeline RAG (Retrieval-Augmented Generation) de qualité entreprise avec recherche par vecteurs et traitement de tâches en arrière-plan. Architecture asynchrone conçue pour traiter des volumes de données importants avec latence minimale et scalabilité maximale.",
    image: "/projects/enterprise-rag-pipeline.svg",
    tags: ["RAG", "LLM", "Architecture"],
    category: "ia",
    categories: ["systems"],
    screenshots: [
      "/projects/screenshots/enterprise-rag-pipeline-shot-2.png",
      "/projects/screenshots/enterprise-rag-pipeline-shot.svg",
    ],
    btsBlocks: ["Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    github: "https://github.com/Mohammad77Radwan/enterprise-rag-pipeline",
    date: "2026",
    featured: true,
    stats: [
      { label: "Latence requête", value: "<500ms" },
      { label: "Scalabilité", value: "Distribuée" },
      { label: "Modèles LLM", value: "Multi" },
    ],
    technologies: [
      { name: "TypeScript" },
      { name: "Vector DB" },
      { name: "LLM APIs" },
      { name: "Async/Await" },
      { name: "Background Tasks" },
    ],
  },
  {
    id: "mindful-journal",
    title: "Mindful Journal",
    description: "PWA + IA - Application de journaling privacy-first alimentée par l'IA",
    context:
      "Application pensée pour un usage quotidien, avec une contrainte centrale de confidentialité et de stockage local des données.",
    problem:
      "Offrir une aide à l'écriture et au suivi émotionnel sans dépendre d'un stockage cloud ni compromettre la vie privée.",
    longDescription:
      "Application de journaling privacy-first alimentée par l'IA intégrée de Chrome. Vous aide à rédiger, réfléchir et suivre votre humeur en toute sécurité avec stockage 100% local, assistance IA, suivi de l'humeur et contrôle total des données sans stockage cloud.",
    image: "/projects/screenshots/mindful-journal-shot-1.png",
    tags: ["PWA", "IA", "AI", "Privacy"],
    category: "ia",
    categories: ["pwa"],
    screenshots: [
      "/projects/screenshots/mindful-journal-shot-1.png",
      "/projects/screenshots/mindful-journal-shot-2.png",
      "/projects/screenshots/mindful-journal-shot-3.png",
      "/projects/screenshots/mindful-journal-shot-4.png",
      "/projects/screenshots/mindful-journal-shot-5.png",
      "/projects/screenshots/mindful-journal-shot-6.png",
      "/projects/screenshots/mindful-journal-shot-7.png",
      "/projects/screenshots/mindful-journal-shot-8.png",
      "/projects/screenshots/mindful-journal-shot-9.png",
    ],
    btsBlocks: ["Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    github: "https://github.com/Mohammad77Radwan/MINDFUL-JOURNAL",
    demoVideo: "/projects/demos/mindful-journal-demo.mp4",
    date: "2025",
    featured: true,
    stats: [
      { label: "Storage local", value: "100%" },
      { label: "IA embarquée", value: "Chrome API" },
      { label: "Privacy", value: "100%" },
    ],
    technologies: [
      { name: "TypeScript" },
      { name: "Chrome AI APIs" },
      { name: "PWA" },
      { name: "Local Storage" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "go-distributed-orderbook",
    title: "Go Distributed Orderbook",
    description: "Système - Moteur de matching financier haute performance et concurrent",
    context:
      "Projet technique centré sur la simulation d'un carnet d'ordres pour des échanges rapides et concurrents.",
    problem:
      "Traiter des ordres en temps réel avec une latence minimale, une cohérence stricte et une bonne résistance à la charge.",
    longDescription:
      "Moteur de matching financier concurrent haute performance et simulateur de carnet d'ordres en temps réel construit en Go. Architecture distribuée pour traiter des transactions à haut débit avec une latence minimale et une fiabilité maximale.",
    image: "/projects/go-distributed-orderbook.svg",
    tags: ["GO", "Distributed Systems", "Real-time", "Finance"],
    category: "fullstack",
    categories: ["systems"],
    screenshots: [
      "/projects/screenshots/go-distributed-orderbook-shot-2.png",
      "/projects/screenshots/go-distributed-orderbook-shot-3.png",
      "/projects/screenshots/go-distributed-orderbook-shot-4.png",
    ],
    btsBlocks: ["Bloc 1", "Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Mettre à disposition un service informatique",
      "Concevoir et développer une solution applicative",
      "Assurer la cybersécurité d'une solution applicative",
    ],
    link: "https://go-distributed-orderbook.onrender.com",
    github: "https://github.com/Mohammad77Radwan/go-distributed-orderbook",
    date: "2026",
    featured: true,
    stats: [
      { label: "Throughput", value: "10K+ TPS" },
      { label: "Latence moyenne", value: "<1ms" },
      { label: "Uptime", value: "99.9%" },
    ],
    technologies: [
      { name: "Go" },
      { name: "Svelte" },
      { name: "WebSocket" },
      { name: "gRPC" },
      { name: "PostgreSQL" },
    ],
  },
  {
    id: "blog-veille-tech",
    title: "Blog Veille Tech",
    description: "Blog technique sur l'IA, la souveraineté numérique et les tendances tech.",
    context:
      "Blog personnel pour partager des analyses, articles et veille sur l'IA, le développement web, et l'impact des technologies.",
    problem:
      "Rendre accessible la veille technologique et les analyses stratégiques sur l'IA et le numérique.",
    longDescription:
      "Blog Next.js avec articles sur l'IA, la souveraineté numérique, et les tendances tech. Articles originaux, analyses de fond, et veille continue. Exemples : 'IA en 2026', 'Souveraineté numérique française', 'Nvidia, Amazon, OpenAI: la semaine IA'.",
    image: "/projects/screenshots/Screenshot 2026-04-05 071000.png", // First screenshot as main image
    tags: ["Blog", "Next.js", "IA", "Veille"],
    category: "fullstack",
    categories: ["blog", "veille"],
    screenshots: [
      "/projects/screenshots/Screenshot 2026-04-05 071000.png",
      "/projects/screenshots/Screenshot 2026-04-05 071112.png",
      "/projects/screenshots/Screenshot 2026-04-05 071157.png",
      "/projects/screenshots/Screenshot 2026-04-05 071216.png",
      "/projects/screenshots/Screenshot 2026-04-05 071340.png",
      "/projects/screenshots/Screenshot 2026-04-05 071526.png"
    ],
    btsBlocks: ["Bloc 2", "Bloc 3"],
    btsCompetences: [
      "Assurer la cybersécurité d'une solution applicative",
      "Concevoir et développer une solution applicative"
    ],
    link: "https://blogveilletech.netlify.app/",
    github: "https://github.com/Mohammad77Radwan/Blog-Veille-Tech",
    date: "2026",
    featured: false,
    stats: [
      { label: "Articles", value: "3+" },
      { label: "Catégories", value: "IA, Souveraineté, Tendances" }
    ],
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Prisma" },
      { name: "Supabase" }
    ],
  },
];

export const skills: Skill[] = [
  {
    category: "Langages",
    skills: [
      { name: "JavaScript", level: 95, icon: "js" },
      { name: "TypeScript", level: 90, icon: "ts" },
      { name: "Go", level: 80, icon: "go" },
      { name: "Rust", level: 72, icon: "rust" },
      { name: "PHP", level: 85, icon: "php" },
      { name: "SQL", level: 88, icon: "sql" },
      { name: "HTML5", level: 98, icon: "html" },
      { name: "CSS3", level: 96, icon: "css" },
      { name: "Python", level: 78, icon: "python" },
    ],
  },
  {
    category: "Frameworks & Librairies",
    skills: [
      { name: "Next.js", level: 94, icon: "nextjs" },
      { name: "React", level: 93, icon: "react" },
      { name: "Vue 3", level: 78, icon: "vue" },
      { name: "Svelte", level: 74, icon: "svelte" },
      { name: "Yjs (CRDT)", level: 76, icon: "yjs" },
      { name: "Laravel", level: 84, icon: "laravel" },
      { name: "Tailwind CSS", level: 97, icon: "tailwind" },
      { name: "Alpine.js", level: 80, icon: "alpine" },
      { name: "Firebase Auth", level: 86, icon: "firebase" },
      { name: "Framer Motion", level: 85, icon: "framer" },
      { name: "Prisma", level: 82, icon: "prisma" },
      { name: "Clerk", level: 80, icon: "clerk" },
      { name: "Radix UI", level: 80, icon: "radix" },
      { name: "Zod", level: 78, icon: "zod" },
      { name: "React Markdown", level: 80, icon: "markdown" },
      { name: "Recharts", level: 75, icon: "recharts" },
      { name: "Tailwind Typography", level: 77, icon: "tailwind" },
      { name: "Tailwind Merge", level: 77, icon: "tailwind" },
      { name: "Sonner", level: 75, icon: "sonner" },
      { name: "Gray-matter", level: 74, icon: "graymatter" },
    ],
  },
  {
    category: "Outils & Services",
    skills: [
      { name: "Git/GitHub", level: 92, icon: "github" },
      { name: "VS Code", level: 96, icon: "vscode" },
      { name: "Figma", level: 87, icon: "figma" },
      { name: "Docker", level: 76, icon: "docker" },
      { name: "WebSocket", level: 84, icon: "websocket" },
      { name: "gRPC", level: 75, icon: "grpc" },
      { name: "Vector DB", level: 79, icon: "vectordb" },
      { name: "LLM APIs", level: 82, icon: "llm" },
      { name: "PostgreSQL", level: 82, icon: "postgres" },
      { name: "Vercel", level: 91, icon: "vercel" },
      { name: "Supabase", level: 85, icon: "supabase" },
      { name: "@supabase/ssr", level: 75, icon: "supabase" },
    ],
  },
  {
    category: "Compétences Transversales",
    skills: [
      { name: "Architecture MVC", level: 88, icon: "arch" },
      { name: "REST API", level: 90, icon: "api" },
      { name: "Systèmes distribués", level: 82, icon: "distributed" },
      { name: "Architecture temps réel", level: 84, icon: "realtime" },
      { name: "RAG / IA appliquée", level: 81, icon: "rag" },
      { name: "UX/UI Design", level: 82, icon: "design" },
      { name: "SEO", level: 80, icon: "seo" },
      { name: "Agile/Scrum", level: 85, icon: "agile" },
      { name: "Veille Tech", level: 88 },
    ],
  },
];

export const formations = [
  {
    title: "GitHub Foundations",
    institution: "GitHub",
    period: "Certification GH-900 - Octobre 2025",
  },
  {
    title: "BTS SIO SLAM",
    institution: "Lycée Simone Weil, Saint-Priest-en-Jarez",
    period: "2024 - 2026",
  },
  {
    title: "Licence Informatique - Parcours MIPC",
    institution: "Université Jean Monnet, Saint-Étienne",
    period: "2023 - 2024",
  },
  {
    title: "Baccalauréat STI2D",
    institution: "Lycée Étienne Mimard, Saint-Étienne",
    period: "Obtenu en 2023",
  },
];

export const languages = [
  { name: "Français", level: 90, flag: "FR", proficiency: "C1" },
  { name: "Anglais", level: 95, flag: "EN", proficiency: "C2" },
  { name: "Arabe", level: 100, flag: "AR", proficiency: "Natif" },
];

export const experience: Experience[] = [
  {
    id: "morefix-stage-2",
    title: "Développeur Web Full-Stack",
    company: "MoreFix",
    location: "Saint-Étienne",
    startDate: "2026-01-05",
    endDate: "2026-02-06",
    description:
      "Invité à revenir chez MoreFix pour un second stage BTS, avec davantage d'autonomie sur des évolutions full-stack et un niveau d'exigence renforcé.",
    highlights: [
      "Conception et implémentation de fonctionnalités front-end et back-end en autonomie",
      "Méthodologie de développement saluée pour sa rigueur et sa qualité d'exécution",
      "Créativité technique confirmée sur des livrables React, TypeScript et Node.js",
      "Adaptation rapide aux priorités métier et aux contraintes de production",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Next.js", "Tailwind CSS"],
  },
  {
    id: "morefix-stage",
    title: "Développeur Web Full-Stack",
    company: "MoreFix",
    location: "Saint-Étienne",
    startDate: "2025-05",
    endDate: "2025-06",
    description:
      "Stage de développement web au sein de MoreFix, entreprise spécialisée dans la vente de produits high-tech reconditionnés. Conception et développement complet d'un site vitrine moderne.",
    highlights: [
      "Développement complet d'un site vitrine responsive avec Next.js 15 et React 19",
      "Création d'une galerie de produits interactive avec filtres et système de favoris",
      "Intégration de services tiers (Formspree, Google Maps, Analytics)",
      "Développement d'une interface d'administration pour la gestion du contenu",
      "Optimisation SEO et performances web (Core Web Vitals)",
      "Formation de l'équipe à l'utilisation et maintenance du site",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    id: "education",
    title: "Étudiant BTS SIO SLAM",
    company: "Lycée Simone Weil",
    location: "Saint-Priest-en-Jarez",
    startDate: "2024-09",
    endDate: "2026-07",
    description:
      "Formation en développement d'applications et services numériques. Apprentissage des meilleures pratiques en conception applicative, qualité logicielle et cybersécurité.",
    highlights: [
      "Développement d'applications web et mobile",
      "Gestion de bases de données relationnelles",
      "Méthodologies Agile et Scrum",
      "Veille technologique et innovation",
      "Travail en équipe et collaboration",
      "Certifications: GitHub Foundations (GH-900)",
    ],
    technologies: ["PHP", "Laravel", "JavaScript", "React", "SQL"],
  },
  {
    id: "license-mipc",
    title: "Licence Informatique - Parcours MIPC",
    company: "Université Jean Monnet",
    location: "Saint-Étienne",
    startDate: "2023-09",
    endDate: "2024-06",
    description:
      "Parcours universitaire en informatique orienté bases scientifiques et algorithmique, consolidant les fondamentaux nécessaires au développement logiciel moderne.",
    highlights: [
      "Renforcement des bases en algorithmique et logique de programmation",
      "Approfondissement des concepts mathématiques appliqués à l'informatique",
      "Méthodologie de travail académique et résolution de problèmes complexes",
    ],
    technologies: ["Algorithmique", "Mathématiques", "Programmation", "Méthodologie"],
  },
  {
    id: "bac-sti2d",
    title: "Baccalauréat STI2D",
    company: "Lycée Étienne Mimard",
    location: "Saint-Étienne",
    startDate: "2020-09",
    endDate: "2023-07",
    description:
      "Diplôme technologique obtenu en 2023, avec une approche orientée innovation, systèmes techniques et culture scientifique appliquée.",
    highlights: [
      "Validation du baccalauréat STI2D avec orientation technologique",
      "Développement de compétences en analyse de systèmes et travail de projet",
      "Premières bases structurées en démarche technique et scientifique",
    ],
    technologies: ["STI2D", "Systèmes techniques", "Gestion de projet"],
  },
];



export const testimonials: Testimonial[] = [
  {
    id: "testimonial-yasser-1",
    name: "Yasser Khamis",
    role: "Gérant",
    company: "MoreFix",
    content:
      "Stagiaire exceptionnel. A brillé sur sa méthodologie et sa créativité en utilisant les technologies React, TypeScript et Node.js. Avenir prometteur.",
    rating: 5,
  },
  {
    id: "testimonial-yasser-2",
    name: "Yasser Khamis",
    role: "Gérant",
    company: "MoreFix",
    content:
      "Le travail fourni est d'une qualité remarquable, souvent au-delà des attentes pour un niveau BTS. Grande autonomie, rigueur technique, et une excellente capacité d'adaptation. Il sera un atout précieux pour toute entreprise.",
    rating: 5,
  },
];
