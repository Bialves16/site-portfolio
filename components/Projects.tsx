"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Props = {
  /** When true, hides the "VER TODOS" link (e.g. on /projects page) */
  hideViewAll?: boolean;
  /** Limit featured projects; defaults to all */
  limit?: number;
};

export default function Projects({ hideViewAll = false, limit }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const visibleProjects =
    typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section
      id="projects"
      className="relative z-10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
          <h2 className="font-mono text-xs tracking-[0.22em] text-accent sm:text-sm">
            {hideViewAll ? "TODOS OS PROJETOS" : "PROJETOS EM DESTAQUE"}
          </h2>
          {!hideViewAll && (
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text transition-colors hover:text-accent"
              aria-label="Ver todos os projetos"
            >
              VER TODOS
              <ArrowRight size={13} />
            </Link>
          )}
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}
