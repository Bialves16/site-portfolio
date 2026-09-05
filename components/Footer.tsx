import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
  },
  {
    label: "Email",
    href: "mailto:beatriz.alves@email.com",
    icon: Mail,
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
          © 2024 Beatriz Alves. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              aria-label={label}
              className="text-accent transition-colors hover:text-accent-soft"
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
