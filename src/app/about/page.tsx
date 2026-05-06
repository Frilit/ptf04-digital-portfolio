import { SectionTitle } from "@/components/SectionTitle";

const highlights = [
  {
    title: "Who I Am",
    body: "I am Fritzch Ainsley Santos, a student building this digital portfolio to present my work in PTF04 – Professional Track 4. This website reflects both my finished outputs and the learning process behind them.",
  },
  {
    title: "My Goals",
    body: "My goal is to keep improving as a creative and technical learner. I want to build projects that are organized, useful, readable, and easier for other people to understand.",
  },
  {
    title: "My Interests",
    body: "I enjoy working with clean designs, simple layouts, and digital tools that turn ideas into something visual and interactive. I am also interested in improving my confidence with coding and project presentation.",
  },
  {
    title: "My Learning Journey",
    body: "Throughout PTF04, I practiced turning instructions into actual outputs, solving problems when errors appeared, and documenting the steps that helped me complete each task.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-14 md:px-8 md:py-20">
      <SectionTitle
        eyebrow="About Me"
        title="Learning, building, and getting better one project at a time."
        description="This page gives a personal look at my goals, interests, learning journey, and technical growth throughout PTF04."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {highlights.map((item) => (
          <article
            key={item.title}
            className="rounded-[28px] border border-[#D5ECFF] bg-white/90 p-7 shadow-[0_18px_45px_rgba(18,48,71,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(18,48,71,0.12)]"
          >
            <h2 className="text-2xl font-black text-[#123047]">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-[#31536B]">{item.body}</p>
          </article>
        ))}
      </div>

      <article className="soft-grid relative mt-8 overflow-hidden rounded-[32px] border border-[#BFE4FF] bg-white p-8 shadow-[0_18px_45px_rgba(18,48,71,0.08)] md:p-10">
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#5BADEB]">Technical Growth</p>
          <h2 className="mt-3 text-3xl font-black text-[#123047] md:text-4xl">
            PTF04 helped me become more confident with structure, problem-solving, and presentation.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#31536B]">
            As I worked through the projects, I learned how important it is to plan before building, test outputs
            carefully, and explain technical work in a way that feels clear. This coded portfolio is also part of that
            growth because it turns my previous Google Sites compilation into a deployable website built with modern web
            technologies.
          </p>
        </div>
        <div className="wave-accent" />
      </article>
    </section>
  );
}
