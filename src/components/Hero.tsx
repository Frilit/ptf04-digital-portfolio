import Link from "next/link";
import { ArcadeJoystick } from "./ArcadeJoystick";

export function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 pb-12 pt-14 md:px-8 md:pb-16 md:pt-20">
      <div className="tekken-hero relative overflow-hidden rounded-[10px] border border-white/10 px-6 py-12 shadow-[0_34px_90px_rgba(0,0,0,0.5)] md:px-10 md:py-16 lg:px-14">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,14,0.96)_0%,rgba(6,11,19,0.82)_44%,rgba(6,11,19,0.46)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(232,51,74,0.35),transparent_28%),radial-gradient(circle_at_26%_68%,rgba(91,173,235,0.36),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#1C9BFF] via-white to-[#E8334A]" />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
          <div className="max-w-4xl">
            <p className="mb-4 inline-flex rounded-sm border border-[#74C7FF]/40 bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#74C7FF] shadow-[0_0_22px_rgba(91,173,235,0.24)]">
              PTF04 - Professional Track 4
            </p>
            <h1 className="arcade-title max-w-4xl text-5xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              My Learning Journey in PTF04
            </h1>
            <p className="mt-5 text-xl font-black uppercase tracking-[0.16em] text-[#FF5267]">Fritzch Ainsley Santos</p>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#DDEBFF] md:text-lg md:leading-9">
              Hello there! Welcome to my digital portfolio. I am Fritzch Ainsley Santos, and this portfolio presents the
              projects I created and compiled throughout PTF04. Each project reflects my learning journey, technical
              growth, and the skills I developed along the way.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/projects"
                className="focus-ring tekken-button rounded-sm bg-[#E8334A] px-7 py-3.5 text-center text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_32px_rgba(232,51,74,0.34)] transition hover:-translate-y-1 hover:bg-[#FF5267]"
              >
                View My Projects
              </Link>
              <Link
                href="/about"
                className="focus-ring rounded-sm border border-[#74C7FF]/55 bg-black/45 px-7 py-3.5 text-center text-sm font-black uppercase tracking-[0.12em] text-[#DDEBFF] transition hover:-translate-y-1 hover:border-white hover:bg-[#1C9BFF] hover:text-white"
              >
                About Me
              </Link>
            </div>
          </div>
          <ArcadeJoystick />
        </div>

        <div className="relative z-10 mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["8", "Project pages"],
            ["PTF04", "Course journey"],
            ["2026", "Digital portfolio"],
          ].map(([value, label]) => (
            <div key={label} className="arcade-card rounded-sm border border-white/10 bg-black/50 p-5 backdrop-blur-sm">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="mt-1 text-sm font-black uppercase tracking-[0.16em] text-[#74C7FF]">{label}</p>
            </div>
          ))}
        </div>

        <p className="relative z-10 mt-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/45">
          Background source: official TEKKEN 8 media from Bandai Namco Entertainment.
        </p>
      </div>
    </section>
  );
}
