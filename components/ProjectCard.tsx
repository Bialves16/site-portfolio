"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <Link
      href={project.href}
      className="group flex flex-col border border-border-accent/60 bg-bg-elevated/40 p-4 transition-[border-color,background-color] duration-300 hover:border-accent/70 hover:bg-bg-elevated/70 sm:p-5"
    >
      <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
        {project.number}
      </span>

      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden border border-border bg-bg-surface">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={`Screenshot do projeto ${project.title}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="flex h-full w-full flex-col justify-between p-4 transition-transform duration-500 group-hover:scale-[1.03]"
            style={{
              backgroundImage: `
                linear-gradient(160deg, rgba(255,208,0,0.06), transparent 55%),
                linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
              `,
              backgroundSize: "auto, 20px 20px, 20px 20px",
            }}
            role="img"
            aria-label={`Placeholder visual do projeto ${project.title}`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] tracking-widest text-white/30">
                PREVIEW
              </span>
              <span className="h-1.5 w-1.5 bg-accent/50" />
            </div>
            <div>
              <div className="mb-2 h-px w-1/2 bg-white/10" />
              <div className="mb-1.5 h-px w-2/3 bg-white/8" />
              <div className="h-px w-1/3 bg-accent/25" />
            </div>
            <span className="font-mono text-[9px] tracking-[0.18em] text-text-dim">
              {project.title.toUpperCase()}
            </span>
          </div>
        )}
      </div>

      <h3 className="mt-5 font-sans text-lg font-bold tracking-tight text-text sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">
        {project.description}
      </p>
      <p className="mt-4 font-mono text-[10px] tracking-[0.08em] text-text-dim/90">
        {project.technologies.join(", ")}.
      </p>
      <span className="mt-5 inline-flex text-accent transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight size={16} strokeWidth={1.75} />
      </span>
    </Link>
  );
}
