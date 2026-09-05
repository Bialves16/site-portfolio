"use client";

import { motion } from "framer-motion";

export default function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[520px]">
      {/* Outer frame */}
      <div className="absolute inset-[6%] border border-white/10" />
      <div className="absolute inset-[14%] border border-accent/15" />

      {/* Crosshair lines */}
      <div className="absolute left-1/2 top-[4%] h-[92%] w-px -translate-x-1/2 bg-white/15" />
      <div className="absolute left-[4%] top-1/2 h-px w-[92%] -translate-y-1/2 bg-white/15" />

      {/* Corner brackets */}
      <span className="absolute left-[6%] top-[6%] h-4 w-4 border-l border-t border-accent/50" />
      <span className="absolute right-[6%] top-[6%] h-4 w-4 border-r border-t border-accent/50" />
      <span className="absolute bottom-[6%] left-[6%] h-4 w-4 border-b border-l border-accent/50" />
      <span className="absolute bottom-[6%] right-[6%] h-4 w-4 border-b border-r border-accent/50" />

      {/* Coordinates */}
      <span className="absolute left-[8%] top-[3%] font-mono text-[9px] tracking-widest text-white/35">
        X: 0.42
      </span>
      <span className="absolute right-[8%] top-[3%] font-mono text-[9px] tracking-widest text-white/35">
        Y: 1.08
      </span>
      <span className="absolute bottom-[3%] left-[8%] font-mono text-[9px] tracking-widest text-accent/50">
        SYS.01
      </span>

      {/* Technical labels */}
      <span className="absolute left-[10%] top-[22%] font-mono text-[10px] text-white/45">
        {"<code>"}
      </span>
      <span className="absolute right-[12%] top-[26%] font-mono text-[10px] tracking-widest text-accent/70">
        DATA
      </span>
      <span className="absolute left-[8%] top-[58%] font-mono text-[10px] tracking-widest text-white/50">
        CODE
      </span>
      <span className="absolute right-[8%] top-[48%] font-mono text-[10px] tracking-widest text-white/45">
        AUTOMATION
      </span>
      <span className="absolute left-[18%] bottom-[18%] font-mono text-[10px] tracking-widest text-accent/60">
        DESIGN
      </span>
      <span className="absolute right-[16%] bottom-[22%] font-mono text-[10px] tracking-widest text-white/50">
        LOGIC
      </span>

      {/* Small squares / nodes */}
      <span className="absolute left-[28%] top-[30%] h-1.5 w-1.5 bg-accent animate-pulse-dot" />
      <span className="absolute right-[30%] top-[34%] h-1.5 w-1.5 border border-white/50" />
      <span className="absolute left-[32%] bottom-[28%] h-1 w-1 rounded-full bg-white/60 animate-pulse-dot [animation-delay:1s]" />
      <span className="absolute right-[26%] bottom-[32%] h-1 w-1 rounded-full bg-accent/80 animate-pulse-dot [animation-delay:2s]" />

      {/* Diagonal technical lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
        <line
          x1="18"
          y1="22"
          x2="42"
          y2="38"
          stroke="rgba(255,255,255,0.25)"
          strokeWidth="0.2"
          className="animate-line-drift"
        />
        <line
          x1="78"
          y1="24"
          x2="58"
          y2="44"
          stroke="rgba(255,208,0,0.35)"
          strokeWidth="0.2"
        />
        <line
          x1="20"
          y1="72"
          x2="40"
          y2="58"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="0.2"
        />
        <circle cx="42" cy="38" r="0.8" fill="rgba(255,208,0,0.7)" />
        <circle cx="58" cy="44" r="0.7" fill="rgba(255,255,255,0.5)" />
        <circle cx="40" cy="58" r="0.7" fill="rgba(255,255,255,0.45)" />
      </svg>

      {/* Central sphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 animate-float-soft"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255,220,80,0.55), rgba(255,208,0,0.22) 45%, rgba(255,208,0,0.05) 70%, transparent 78%)",
            boxShadow: "0 0 60px rgba(255,208,0,0.12)",
          }}
        />
        <div
          className="absolute inset-[8%] rounded-full border border-accent/25"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,208,0,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,208,0,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "18px 18px",
            maskImage:
              "radial-gradient(circle, black 45%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle, black 45%, transparent 78%)",
          }}
        />
        <div className="animate-rotate-slow absolute inset-[18%] rounded-full border border-dashed border-white/15" />
        <div className="absolute inset-[28%] rounded-full border border-accent/20" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/80" />
      </motion.div>

      {/* Orbit ring */}
      <div className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
    </div>
  );
}
