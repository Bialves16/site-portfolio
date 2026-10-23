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
    id: "flux",
    number: "01",
    title: "Flux",
    shortDescription:
      "Sistema completo para freelancers gerenciarem projetos, clientes, finanças e rotina em um só lugar.",
    description:
      "Flux é uma plataforma pensada para freelancers que precisam centralizar o negócio: acompanhar faturamento, recebimentos e valores pendentes, organizar projetos e clientes, priorizar o que precisa de atenção e planejar a agenda do dia. O dashboard reúne indicadores financeiros, progresso dos projetos, próximas tarefas e insights para apoiar decisões — como cobranças em atraso, prazos próximos e revisão de precificação.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Dashboard com resumo do dia e do negócio",
      "Indicadores de faturado, recebido e pendente",
      "Gestão de projetos com progresso visual",
      "Controle de clientes e cobranças",
      "Agenda e próximas tarefas",
      "Alertas do que precisa de atenção",
      "Meta mensal e acompanhamento de desempenho",
      "Insights automáticos sobre horas e precificação",
    ],
    category: "Web Application",
    image: "/images/freelancer_project.png",
    url: "https://fluxfreelancers.vercel.app",
    github: "https://github.com/Bialves16/flux_freelancers",
  },
  {
    id: "finance-os",
    number: "02",
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
    number: "03",
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
    number: "04",
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
