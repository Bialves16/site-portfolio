"use client";

export default function BackgroundEffects() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle technical grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Fine diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,208,0,0.5) 0 1px, transparent 1px 28px)",
        }}
      />

      {/* Scattered yellow dots */}
      <span className="absolute left-[8%] top-[18%] h-[2px] w-[2px] rounded-full bg-accent animate-pulse-dot" />
      <span className="absolute left-[22%] top-[62%] h-[2px] w-[2px] rounded-full bg-accent/70 animate-pulse-dot [animation-delay:1.2s]" />
      <span className="absolute left-[48%] top-[28%] h-[2px] w-[2px] rounded-full bg-accent/50 animate-pulse-dot [animation-delay:2s]" />
      <span className="absolute left-[71%] top-[74%] h-[2px] w-[2px] rounded-full bg-accent animate-pulse-dot [animation-delay:0.6s]" />
      <span className="absolute left-[88%] top-[42%] h-[2px] w-[2px] rounded-full bg-accent/60 animate-pulse-dot [animation-delay:1.8s]" />
      <span className="absolute left-[15%] top-[88%] h-[2px] w-[2px] rounded-full bg-white/40" />
      <span className="absolute left-[63%] top-[12%] h-[2px] w-[2px] rounded-full bg-white/30" />

      {/* Tiny geometric markers */}
      <span className="absolute left-[12%] top-[40%] h-2 w-2 border border-accent/25" />
      <span className="absolute right-[18%] top-[58%] h-1.5 w-1.5 border border-white/15" />
      <span className="absolute left-[55%] bottom-[20%] h-px w-8 bg-accent/20 animate-line-drift" />
      <span className="absolute right-[30%] top-[22%] h-10 w-px bg-white/10" />
      <span className="absolute left-[35%] top-[70%] font-mono text-[9px] text-white/10">
        +
      </span>
      <span className="absolute right-[12%] bottom-[35%] font-mono text-[9px] text-accent/20">
        +
      </span>
      <span className="absolute left-[78%] top-[33%] font-mono text-[8px] tracking-widest text-white/10">
        00.12
      </span>

      {/* Film grain */}
      <div
        className="animate-grain absolute -inset-[20%] opacity-[0.045] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* Soft vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.55)_100%)]" />
    </div>
  );
}
