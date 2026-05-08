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
            className="arcade-card border border-white/10 bg-[#090D15]/92 p-7 shadow-[0_22px_52px_rgba(0,0,0,0.34)] transition hover:-translate-y-1 hover:border-[#74C7FF]/55"
          >
            <h2 className="text-2xl font-black uppercase text-white">{item.title}</h2>
            <p className="mt-4 text-base leading-8 text-[#C7D8EA]">{item.body}</p>
          </article>
        ))}
      </div>

      <article className="arcade-card relative mt-8 overflow-hidden border border-white/10 bg-[#090D15]/92 p-8 shadow-[0_24px_58px_rgba(0,0,0,0.36)] md:p-10">
        <div className="relative z-10 max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#74C7FF]">Technical Growth</p>
          <h2 className="arcade-title mt-3 text-3xl font-black uppercase text-white md:text-4xl">
            PTF04 helped me become more confident with structure, problem-solving, and presentation.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#C7D8EA]">
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
