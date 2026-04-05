import { Star, GitFork, ExternalLink } from "lucide-react";

type GithubRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  description: string | null;
  language: string | null;
  fork?: boolean;
};

const FALLBACK_REPOS: GithubRepo[] = [
  {
    id: 9001,
    name: "go-distributed-orderbook",
    html_url: "https://github.com/Mohammad77Radwan/go-distributed-orderbook",
    stargazers_count: 0,
    forks_count: 0,
    description: "Moteur de matching financier concurrent haute performance en Go.",
    language: "Go",
  },
  {
    id: 9002,
    name: "enterprise-rag-pipeline",
    html_url: "https://github.com/Mohammad77Radwan/enterprise-rag-pipeline",
    stargazers_count: 0,
    forks_count: 0,
    description: "Pipeline RAG asynchrone et distribuée pour charges enterprise.",
    language: "TypeScript",
  },
  {
    id: 9003,
    name: "MINDFUL-JOURNAL",
    html_url: "https://github.com/Mohammad77Radwan/MINDFUL-JOURNAL",
    stargazers_count: 0,
    forks_count: 0,
    description: "Application PWA de journaling privacy-first alimentée par l'IA.",
    language: "TypeScript",
  },
  {
    id: 9004,
    name: "Morefix_WebStore",
    html_url: "https://github.com/Mohammad77Radwan/Morefix_WebStore",
    stargazers_count: 0,
    forks_count: 0,
    description: "WebStore e-commerce dynamique pour produits reconditionnés.",
    language: "TypeScript",
  },
  {
    id: 9005,
    name: "collaborative-node-editor",
    html_url: "https://github.com/Mohammad77Radwan/collaborative-node-editor",
    stargazers_count: 0,
    forks_count: 0,
    description: "Éditeur visuel multiplayer temps réel basé sur CRDT.",
    language: "TypeScript",
  },
  {
    id: 9006,
    name: "Portfolio-MR",
    html_url: "https://github.com/Mohammad77Radwan/Portfolio-MR",
    stargazers_count: 0,
    forks_count: 0,
    description: "Portfolio avancé Next.js - BTS SIO SLAM.",
    language: "TypeScript",
  },
];

function githubHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "portfolio-next",
  };

  const token = process.env.GITHUB_TOKEN;
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return headers;
}

const PINNED_REPOS = [
  "go-distributed-orderbook",
  "enterprise-rag-pipeline",
  "MINDFUL-JOURNAL",
  "Morefix_WebStore",
  "collaborative-node-editor",
];

async function getLatestRepos(): Promise<GithubRepo[]> {
  const response = await fetch("https://api.github.com/users/Mohammad77Radwan/repos?sort=updated&per_page=24", {
    next: { revalidate: 3600 },
    headers: githubHeaders(),
  });

  if (!response.ok) {
    return [];
  }

  const repos = (await response.json()) as GithubRepo[];

  return repos
    .filter((repo) => !repo.name.toLowerCase().includes("portfolio"))
    .filter((repo) => !repo.name.toLowerCase().includes("codespaces"))
    .filter((repo) => repo.name.toLowerCase() !== "web_store")
    .filter((repo) => !repo.name.toLowerCase().includes("test"))
    .filter((repo) => Boolean(repo.description && repo.description.trim().length > 12))
    .filter((repo) => !repo.fork)
    .slice(0, 6);
}

async function getPinnedRepos(): Promise<GithubRepo[]> {
  const results = await Promise.all(
    PINNED_REPOS.map(async (name) => {
      const response = await fetch(`https://api.github.com/repos/Mohammad77Radwan/${name}`, {
        next: { revalidate: 3600 },
        headers: githubHeaders(),
      });

      if (!response.ok) {
        return null;
      }

      return (await response.json()) as GithubRepo;
    }),
  );

  return results.filter((repo): repo is GithubRepo => repo !== null);
}

async function getRepos(): Promise<GithubRepo[]> {
  const latest = await getLatestRepos();
  if (latest.length >= 6) {
    return latest.slice(0, 6);
  }

  const pinned = await getPinnedRepos();
  const merged = [...latest, ...pinned].filter(
    (repo, index, array) =>
      array.findIndex((candidate) => candidate.name.toLowerCase() === repo.name.toLowerCase()) === index,
  );

  const candidates = merged.slice(0, 6);
  if (candidates.length > 0) {
    return candidates;
  }

  return FALLBACK_REPOS;
}

export async function GithubRepos() {
  const repos = await getRepos();

  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-4">GitHub Live - Activité Réelle</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              Données récupérées en direct via Server Components + Suspense pour prouver l&apos;activité continue et la maîtrise de l&apos;écosystème GitHub.
            </p>
          </div>
          <a
            href="https://github.com/Mohammad77Radwan?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 hover:bg-blue-500/20"
          >
            Voir tous mes repos
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
              <article key={repo.id} className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-800">
                <h3 className="font-bold text-lg mb-2">{repo.name}</h3>
                <p className="line-clamp-3 min-h-[3.75rem] text-sm text-slate-600 dark:text-slate-300">
                  {repo.description ?? "Pas de description."}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span className="rounded-full bg-slate-100 px-2 py-1 dark:bg-slate-700">{repo.language ?? "N/A"}</span>
                  <span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5" /> {repo.stargazers_count}</span>
                  <span className="inline-flex items-center gap-1"><GitFork className="h-3.5 w-3.5" /> {repo.forks_count}</span>
                </div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  Ouvrir le repo
                  <ExternalLink className="h-4 w-4" />
                </a>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
