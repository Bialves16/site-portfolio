"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Technologies from "./Technologies";

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[0.85fr_1.1fr_1.2fr] lg:gap-10 xl:gap-14">
        <motion.div
          className="relative mx-auto flex w-full max-w-[280px] items-center lg:mx-0 lg:max-w-none"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-border bg-bg-surface">
            <Image
              src="/images/eu.jpg"
              alt="Foto de Beatriz Alves"
              fill
              sizes="(max-width: 1024px) 280px, 320px"
              className="object-cover object-center"
              priority
            />
            <div className="absolute bottom-3 right-3 h-3 w-3 bg-accent" />
          </div>
          <span className="absolute -left-2 top-8 h-8 w-px bg-accent/40" />
          <span className="absolute -bottom-2 left-6 h-px w-10 bg-white/15" />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.08 }}
        >
          <h2 className="font-mono text-xs tracking-[0.22em] text-accent">
            SOBRE MIM
          </h2>
          <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-text-muted sm:text-base">
            <p>
              Estudante de Ciência de Dados e Inteligência Artificial com foco
              em desenvolvimento de software, dados e inteligência artificial. Gosto de resolver problemas difíceis e criar produtos que
              realmente fazem sentido. Gosto de resolver problemas difíceis e criar produtos que
              realmente fazem sentido.
            </p>
            <p>
              Gosto de resolver problemas difíceis e criar produtos que
              realmente fazem sentido.
            </p>
          </div>
          <Link
            href="/notes"
            className="mt-8 inline-flex w-fit items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-text underline decoration-accent decoration-1 underline-offset-[6px] transition-colors hover:text-accent"
          >
            SAIBA MAIS
            <ArrowRight size={13} />
          </Link>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.14 }}
        >
          <Technologies />
        </motion.div>
      </div>
    </section>
  );
}
