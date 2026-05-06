import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
      <div className="soft-grid relative overflow-hidden rounded-[36px] border border-[#BFE4FF] bg-white/88 px-6 py-12 shadow-[0_22px_60px_rgba(18,48,71,0.1)] md:px-10 md:py-16 lg:px-14">
        <div className="relative z-10 max-w-4xl">
          <p className="mb-4 inline-flex rounded-full border border-[#BFE4FF] bg-[#F5FBFF] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#267FC0]">
            PTF04 – Professional Track 4
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-[#123047] sm:text-6xl lg:text-7xl">
            My Learning Journey in PTF04
          </h1>
          <p className="mt-5 text-xl font-bold text-[#267FC0]">Fritzch Ainsley Santos</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#31536B] md:text-lg md:leading-9">
            Hello there! Welcome to my digital portfolio. I am Fritzch Ainsley Santos, and this portfolio presents the
            projects I created and compiled throughout PTF04. Each project reflects my learning journey, technical
            growth, and the skills I developed along the way.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="focus-ring rounded-full bg-[#5BADEB] px-7 py-3.5 text-center text-sm font-black text-white shadow-[0_14px_32px_rgba(91,173,235,0.3)] transition hover:-translate-y-1 hover:bg-[#3f9ee3]"
            >
              View My Projects
            </Link>
            <Link
              href="/about"
              className="focus-ring rounded-full border border-[#BFE4FF] bg-white px-7 py-3.5 text-center text-sm font-black text-[#123047] transition hover:-translate-y-1 hover:border-[#5BADEB] hover:text-[#267FC0]"
            >
              About Me
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["8", "Project pages"],
            ["PTF04", "Course journey"],
            ["2026", "Digital portfolio"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[24px] border border-[#D5ECFF] bg-white/88 p-5">
              <p className="text-3xl font-black text-[#123047]">{value}</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-[#5BADEB]">{label}</p>
            </div>
          ))}
        </div>
        <div className="wave-accent" />
      </div>
    </section>
  );
}
