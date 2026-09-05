export type Project = {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  technologies: string[];
  features: string[];
  category: string;
  image?: string;
  /** External project URL — only set when a real link exists */
  url?: string;
  /** GitHub repository URL — only set when a real link exists */
  github?: string;
};

export const projects: Project[] = [
  {
    id: "finance-os",
    number: "01",
    title: "Finance OS",
    shortDescription:
      "Plataforma para gestão financeira de empresas com múltiplas operações.",
    description:
      "Finance OS é uma plataforma de gestão financeira criada para centralizar e organizar as operações financeiras de empresas que possuem múltiplas operações, permitindo acompanhar receitas, despesas, clientes, produtos e indicadores em um único ambiente.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
    ],
    features: [
      "Dashboard financeiro",
      "Controle de receitas e despesas",
      "Gestão de clientes",
      "Gestão de produtos",
      "Relatórios",
      "Indicadores financeiros",
      "Organização por empresa",
      "Estrutura preparada para múltiplas operações",
    ],
    category: "Web Application",
  },
  {
    id: "pantry-ai",
    number: "02",
    title: "PantryAI",
    shortDescription:
      "Sistema inteligente para inventário e gestão de estoque com IA.",
    description:
      "PantryAI é um sistema inteligente desenvolvido para facilitar o controle de inventário e estoque, utilizando recursos de inteligência artificial para ajudar na organização dos produtos e na tomada de decisões.",
    technologies: ["Python", "FastAPI", "React", "TypeScript", "IA"],
    features: [
      "Controle de inventário",
      "Gestão de produtos",
      "Controle de estoque",
      "Inteligência artificial",
      "Dashboard",
      "Organização de informações",
    ],
    category: "AI / Web Application",
  },
  {
    id: "taskly",
    number: "03",
    title: "Taskly",
    shortDescription:
      "Gerenciador de tarefas pessoal com filtros, prioridades e categorias.",
    description:
      "Taskly é uma aplicação de gerenciamento de tarefas desenvolvida para organizar atividades pessoais de forma simples e rápida, permitindo trabalhar com prioridades, categorias e filtros.",
    technologies: ["JavaScript", "React", "LocalStorage"],
    features: [
      "Criação de tarefas",
      "Edição de tarefas",
      "Exclusão de tarefas",
      "Categorias",
      "Prioridades",
      "Filtros",
      "Persistência local",
    ],
    category: "Web Application",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
