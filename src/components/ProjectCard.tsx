import Link from "next/link";
import type { Project } from "@/data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  compact?: boolean;
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-[#D5ECFF] bg-white p-5 shadow-[0_16px_35px_rgba(18,48,71,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-[#A7D8FF] hover:shadow-[0_22px_50px_rgba(18,48,71,0.12)]">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="rounded-full bg-[#E5F5FF] px-3 py-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#267FC0]">
          Project {project.projectNumber}
        </span>
        <span className="h-3 w-10 rounded-full bg-gradient-to-r from-[#A7D8FF] via-[#D8F7ED] to-[#FFF1C7]" aria-hidden="true" />
      </div>
      <h2 className="text-xl font-black leading-tight text-[#123047]">{project.title}</h2>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#31536B]">{project.shortDescription}</p>
      {!compact ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
      ) : null}
      <Link
        href={`/projects/${project.slug}`}
        className="focus-ring mt-6 inline-flex items-center justify-center rounded-full bg-[#123047] px-5 py-3 text-sm font-black text-white transition group-hover:bg-[#5BADEB]"
      >
        View Project
      </Link>
    </article>
  );
}
