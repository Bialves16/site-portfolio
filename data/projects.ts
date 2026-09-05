export type Project = {
  id: string;
  number: string;
  title: string;
  description: string;
  technologies: string[];
  href: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "finance-os",
    number: "01",
    title: "Finance OS",
    description:
      "Plataforma para gestão financeira de empresas com múltiplas operações.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL"],
    href: "#projects",
  },
  {
    id: "pantry-ai",
    number: "02",
    title: "PantryAI",
    description:
      "Sistema inteligente para inventário e gestão de estoque com IA.",
    technologies: ["Python", "FastAPI", "React"],
    href: "#projects",
  },
  {
    id: "taskly",
    number: "03",
    title: "Taskly",
    description:
      "Gerenciador de tarefas pessoal com filtros, prioridades e categorias.",
    technologies: ["JavaScript", "LocalStorage"],
    href: "#projects",
  },
];
