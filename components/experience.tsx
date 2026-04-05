"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { Calendar, MapPin } from "lucide-react";

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Expérience Professionnelle</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Mes réalisations et expériences dans le développement web et la
            formation en informatique.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>

          {/* Experience Items */}
          <div className="space-y-12 relative">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className={`md:flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-9 h-9 rounded-full border-4 border-white dark:border-slate-950 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-4 md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className="md:w-1/2 ml-12 md:ml-0">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                          {exp.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        {exp.startDate} - {exp.endDate}
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-slate-900 dark:text-slate-50 mb-2 text-sm">
                        Points clés :
                      </h4>
                      <ul className="space-y-1">
                        {exp.highlights.slice(0, 3).map((highlight, i) => (
                          <li
                            key={i}
                            className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                          >
                            <span className="text-blue-500 font-bold mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
