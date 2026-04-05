"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export function Testimonials() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section id="testimonials" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-slate-50">Avis et Recommandations</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Ce que mes collègues et professeurs pensent de mon travail et de mes
            compétences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-white dark:bg-slate-900/50 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-white/10"
            >
              {/* Stars */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span
                      key={i}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-amber-300/35 bg-amber-400/15"
                    >
                      <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                    </span>
                  ))}
                </div>
                <span className="rounded-full border border-cyan-300/35 bg-cyan-400/10 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-200">
                  {testimonial.rating}.0 / 5
                </span>
              </div>

              {/* Quote */}
              <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-slate-50">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
