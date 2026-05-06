import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:px-8 md:py-20">
        <SectionTitle
          eyebrow="Project Gallery"
          title="Click the Projects Below"
          description="Each card opens a dedicated page with overview, features, code snippet placeholders, screenshots, tools, challenges, and reflection notes."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} compact />
          ))}
        </div>
      </section>
    </>
  );
}
