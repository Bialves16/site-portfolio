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
    transition: {
      delay: 0.08 * i,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative z-10 flex h-[calc(100svh-88px)] flex-col px-5 pb-8 pt-6 sm:px-8 md:min-h-[560px] md:justify-center md:pb-0 md:pt-0 lg:px-12"
    >
      <div className="mx-auto flex h-full w-full max-w-[1400px] flex-col md:grid md:h-auto md:items-center md:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-10">
        <div className="relative flex h-full min-h-0 max-w-[720px] flex-col text-left md:h-auto md:justify-center">
          <motion.h1
            className="font-sans text-[clamp(2.75rem,10.5svh,4.6rem)] font-black uppercase leading-[0.9] tracking-[-0.035em] md:text-[clamp(2.55rem,7vw,5.25rem)] md:leading-[0.92]"
            initial="hidden"
            animate="show"
          >
            <motion.span custom={0} variants={fadeUp} className="block text-text">
              I Build
            </motion.span>
            <motion.span custom={1} variants={fadeUp} className="block text-text">
              Systems.
            </motion.span>
            <motion.span custom={2} variants={fadeUp} className="mt-1 block text-accent md:mt-0.5">
              I Solve
            </motion.span>
            <motion.span custom={3} variants={fadeUp} className="block text-accent">
              Real Problems.
            </motion.span>
          </motion.h1>

          <div className="mt-auto flex flex-col md:mt-0">
            <motion.p
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 max-w-md text-[14px] leading-relaxed text-text-muted md:mt-6 md:text-[15px]"
            >
              Estudante de Ciência de Dados e Inteligência Artificial
              <br className="hidden sm:block" /> na PUC-Campinas.
            </motion.p>

            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="mt-6 flex flex-wrap items-center gap-5 md:mt-7 md:gap-6"
            >
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-bg transition-transform hover:-translate-y-0.5"
              >
                VER PROJETOS
                <ArrowRight size={14} strokeWidth={2.2} />
              </Link>
              <a
                href="/cv/Beatriz-Alves-CV.pdf"
                download="Beatriz-Alves-CV.pdf"
                className="font-mono text-[11px] tracking-[0.16em] text-text underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
              >
                BAIXAR CV
              </a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative mx-auto hidden w-full max-w-[480px] items-center justify-center md:flex lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          <HeroGraphic />
        </motion.div>
      </div>

      <Link
        href="/#about"
        className="absolute bottom-6 right-5 hidden flex-col items-center gap-3 font-mono text-[10px] tracking-[0.35em] text-text-dim transition-colors hover:text-accent sm:right-8 md:flex lg:right-12"
        aria-label="Rolar para a próxima seção"
      >
        <span className="[writing-mode:vertical-rl] rotate-180">SCROLL</span>
        <span className="h-10 w-px bg-accent" />
      </Link>
    </section>
  );
}
