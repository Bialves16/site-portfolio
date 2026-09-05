"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-10 flex items-end justify-between gap-4 sm:mb-12">
          <h2 className="font-mono text-xs tracking-[0.22em] text-accent sm:text-sm">
            PROJETOS EM DESTAQUE
          </h2>
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text transition-colors hover:text-accent"
            aria-label="Ver todos os projetos"
          >
            VER TODOS
            <ArrowRight size={13} />
          </Link>
        </div>

        <motion.div
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
