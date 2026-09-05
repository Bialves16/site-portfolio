"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroGraphic from "./HeroGraphic";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex min-h-[calc(100svh-88px)] flex-col justify-center px-5 pb-16 pt-10 sm:px-8 lg:px-12 lg:pb-20 lg:pt-6"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-12">
        <div className="relative max-w-[720px]">
          <motion.h1
            className="font-sans text-[clamp(2.6rem,7.5vw,5.75rem)] font-black uppercase leading-[0.92] tracking-[-0.03em]"
            initial="hidden"
            animate="show"
          >
            <motion.span custom={0} variants={fadeUp} className="block text-text">
              I Build
            </motion.span>
            <motion.span custom={1} variants={fadeUp} className="block text-text">
              Systems.
            </motion.span>
            <motion.span custom={2} variants={fadeUp} className="block text-accent">
              I Solve
            </motion.span>
            <motion.span custom={3} variants={fadeUp} className="block text-accent">
              Real Problems.
            </motion.span>
          </motion.h1>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-md text-[15px] leading-relaxed text-text-muted sm:text-base"
          >
            Estudante de Ciência de Dados e
            <br className="hidden sm:block" /> Inteligência Artificial na
            PUC-Campinas.
            <br />
            Apaixonada por transformar ideias em soluções que
            <br className="hidden sm:block" /> geram impacto real.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-9 flex flex-wrap items-center gap-6"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-bg transition-transform hover:-translate-y-0.5"
            >
              VER PROJETOS
              <ArrowRight size={14} strokeWidth={2.2} />
            </Link>
            <Link
              href="/#about"
              className="font-mono text-[11px] tracking-[0.16em] text-text underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
            >
              SOBRE MIM
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <HeroGraphic />
        </motion.div>
      </div>

      <a
        href="/#about"
        className="absolute bottom-6 right-5 hidden flex-col items-center gap-3 font-mono text-[10px] tracking-[0.35em] text-text-dim transition-colors hover:text-accent sm:right-8 sm:flex lg:right-12"
        aria-label="Rolar para a próxima seção"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">SCROLL</span>
        <span className="h-10 w-px bg-accent" />
      </a>
    </section>
  );
}
