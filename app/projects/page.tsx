import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/components/Projects";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projetos | Beatriz Alves",
  description:
    "Arquivo de projetos de Beatriz Alves — software, dados e inteligência artificial.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 sm:px-8 lg:px-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text-dim transition-colors hover:text-accent"
          >
            <ArrowLeft size={13} />
            VOLTAR
          </Link>
          <p className="mt-8 font-mono text-[10px] tracking-[0.25em] text-accent">
            ARCHIVE
          </p>
          <h1 className="mt-3 font-sans text-3xl font-black uppercase tracking-tight text-text sm:text-4xl">
            Projetos
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
            Clique em um projeto para ver detalhes, tecnologias e recursos.
          </p>
        </div>
        <Projects hideViewAll />
      </main>
      <Footer />
    </>
  );
}
