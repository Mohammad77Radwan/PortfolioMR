export function GithubReposSkeleton() {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto animate-pulse">
        <div className="h-10 w-72 rounded bg-slate-200 dark:bg-slate-800 mb-4" />
        <div className="h-5 w-full max-w-2xl rounded bg-slate-200 dark:bg-slate-800 mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-44 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-44 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-44 rounded-xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </section>
  );
}
