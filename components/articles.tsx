"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "IA Weekly : Nvidia, Amazon & OpenAI",
    excerpt:
      "Découvrez les dernières avancées des géants de l'IA cette semaine. Nvidia, Amazon et OpenAI redéfinissent les frontières de l'intelligence artificielle.",
    url: "https://blogveilletech.netlify.app/blog/ia-weekly-nvidia-amazon-openai",
  },
  {
    id: 2,
    title: "La Souveraineté Numérique Française",
    excerpt:
      "Analyse approfondie des enjeux de souveraineté numérique en France. Comment la France peut-elle garantir son indépendance technologique ?",
    url: "https://blogveilletech.netlify.app/blog/souverainete-numerique-francaise",
  },
  {
    id: 3,
    title: "L'évolution de l'IA en 2026",
    excerpt:
      "Retour sur les tendances majeures de l'intelligence artificielle cette année. Des LLMs aux agents autonomes, l'IA transforme notre quotidien.",
    url: "https://blogveilletech.netlify.app/blog/ia-en-2026",
  },
];

export function Articles() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="articles" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-50">
            Derniers Articles
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Découvrez mes dernières analyses sur le blog.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {articles.map((article) => (
            <motion.a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              className="group relative flex flex-col rounded-xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <h3 className="mb-3 text-xl font-semibold text-slate-50 transition-colors group-hover:text-blue-400">
                {article.title}
              </h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">
                {article.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-all group-hover:gap-3">
                Lire l&apos;article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
