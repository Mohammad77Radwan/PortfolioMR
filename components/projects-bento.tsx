"use client";

import Image from "next/image";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { memo, useCallback, useMemo, useState } from "react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { ProjectModal } from "./project-modal";

const BLUR =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNicgaGVpZ2h0PScxMic+PHJlY3Qgd2lkdGg9JzE2JyBoZWlnaHQ9JzEyJyBmaWxsPScjMTQyMjM3Jy8+PC9zdmc+";

interface TiltCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  featured?: boolean;
  index?: number;
}

const TiltCard = memo(function TiltCard({ project, onOpen, featured = false, index = 0 }: TiltCardProps) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const pointerX = useMotionValue(120);
  const pointerY = useMotionValue(120);
  const glowOpacity = useMotionValue(0);
  const rotateX = useTransform(my, [-0.5, 0.5], [7, -7]);
  const rotateY = useTransform(mx, [-0.5, 0.5], [-9, 9]);
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${pointerX}px ${pointerY}px, rgba(56, 189, 248, 0.18), transparent 72%)`;
  const borderGlow = useMotionTemplate`radial-gradient(170px circle at ${pointerX}px ${pointerY}px, rgba(255, 255, 255, 0.9), transparent 72%)`;
  const isUnderDevelopment = project.id === "collaborative-node-editor";
  const coverImage = [project.image, ...(project.screenshots ?? [])].find((src) =>
    /\.(png|jpe?g|webp|gif)$/i.test(src),
  );

  return (
    <motion.button
      type="button"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        mx.set(px);
        my.set(py);
        pointerX.set(e.clientX - rect.left);
        pointerY.set(e.clientY - rect.top);
        glowOpacity.set(1);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
        glowOpacity.set(0);
      }}
      onClick={() => onOpen(project)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={`group relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-sm transition-all hover:shadow-2xl dark:border-slate-700/80 dark:bg-slate-900 ${featured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      {/* Border glow only near cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] rounded-2xl p-px"
        style={{ backgroundImage: borderGlow, opacity: glowOpacity }}
      >
        <div className="h-full w-full rounded-2xl bg-transparent" />
      </motion.div>

      {/* Spotlight layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] rounded-2xl"
        style={{ backgroundImage: spotlight, opacity: glowOpacity }}
      />

      {coverImage && (
        <div className={`relative w-full ${featured ? "h-64 md:h-[65%]" : "h-44"}`}>
          <Image
            src={coverImage}
            alt={project.title}
            fill
            sizes={featured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            placeholder="blur"
            blurDataURL={BLUR}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 right-8 h-40 w-40 rounded-full border border-cyan-300/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-3 p-5 text-slate-900 dark:text-white">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-900/15 px-2.5 py-1 text-[11px] font-semibold text-slate-900 backdrop-blur dark:bg-white/20 dark:text-white">{project.date}</span>
          {(project.btsBlocks ?? []).map((block) => (
            <span key={block} className="rounded-full bg-slate-900/15 px-2.5 py-1 text-[11px] font-semibold text-slate-900 backdrop-blur dark:bg-white/20 dark:text-white">
              {block}
            </span>
          ))}
          {isUnderDevelopment && (
            <motion.span
              className="rounded-full bg-amber-400/20 px-2.5 py-1 text-[11px] font-semibold text-amber-700 backdrop-blur dark:text-amber-300"
              animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.04, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              En Développement
            </motion.span>
          )}
        </div>
        <div className="mt-auto">
          <h3 className="text-xl font-bold leading-tight">{project.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm text-slate-700 dark:text-slate-100/90">
            {project.description}
          </p>
        </div>
      </div>
    </motion.button>
  );
});

TiltCard.displayName = "TiltCard";

export function ProjectsBento() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selected, setSelected] = useState<Project | null>(null);

  const categories = useMemo(
    () => ["all", "fullstack", "ia", "systems", "ecommerce", "pwa"],
    [],
  );

  const categoryLabel = (category: string) => {
    if (category === "all") return "Tous";
    if (category === "ia") return "IA";
    if (category === "fullstack") return "Full-Stack";
    if (category === "systems") return "Systèmes";
    if (category === "ecommerce") return "E-commerce";
    if (category === "pwa") return "PWA";
    return category.toUpperCase();
  };

  const filtered = useMemo(() => {
    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === "all" ||
        project.category === activeCategory ||
        (project.categories ?? []).includes(activeCategory);
      const queryMatch = `${project.title} ${project.description}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return categoryMatch && queryMatch;
    });
  }, [activeCategory, query]);

  const [first, ...rest] = filtered;

  const handleOpenProject = useCallback((project: Project) => {
    setSelected(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <section id="projects" className="relative isolate px-4 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 relative z-10">
          <h2 className="mb-4 bg-gradient-to-r from-cyan-200 via-blue-200 to-fuchsia-200 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Projets Réalisés
          </h2>
          <p className="max-w-2xl text-slate-200 text-base md:text-lg">
            Chaque projet est présenté comme une mini case-study interactive pour montrer l&apos;impact, les choix d&apos;architecture et la valeur métier.
          </p>
        </div>

        <div className="relative z-20">
          <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Recherche projet, technologie, impact..."
              className="rounded-xl border border-cyan-300/30 bg-slate-900/70 px-4 py-3 text-slate-100 outline-none ring-cyan-400/40 placeholder:text-slate-400 focus:ring-4"
            />
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_30px_rgba(14,165,233,0.35)]"
                      : "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                  }`}
                >
                  {categoryLabel(category)}
                </button>
              ))}
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-xl border border-dashed border-slate-400 p-8 text-center text-slate-600 dark:border-slate-700 dark:text-slate-300">
              Aucun projet ne correspond à ce filtre.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[220px]">
              {first && <TiltCard project={first} onOpen={handleOpenProject} featured index={0} />}
              {rest.map((project, index) => (
                <TiltCard key={project.id} project={project} onOpen={handleOpenProject} index={index + 1} />
              ))}
            </div>
          )}
        </div>
      </div>

      <ProjectModal project={selected} onClose={handleCloseModal} />
    </section>
  );
}
