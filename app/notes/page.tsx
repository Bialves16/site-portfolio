import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Notes | Beatriz Alves",
  description:
    "Anotações, reflexões e arquivo de projetos — conteúdo em construção.",
};

export default function NotesPage() {
  return (
    <>
      <Header />
      <main className="relative z-10 mx-auto flex min-h-[70vh] max-w-[900px] flex-col justify-center px-5 py-20 sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
          NOTES / ARCHIVE
        </p>
        <h1 className="mt-4 font-sans text-4xl font-black uppercase tracking-tight text-text sm:text-5xl">
          Em breve.
        </h1>
        <p className="mt-6 max-w-lg text-text-muted leading-relaxed">
          Este espaço será dedicado a anotações técnicas, reflexões sobre
          sistemas, dados e inteligência artificial — e ao arquivo completo de
          projetos.
        </p>
        <div className="mt-10 h-px w-24 bg-accent/50" />
        <Link
          href="/#home"
          className="mt-10 inline-flex w-fit items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
        >
          <ArrowLeft size={13} />
          VOLTAR AO INÍCIO
        </Link>
      </main>
      <Footer />
    </>
  );
}
