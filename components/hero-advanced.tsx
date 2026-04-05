"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./magnetic-button";
import { GlassCard } from "./glass-card";
import { AuroraBackground } from "./aurora-background";
import { ChevronDown, Download, GitBranch } from "lucide-react";
import { useScrambleText } from "@/hooks/use-scramble-text";

/**
 * HeroAdvanced Component
 * Hero époustouflante avec:
 * - Aurora background animé
 * - Text Reveal animation mot par mot
 * - Glassmorphism cards
 * - Magnetic buttons
 * - Parallax scroll effect
 *
 * Démontre la maîtrise de :
 * - Framer Motion (animations complexes)
 * - Tailwind CSS (design moderne)
 * - Micro-interactions (hover effects)
 * - UX/UI advanced (glassmorphism, aurora)
 */
export function HeroAdvanced() {
  // Texte principal à révéler mot par mot
  const mainText = [
    "Mohammad Radwan",
  ];

  const roleText = useScrambleText("Développeur Web Full-Stack", {
    duration: 1000,
    fps: 36,
  });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Aurora Background */}
      <AuroraBackground />

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={wordVariants} className="mb-8 inline-block">
            <GlassCard hoverable={false}>
              <p className="text-sm font-medium bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                🎓 BTS SIO SLAM 2ème année • Candidat Licence/Bachelor 2026
              </p>
            </GlassCard>
          </motion.div>

          {/* Titre principal avec Text Reveal */}
          <motion.h1
            variants={containerVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            {mainText[0].split(" ").map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Sous-titre avec animation en parallèle */}
          <motion.div
            variants={containerVariants}
            className="mb-8 h-12 md:h-16"
          >
            <div className="text-xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 flex flex-col items-center gap-2">
              <motion.span variants={wordVariants} className="inline-block tracking-wide tabular-nums">
                {roleText}
              </motion.span>
              <motion.span variants={wordVariants} className="inline-block text-base md:text-xl text-slate-600 dark:text-slate-400">
                Créateur d&apos;Expériences Web Exceptionnelles
              </motion.span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Étudiant en BTS SIO spécialisé en SLAM (Développement Applicatif).
            Je construis des applications web modernes, performantes et accessibles.
            Reconnu pour une maturité professionnelle avancée, une grande autonomie
            et une curiosité intellectuelle rare, je suis passionné par Next.js,
            React et les pratiques de conception user-centric.
          </motion.p>

          {/* Stats Cards avec Glassmorphism */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12"
          >
            {[
              { number: "20+", label: "Projets" },
              { number: "15+", label: "Technologies" },
              { number: "3+", label: "Ans d'Expérience" },
            ].map((stat, i) => (
              <motion.div key={i} variants={wordVariants}>
                <GlassCard hoverable>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      {stat.label}
                    </p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons avec Magnetic Effect */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <MagneticButton variant="primary" href="#projects" ariaLabel="Aller à la section projets">
              Voir mes projets
            </MagneticButton>
            <MagneticButton variant="secondary" href="#contact" ariaLabel="Aller à la section contact">
              Me contacter
            </MagneticButton>
            <a
              href="/documents/Mohammad_Radwan_CV.pdf"
              download
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-8 py-4 font-semibold text-cyan-200 transition-all hover:bg-cyan-400/20 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <Download className="h-4 w-4" />
              Télécharger mon CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={slideUp}
            className="flex gap-4 justify-center"
          >
            {[
              {
                name: "GitHub",
                url: "https://github.com/Mohammad77Radwan",
              },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={`Ouvrir ${social.name}`}
                className="interactive inline-flex min-h-12 items-center gap-2 rounded-xl border border-cyan-300/45 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 px-6 py-3 text-cyan-100 shadow-[0_0_0_1px_rgba(34,211,238,0.15),0_10px_30px_rgba(59,130,246,0.25)] transition-all hover:border-cyan-200/60 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.3),0_14px_36px_rgba(59,130,246,0.35)]"
              >
                <GitBranch className="h-5 w-5" />
                <span className="text-base font-semibold tracking-wide">{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mt-16"
        >
          <div
            aria-hidden="true"
            className="interactive p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-slate-400 dark:text-slate-600" />
          </div>
        </motion.div>
      </div>

      {/* Glow effects à basEn */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-t from-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
