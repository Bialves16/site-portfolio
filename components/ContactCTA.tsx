"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/contact/ContactModal";

function WireGlobe() {
  return (
    <svg
      viewBox="0 0 220 220"
      className="h-full w-full max-w-[220px]"
      fill="none"
      aria-hidden="true"
    >
      <path d="M20 40 V20 H40" stroke="rgba(0,0,0,0.45)" strokeWidth="1" />
      <path d="M180 20 H200 V40" stroke="rgba(0,0,0,0.45)" strokeWidth="1" />
      <path d="M20 180 V200 H40" stroke="rgba(0,0,0,0.45)" strokeWidth="1" />
      <path d="M180 200 H200 V180" stroke="rgba(0,0,0,0.45)" strokeWidth="1" />

      <ellipse
        cx="110"
        cy="110"
        rx="68"
        ry="68"
        stroke="rgba(0,0,0,0.55)"
        strokeWidth="1"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="68"
        ry="28"
        stroke="rgba(0,0,0,0.4)"
        strokeWidth="0.8"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="68"
        ry="48"
        stroke="rgba(0,0,0,0.28)"
        strokeWidth="0.7"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="28"
        ry="68"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="0.8"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="48"
        ry="68"
        stroke="rgba(0,0,0,0.25)"
        strokeWidth="0.7"
      />
      <line
        x1="42"
        y1="110"
        x2="178"
        y2="110"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="0.7"
      />
      <line
        x1="110"
        y1="42"
        x2="110"
        y2="178"
        stroke="rgba(0,0,0,0.35)"
        strokeWidth="0.7"
      />
      <ellipse
        cx="110"
        cy="110"
        rx="88"
        ry="34"
        stroke="rgba(0,0,0,0.3)"
        strokeWidth="0.8"
        transform="rotate(-18 110 110)"
      />
      <circle cx="178" cy="88" r="2.5" fill="rgba(0,0,0,0.5)" />
      <circle cx="52" cy="138" r="2" fill="rgba(0,0,0,0.4)" />
    </svg>
  );
}

export default function ContactCTA() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <section id="contact" className="relative z-10 px-5 py-16 sm:px-8 lg:px-12">
      <motion.div
        className="relative mx-auto max-w-[1400px] overflow-hidden border border-accent/40 bg-accent"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55 }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.12) 0%, transparent 40%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.35) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative grid gap-8 px-6 py-10 text-center sm:px-10 sm:py-12 md:gap-10 md:text-left lg:grid-cols-[1.1fr_1fr_0.7fr] lg:items-center lg:gap-8 lg:px-12 lg:py-14">
          <h2 className="mx-auto max-w-[16ch] font-sans text-[clamp(1.75rem,4vw,3.25rem)] font-black uppercase leading-[0.95] tracking-[-0.02em] text-bg md:mx-0 md:max-w-none">
            Vamos Construir
            <br />
            Algo Incrível
            <br />
            Juntos.
          </h2>

          <div className="mx-auto max-w-sm md:mx-0">
            <p className="text-sm leading-relaxed text-bg/80 sm:text-[15px]">
              Estou aberta a novos projetos, colaborações e oportunidades que
              desafiem meus limites.
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-7 inline-flex items-center gap-2 bg-bg px-5 py-3 font-mono text-[11px] font-semibold tracking-[0.14em] text-text transition-transform hover:-translate-y-0.5"
            >
              ENTRAR EM CONTATO
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="hidden justify-end lg:flex">
            <WireGlobe />
          </div>
        </div>
      </motion.div>

      <ContactModal open={open} onClose={close} />
    </section>
  );
}
