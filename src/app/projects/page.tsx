import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "All eight PTF04 project pages in Fritzch Ainsley Santos' digital portfolio.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Projects"
        title="Eight portfolio projects, ready for your real details."
        description="Replace the placeholder data once your final project titles, screenshots, code snippets, and reflections are ready."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
