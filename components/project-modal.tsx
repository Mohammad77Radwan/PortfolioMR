"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, GitBranch, X } from "lucide-react";
import { useEffect, useRef, useState, type WheelEvent } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/types";

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [mounted, setMounted] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const modalScrollRef = useRef<HTMLDivElement | null>(null);
  const contextText =
    project?.context ??
    "Projet réalisé dans une logique de production réelle avec contraintes UX, performance et robustesse.";
  const problemText =
    project?.problem ??
    "Comment livrer une solution fiable, rapide et compréhensible pour les utilisateurs finaux en gardant une architecture maintenable.";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [project]);

  const handleModalWheelCapture = (event: WheelEvent<HTMLDivElement>) => {
    event.stopPropagation();

    const el = modalScrollRef.current;
    if (!el) return;

    const { scrollTop, scrollHeight, clientHeight } = el;
    const isAtTop = scrollTop <= 0;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    if ((event.deltaY < 0 && isAtTop) || (event.deltaY > 0 && isAtBottom)) {
      event.preventDefault();
    }
  };

  const galleryImages = project
    ? Array.from(
        new Set(
          (project.screenshots ?? []).filter((src) => /\.(png|jpe?g|webp|gif)$/i.test(src)),
        ),
      )
    : [];

  const closeLightbox = () => setActiveImageIndex(null);

  const showPreviousImage = () => {
    if (activeImageIndex === null || galleryImages.length === 0) return;
    setActiveImageIndex((activeImageIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const showNextImage = () => {
    if (activeImageIndex === null || galleryImages.length === 0) return;
    setActiveImageIndex((activeImageIndex + 1) % galleryImages.length);
  };

  const getVideoMimeType = (videoPath: string) => {
    if (videoPath.endsWith(".mp4")) return "video/mp4";
    if (videoPath.endsWith(".webm")) return "video/webm";
    if (videoPath.endsWith(".mov")) return "video/quicktime";
    return "video/x-matroska";
  };

  useEffect(() => {
    setActiveImageIndex(null);
  }, [project?.id]);

  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, galleryImages.length]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {project && (
        <>
          <motion.button
            type="button"
            aria-label="Fermer le détail projet"
            className="fixed inset-0 z-[1200] bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Détails du projet ${project.title}`}
            className="fixed inset-x-4 top-6 z-[1300] mx-auto max-h-[88vh] max-w-5xl overflow-y-auto overscroll-y-contain rounded-2xl border border-slate-700/70 bg-slate-950 p-6 shadow-2xl"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            onWheelCapture={handleModalWheelCapture}
            ref={modalScrollRef}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Mini Case Study
                </p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{project.description}</p>
              </div>
              <button
                type="button"
                aria-label="Fermer la modale projet"
                onClick={onClose}
                className="-mt-1 ml-2 min-h-11 min-w-11 shrink-0 rounded-lg border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mb-6 grid gap-4 md:grid-cols-3">
              {(project.stats ?? []).map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-200 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                  <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mb-6 grid gap-6 md:grid-cols-2">
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Contexte</h4>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{contextText}</p>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Problème</h4>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{problemText}</p>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Solution technique</h4>
                <p className="text-sm leading-7 text-slate-700 dark:text-slate-300">{project.longDescription}</p>
              </article>
              <article className="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-slate-500">Compétences BTS</h4>
                <div className="flex flex-wrap gap-2">
                  {(project.btsBlocks ?? []).map((block) => (
                    <span
                      key={block}
                      className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                    >
                      {block}
                    </span>
                  ))}
                </div>
                <ul className="mt-3 list-disc pl-5 text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  {(project.btsCompetences ?? []).map((competence) => (
                    <li key={competence}>{competence}</li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech.name} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-600 dark:text-slate-200">
                  {tech.name}
                </span>
              ))}
            </div>

            {galleryImages.length > 0 && (
              <section className="mb-8">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Screenshots</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Mini galerie de l&apos;application</p>
                </div>
                <div className={`grid gap-4 ${galleryImages.length > 1 ? "md:grid-cols-2" : "grid-cols-1"}`}>
                  {galleryImages.map((src, index) => (
                    <motion.figure
                      key={`${project.id}-shot-${index}`}
                      initial={{ opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-950/80 dark:border-slate-700"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        aria-label={`Agrandir la capture ${index + 1}`}
                        className="block w-full text-left"
                      >
                        <div className={`relative w-full ${galleryImages.length > 1 ? "h-52" : "h-64 md:h-72"}`}>
                          <Image
                            src={src}
                            alt={`${project.title} screenshot ${index + 1}`}
                            fill
                            sizes={galleryImages.length > 1 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 900px"}
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                          <div className="absolute bottom-2 right-2 rounded-full border border-white/20 bg-slate-950/70 px-2 py-1 text-[11px] font-medium text-slate-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                            Plein écran
                          </div>
                        </div>
                      </button>
                      <figcaption className="px-3 py-2 text-xs text-slate-200">Capture {index + 1}</figcaption>
                    </motion.figure>
                  ))}
                </div>
              </section>
            )}

            {project.demoVideo && (
              <section className="mb-8">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Démo locale</h4>
                  <a
                    href={project.demoVideo}
                    download
                    className="text-xs font-medium text-blue-500 hover:text-blue-400"
                  >
                    Télécharger la vidéo
                  </a>
                </div>
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-950/80 dark:border-slate-700">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full max-h-[60vh] bg-black"
                    poster={galleryImages[0]}
                  >
                    <source src={project.demoVideo} type={getVideoMimeType(project.demoVideo)} />
                    Votre navigateur ne peut pas lire cette vidéo. Vous pouvez la télécharger avec le lien ci-dessus.
                  </video>
                </div>
              </section>
            )}

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                >
                  <GitBranch className="h-4 w-4" />
                  Code Source
                </a>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir en Live
                </a>
              )}
            </div>
          </motion.div>

          <AnimatePresence>
            {activeImageIndex !== null && galleryImages[activeImageIndex] && (
              <>
                <motion.button
                  type="button"
                  aria-label="Fermer la visionneuse d'image"
                  className="fixed inset-0 z-[1400] bg-slate-950/92 backdrop-blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={closeLightbox}
                />

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={`Visionneuse image ${activeImageIndex + 1}`}
                  className="fixed inset-0 z-[1500] flex items-center justify-center px-4"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  onClick={closeLightbox}
                >
                  <motion.div
                    className="relative w-full max-w-7xl"
                    onClick={(event) => event.stopPropagation()}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 12, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <button
                      type="button"
                      aria-label="Fermer"
                      onClick={closeLightbox}
                      className="absolute right-3 top-3 z-20 min-h-11 min-w-11 rounded-full border border-white/20 bg-slate-900/70 p-2 text-slate-100 transition hover:bg-slate-800"
                    >
                      <X className="h-5 w-5" />
                    </button>

                    {galleryImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          aria-label="Image précédente"
                          onClick={showPreviousImage}
                          className="absolute left-3 top-1/2 z-20 -translate-y-1/2 min-h-11 min-w-11 rounded-full border border-white/20 bg-slate-900/70 p-2 text-slate-100 transition hover:bg-slate-800"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          type="button"
                          aria-label="Image suivante"
                          onClick={showNextImage}
                          className="absolute right-3 top-1/2 z-20 -translate-y-1/2 min-h-11 min-w-11 rounded-full border border-white/20 bg-slate-900/70 p-2 text-slate-100 transition hover:bg-slate-800"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-[0_20px_80px_rgba(0,0,0,0.45)]">
                      <div className="relative h-[76vh] w-full">
                        <Image
                          src={galleryImages[activeImageIndex]}
                          alt={`${project.title} image ${activeImageIndex + 1}`}
                          fill
                          sizes="100vw"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>

                    <p className="mt-3 text-center text-sm text-slate-300">
                      Capture {activeImageIndex + 1} / {galleryImages.length}
                    </p>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>,
    document.body,
  );
}
