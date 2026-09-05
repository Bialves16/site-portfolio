"use client";

import {
  Code2,
  Database,
  Figma,
  Github,
  Terminal,
} from "lucide-react";
import type { Tool } from "@/data/technologies";

const iconMap = {
  github: Github,
  vscode: Code2,
  postgresql: Database,
  figma: Figma,
  python: Terminal,
} as const;

type Props = {
  tool: Tool;
};

export default function ToolIcon({ tool }: Props) {
  const Icon = iconMap[tool.icon];
  return (
    <span
      className="inline-flex h-9 w-9 items-center justify-center text-accent/85 transition-colors hover:text-accent"
      title={tool.name}
      aria-label={tool.name}
    >
      <Icon size={18} strokeWidth={1.5} />
    </span>
  );
}
