export function BlogSkeleton() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto animate-pulse">
        <div className="h-10 w-64 rounded bg-slate-200 dark:bg-slate-800 mb-4" />
        <div className="h-5 w-full max-w-2xl rounded bg-slate-200 dark:bg-slate-800 mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="h-56 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-56 rounded-xl bg-slate-200 dark:bg-slate-800" />
        </div>
        <div className="space-y-4">
          <div className="h-24 rounded-xl bg-slate-200 dark:bg-slate-800" />
          <div className="h-24 rounded-xl bg-slate-200 dark:bg-slate-800" />
        </div>
      </div>
    </section>
  );
}
