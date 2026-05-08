import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/data/projects";
import { CodeBlock } from "./CodeBlock";
import { ScreenshotCard } from "./ScreenshotCard";
import { Tag } from "./Tag";

type ProjectDetailTemplateProps = {
  project: Project;
};

export function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  return (
    <article className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
      <Link href="/projects" className="focus-ring inline-flex rounded-full text-sm font-black text-[#74C7FF] hover:text-white">
        Back to Projects
      </Link>

      <header className="arcade-card relative mt-6 overflow-hidden border border-white/10 bg-[#090D15]/92 p-8 shadow-[0_26px_70px_rgba(0,0,0,0.42)] md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#74C7FF]">Project {project.projectNumber}</p>
        <h1 className="arcade-title mt-3 max-w-4xl text-4xl font-black uppercase leading-tight text-white md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#C7D8EA] md:text-lg">{project.shortDescription}</p>
        <div className="mt-7 flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <Tag key={tool}>{tool}</Tag>
          ))}
        </div>
        <div className="wave-accent" />
      </header>

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="space-y-8">
          <DetailSection title="A. Project Overview">
            <h2 className="text-2xl font-black uppercase text-white">{project.title}</h2>
            <p className="mt-4 text-base leading-8 text-[#C7D8EA]">{project.overview}</p>
            <h3 className="mt-7 text-lg font-black uppercase text-[#74C7FF]">Objectives / Purpose</h3>
            <ul className="mt-3 grid gap-3">
              {project.objectives.map((objective) => (
                <li key={objective} className="rounded-sm bg-[#102033] p-4 text-sm leading-7 text-[#C7D8EA]">
                  {objective}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="B. Key Features">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-sm border border-white/10 bg-[#102033] p-4 text-sm leading-7 text-[#C7D8EA]">
                  {feature}
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="C. Important Code Blocks">
            <div className="grid gap-5">
              {project.codeSnippets.map((snippet) => (
                <CodeBlock key={`${project.slug}-${snippet.title}`} snippet={snippet} />
              ))}
            </div>
          </DetailSection>

          <DetailSection title="D. Screenshots / Visuals">
            <div className="grid gap-5 md:grid-cols-2">
              {project.screenshots.filter((screenshot) => !screenshot.previewOnly).map((screenshot) => (
                <ScreenshotCard key={`${project.slug}-${screenshot.title}`} screenshot={screenshot} />
              ))}
            </div>
          </DetailSection>

          <DetailSection title="F. Challenges & Solutions">
            <div className="grid gap-4">
              {project.challenges.map((challenge) => (
                <div key={challenge.problem} className="rounded-sm border border-white/10 bg-[#102033] p-5">
                  <h3 className="text-base font-black uppercase text-[#FF5267]">Problem</h3>
                  <p className="mt-2 text-sm leading-7 text-[#C7D8EA]">{challenge.problem}</p>
                  <h3 className="mt-5 text-base font-black uppercase text-[#74C7FF]">Solution</h3>
                  <p className="mt-2 text-sm leading-7 text-[#C7D8EA]">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="G. Learning Reflection">
            <p className="text-base leading-8 text-[#C7D8EA]">{project.reflection}</p>
          </DetailSection>
        </div>

        <aside className="arcade-card h-fit border border-white/10 bg-[#090D15]/92 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.34)] lg:sticky lg:top-28">
          <h2 className="text-lg font-black uppercase text-white">E. Tools & Technologies Used</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Tag key={`aside-${tool}`}>{tool}</Tag>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#C7D8EA]">
            Edit these tools in <span className="font-bold text-white">src/data/projects.ts</span> once the actual
            project stack is ready.
          </p>
        </aside>
      </div>
    </article>
  );
}

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="arcade-card border border-white/10 bg-[#090D15]/92 p-6 shadow-[0_20px_48px_rgba(0,0,0,0.34)] md:p-7">
      <h2 className="text-2xl font-black uppercase text-white">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
