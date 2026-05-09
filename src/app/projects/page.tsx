import { ProjectCard } from "@/components/ProjectCard";
import { SectionTitle } from "@/components/SectionTitle";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "All nine PTF04 project pages in Fritzch Ainsley Santos' digital portfolio.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="Projects"
        title="Nine portfolio projects from my PTF04 journey."
        description="A collection of machine learning, deployment, mobile app, and AI-assisted projects that show my technical growth throughout the course."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
