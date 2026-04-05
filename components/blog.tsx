"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Lightbulb, Rocket, Lock, Globe, type LucideIcon } from "lucide-react";

interface TechTip {
  icon: LucideIcon;
  text: string;
}

interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  url: string;
}

// Fun tech tips for engagement
const TECH_TIPS: TechTip[] = [
  {
    icon: Lightbulb,
    text: "Astuce : Utilisez Ctrl+Shift+P pour tout faire dans VS Code !",
  },
  {
    icon: Rocket,
    text: "Conseil : L'IA peut booster votre veille technologique.",
  },
  {
    icon: Sparkles,
    text: "Fun : Le premier site web date de 1991 !",
  },
  {
    icon: Lock,
    text: "Sécurité : Changez vos mots de passe régulièrement.",
  },
  {
    icon: Globe,
    text: "HTML signifie HyperText Markup Language !",
  },
];

export function Blog() {
  const [articles, setArticles] = useState<BlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [tips, setTips] = useState<TechTip[]>([]);

  useEffect(() => {
    fetch("/api/blog-articles")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setArticles(data);
          setTips(data.map(() => TECH_TIPS[Math.floor(Math.random() * TECH_TIPS.length)]));
        } else {
          setArticles([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setArticles([]);
        setLoading(false);
      });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // For compatibility, treat all as featured for now
  const featured = articles;
  const others: BlogArticle[] = [];

  if (loading) {
    return (
      <section id="blog" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center py-20">
          <span className="text-lg text-slate-500 dark:text-slate-400">Chargement des articles…</span>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Articles & Veille Tech</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Découvrez mes articles et analyses sur les tendances technologiques,
            l&apos;IA, et les meilleures pratiques en développement web.
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featured.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6">À la une</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featured.map((post, idx) => (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={post.slug || post.id}
                  style={{ textDecoration: "none" }}
                >
                  <motion.article
                    variants={itemVariants}
                    className="group bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-blue-200 dark:border-blue-800 relative"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-medium">
                        {post.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Animated gradient bar for visual engagement */}
                    <div className="w-full h-1 mt-4 rounded-full animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />

                    {/* Fun tech tip with premium icon */}
                    {(() => {
                      const Icon = tips[idx]?.icon;
                      return (
                        <div className="mt-4 flex items-center gap-2 text-xs italic text-purple-500 dark:text-purple-300 opacity-80">
                          {Icon && <Icon className="w-4 h-4 text-purple-400 dark:text-purple-200" />}
                          {tips[idx]?.text}
                        </div>
                      );
                    })()}

                    <div className="flex items-center justify-end text-sm text-slate-500 dark:text-slate-400 mt-2">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.article>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other Posts */}
        {others.length > 0 && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Derniers articles</h3>
            <div className="space-y-4">
              {others.map((post) => (
                <motion.article
                  key={post.id}
                  variants={itemVariants}
                  className="group bg-white dark:bg-slate-800 rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-slate-200 dark:border-slate-700 flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                        <div className="w-full h-1 mt-4 rounded-full animate-gradient-x bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400" />
                      <span className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-700">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all mt-1" />
                </motion.article>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
