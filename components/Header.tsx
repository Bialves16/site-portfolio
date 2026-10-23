"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/navigation";

function getRouteActive(pathname: string | null): string | null {
  if (pathname?.startsWith("/notes")) return "NOTES";
  if (pathname?.startsWith("/projects")) return "PROJECTS";
  return null;
}

export default function Header() {
  const pathname = usePathname();
  const routeActive = getRouteActive(pathname);
  const [open, setOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState("HOME");
  const active = routeActive ?? scrollActive;

  useEffect(() => {
    if (routeActive) return;

    const onScroll = () => {
      const sections = [
        { id: "home", label: "HOME" },
        { id: "about", label: "ABOUT" },
        { id: "projects", label: "PROJECTS" },
        { id: "contact", label: "CONTACT" },
      ];

      let current = "HOME";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 140) current = section.label;
      }
      setScrollActive(current);
    };

    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [routeActive]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-50">
      <div className="mx-auto flex max-w-[1400px] items-start px-5 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        {/* Menu first on mobile (left) */}
        <button
          type="button"
          className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-text md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>

        {/* Logo: right on mobile, left on desktop */}
        <Link
          href="/#home"
          className="group relative ml-auto font-sans text-[13px] font-bold leading-[1.05] tracking-[0.12em] text-text transition-colors hover:text-accent sm:text-sm md:ml-0"
          aria-label="Beatriz Alves — início"
        >
          <span className="block">BEATRIZ</span>
          <span className="block">
            ALVES
            <span className="ml-1.5 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-accent align-middle" />
          </span>
        </Link>

        <nav
          className="ml-auto hidden items-center gap-7 md:flex lg:gap-9"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = active === item.label;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`relative font-mono text-[11px] tracking-[0.18em] transition-colors lg:text-xs ${
                  isActive ? "text-accent" : "text-text-muted hover:text-text"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent" />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Lado direito (e fundo) escurecido */}
          <button
            type="button"
            className="absolute inset-0 bg-black/75"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />

          {/* Metade esquerda da tela, altura completa */}
          <div className="absolute bottom-0 left-0 top-0 flex h-full w-1/2 max-w-[50vw] flex-col border-r border-border bg-bg px-5 pb-8 pt-6">
            <button
              type="button"
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-text"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>

            <nav
              className="mt-12 flex flex-col gap-6"
              aria-label="Menu mobile"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block font-mono text-sm tracking-[0.2em] ${
                    active === item.label ? "text-accent" : "text-text"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
