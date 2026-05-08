import Link from "next/link";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="arcade-card group flex h-full flex-col border border-white/10 bg-[#090D15]/92 p-5 shadow-[0_20px_48px_rgba(0,0,0,0.34)] transition duration-300 hover:-translate-y-1.5 hover:border-[#74C7FF]/60 hover:shadow-[0_0_36px_rgba(28,155,255,0.18)]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-sm bg-[#E8334A] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-white">
          Project {project.projectNumber}
        </span>
        <span className="h-3 w-10 rounded-full bg-gradient-to-r from-[#1C9BFF] via-white to-[#E8334A]" aria-hidden="true" />
      </div>
      <h2 className="text-xl font-black uppercase leading-tight text-white">{project.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#C7D8EA]">{project.shortDescription}</p>
      {!compact ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      ) : null}
      <Link
        href={`/projects/${project.slug}`}
        className="focus-ring tekken-button mt-6 inline-flex items-center justify-center rounded-sm bg-[#1C9BFF] px-5 py-3 text-sm font-black uppercase tracking-[0.1em] text-white transition group-hover:bg-[#E8334A]"
      >
        View Project
      </Link>
    </article>
  );
}
