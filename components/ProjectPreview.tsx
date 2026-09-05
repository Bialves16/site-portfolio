import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export default function ProjectPreview({ project, className = "" }: Props) {
  if (project.image) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={project.image}
        alt={`Preview do projeto ${project.title}`}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col justify-between p-4 sm:p-5 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(160deg, rgba(255,208,0,0.06), transparent 55%),
          linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "auto, 20px 20px, 20px 20px",
      }}
      role="img"
      aria-label={`Placeholder visual do projeto ${project.title}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[9px] tracking-widest text-white/30">
          PREVIEW
        </span>
        <span className="h-1.5 w-1.5 bg-accent/50" />
      </div>
      <div>
        <div className="mb-2 h-px w-1/2 bg-white/10" />
        <div className="mb-1.5 h-px w-2/3 bg-white/8" />
        <div className="h-px w-1/3 bg-accent/25" />
      </div>
      <span className="font-mono text-[9px] tracking-[0.18em] text-text-dim">
        {project.title.toUpperCase()}
      </span>
    </div>
  );
}
