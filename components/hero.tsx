"use client";

import { motion } from "framer-motion";
import { ChevronDown, GitBranch, Mail } from "lucide-react";
import Link from "next/link";
import { useScrambleText } from "@/hooks/use-scramble-text";

export function Hero() {
  const roleText = useScrambleText("Développeur Web Full-Stack & Designer UX/UI", {
    duration: 1000,
    fps: 36,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            👋 Bienvenue sur mon portfolio
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 leading-tight"
        >
          Mohammad Radwan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4"
        >
          {roleText}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Étudiant BTS SIO SLAM passionné par le développement web moderne et l&apos;IA.
          Je crée des applications performantes, accessibles et magnifiques avec 
          Next.js, React et TypeScript.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-8 mb-12 max-w-md mx-auto"
        >
          <div>
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projets</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Ans d&apos;expérience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">15+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Technologies</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Link
            href="#projects"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Voir mes projets
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50 font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
          >
            Me contacter
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center mb-12"
        >
          <a
            href="https://github.com/Mohammad77Radwan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            aria-label="GitHub"
          >
            <GitBranch className="w-6 h-6" />
          </a>
          <a
            href="mailto:mohammadradwn804@gmail.com"
            className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center pt-8"
        >
          <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
