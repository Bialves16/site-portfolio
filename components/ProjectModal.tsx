"use client";

import { useEffect, useId, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, X } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus?.();
    };
  }, [project, onClose]);

  const duration = reduceMotion ? 0 : 0.24;

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5">
          <motion.button
            type="button"
            aria-label="Fechar modal"
            className="absolute inset-0 bg-black/75"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration }}
            onClick={onClose}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(90vh,880px)] w-full max-w-[920px] flex-col overflow-hidden border border-border-accent/50 bg-[#0a0a0a] shadow-[0_0_40px_rgba(255,208,0,0.06)]"
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: reduceMotion ? 1 : 0.97 }}
            transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Fechar detalhes do projeto"
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-border bg-bg/80 text-text transition-colors hover:border-accent/50 hover:text-accent sm:right-4 sm:top-4"
            >
              <X size={18} strokeWidth={1.75} />
            </button>

            <div className="overflow-y-auto overscroll-contain">
              <div className="relative aspect-[16/9] w-full border-b border-border bg-bg-surface sm:aspect-[2/1]">
                <ProjectPreview project={project} />
              </div>

              <div className="px-5 py-6 sm:px-8 sm:py-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.14em] text-text-dim">
                    {project.category}
                  </span>
                </div>

                <h2
                  id={titleId}
                  className="mt-3 font-sans text-2xl font-black uppercase tracking-tight text-text sm:text-3xl"
                >
                  {project.title}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-[15px]">
                  {project.shortDescription}
                </p>

                <div className="mt-8">
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-accent">
                    SOBRE O PROJETO
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-accent">
                    TECNOLOGIAS
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="border border-border px-2.5 py-1 font-mono text-[10px] tracking-[0.08em] text-text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-accent">
                    PRINCIPAIS RECURSOS
                  </h3>
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-sm text-text-muted"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-bg transition-transform hover:-translate-y-0.5"
                    >
                      VER PROJETO
                      <ArrowRight size={14} strokeWidth={2.2} />
                    </a>
                  ) : null}

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 font-mono text-[11px] tracking-[0.14em] text-text transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <Github size={14} strokeWidth={1.75} />
                      VER NO GITHUB
                      <ArrowRight size={13} strokeWidth={1.75} />
                    </a>
                  ) : null}

                  {!project.url && !project.github ? (
                    <p className="font-mono text-[10px] tracking-[0.12em] text-text-dim">
                      Links do projeto serão adicionados em breve.
                    </p>
                  ) : null}

                  <button
                    type="button"
                    onClick={onClose}
                    className="font-mono text-[11px] tracking-[0.16em] text-text-dim underline decoration-border underline-offset-4 transition-colors hover:text-accent sm:ml-auto"
                  >
                    FECHAR
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
