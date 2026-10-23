import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { contactConfig, getMailtoHref } from "@/data/contact";

const socials = [
  {
    label: "LinkedIn",
    href: contactConfig.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: contactConfig.github,
    icon: Github,
    external: true,
  },
  {
    label: "Enviar e-mail",
    href: getMailtoHref(),
    icon: Mail,
    external: false,
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Link
          href="/#home"
          className="font-sans text-xl font-black tracking-tight text-accent transition-opacity hover:opacity-80"
          aria-label="Beatriz Alves"
        >
          BA
        </Link>

        <p className="text-center font-mono text-[10px] tracking-[0.08em] text-text-dim sm:text-[11px]">
          © 2026 Beatriz Alves. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              aria-label={label}
              title={label}
              className="text-accent transition-colors hover:text-accent-soft focus-visible:text-accent-soft"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
