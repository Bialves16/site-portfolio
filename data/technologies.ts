export type TechGroup = {
  title: string;
  items: string[];
};

export type Tool = {
  name: string;
  icon: "github" | "vscode" | "postgresql" | "figma" | "python";
};

export const techGroups: TechGroup[] = [
  {
    title: "FRONTEND",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "BACKEND",
    items: ["Node.js"],
  },
  {
    title: "DADOS",
    items: ["Python", "SQL"],
  },
];

export const tools: Tool[] = [
  { name: "GitHub", icon: "github" },
  { name: "VS Code", icon: "vscode" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Figma", icon: "figma" },
  { name: "Python", icon: "python" },
];
