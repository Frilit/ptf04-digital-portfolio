"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/about") {
    return null;
  }

  return (
    <footer className="border-t border-white/10 bg-[#05070C]/90">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[#C7D8EA] md:flex-row md:items-center md:justify-between md:px-8">
        <p>&copy; 2026 Fritzch Ainsley Santos. Digital Portfolio for PTF04 &ndash; Professional Track 4.</p>
        <p className="font-bold text-white">Built with Next.js, TypeScript, Tailwind CSS, and Vercel in mind.</p>
      </div>
    </footer>
  );
}
