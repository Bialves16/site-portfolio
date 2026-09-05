"use client";

import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";
import ProjectPreview from "./ProjectPreview";

type Props = {
  project: Project;
  onSelect: (project: Project) => void;
};

export default function ProjectCard({ project, onSelect }: Props) {
  const cardTechnologies = project.technologies.slice(0, 3);

  return (
    <button
      type="button"
      onClick={() => onSelect(project)}
      className="group flex cursor-pointer flex-col border border-[rgba(255,208,0,0.28)] bg-[#0a0a0a] p-4 text-left transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/80 hover:bg-bg-elevated/80 focus-visible:border-accent sm:p-5"
      aria-label={`Abrir detalhes do projeto ${project.title}`}
    >
      <span className="font-mono text-[11px] tracking-[0.2em] text-accent">
        {project.number}
      </span>

      <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden border border-border bg-bg-surface">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]">
          <ProjectPreview project={project} />
        </div>
      </div>

      <h3 className="mt-5 font-sans text-lg font-bold tracking-tight text-text sm:text-xl">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-text-dim">
        {project.shortDescription}
      </p>
      <p className="mt-4 font-mono text-[10px] tracking-[0.08em] text-text-dim/90">
        {cardTechnologies.join(", ")}.
      </p>
      <span className="mt-5 inline-flex text-accent transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
      </span>
    </button>
  );
}
