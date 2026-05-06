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
      <Link href="/projects" className="focus-ring inline-flex rounded-full text-sm font-black text-[#267FC0] hover:text-[#123047]">
        Back to Projects
      </Link>

      <header className="soft-grid relative mt-6 overflow-hidden rounded-[36px] border border-[#BFE4FF] bg-white/90 p-8 shadow-[0_22px_60px_rgba(18,48,71,0.1)] md:p-10">
        <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5BADEB]">Project {project.projectNumber}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight text-[#123047] md:text-6xl">{project.title}</h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-[#31536B] md:text-lg">{project.shortDescription}</p>
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
            <h2 className="text-2xl font-black text-[#123047]">{project.title}</h2>
            <p className="mt-4 text-base leading-8 text-[#31536B]">{project.overview}</p>
            <h3 className="mt-7 text-lg font-black text-[#123047]">Objectives / Purpose</h3>
            <ul className="mt-3 grid gap-3">
              {project.objectives.map((objective) => (
                <li key={objective} className="rounded-2xl bg-[#F5FBFF] p-4 text-sm leading-7 text-[#31536B]">
                  {objective}
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="B. Key Features">
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-2xl border border-[#D5ECFF] bg-[#F5FBFF] p-4 text-sm leading-7 text-[#31536B]">
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
              {project.screenshots.map((screenshot) => (
                <ScreenshotCard key={`${project.slug}-${screenshot.title}`} screenshot={screenshot} />
              ))}
            </div>
          </DetailSection>

          <DetailSection title="F. Challenges & Solutions">
            <div className="grid gap-4">
              {project.challenges.map((challenge) => (
                <div key={challenge.problem} className="rounded-[24px] border border-[#D5ECFF] bg-[#F5FBFF] p-5">
                  <h3 className="text-base font-black text-[#123047]">Problem</h3>
                  <p className="mt-2 text-sm leading-7 text-[#31536B]">{challenge.problem}</p>
                  <h3 className="mt-5 text-base font-black text-[#123047]">Solution</h3>
                  <p className="mt-2 text-sm leading-7 text-[#31536B]">{challenge.solution}</p>
                </div>
              ))}
            </div>
          </DetailSection>

          <DetailSection title="G. Learning Reflection">
            <p className="text-base leading-8 text-[#31536B]">{project.reflection}</p>
          </DetailSection>
        </div>

        <aside className="h-fit rounded-[28px] border border-[#D5ECFF] bg-white p-6 shadow-[0_16px_35px_rgba(18,48,71,0.08)] lg:sticky lg:top-28">
          <h2 className="text-lg font-black text-[#123047]">E. Tools & Technologies Used</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Tag key={`aside-${tool}`}>{tool}</Tag>
            ))}
          </div>
          <p className="mt-5 text-sm leading-7 text-[#31536B]">
            Edit these tools in <span className="font-bold text-[#123047]">src/data/projects.ts</span> once the actual
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
    <section className="rounded-[28px] border border-[#D5ECFF] bg-white p-6 shadow-[0_16px_35px_rgba(18,48,71,0.08)] md:p-7">
      <h2 className="text-2xl font-black text-[#123047]">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}
