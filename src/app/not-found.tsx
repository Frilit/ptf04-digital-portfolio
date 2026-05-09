import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#5BADEB]">Page not found</p>
      <h1 className="text-4xl font-black text-[#123047] md:text-5xl">This page is still floating somewhere else.</h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-[#31536B]">
        The portfolio page you opened does not exist yet. Head back to the project gallery and choose one of the nine
        available project pages.
      </p>
      <Link
        href="/projects"
        className="focus-ring mt-8 rounded-full bg-[#5BADEB] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(91,173,235,0.28)] transition hover:-translate-y-1 hover:bg-[#3f9ee3]"
      >
        View Projects
      </Link>
    </section>
  );
}
