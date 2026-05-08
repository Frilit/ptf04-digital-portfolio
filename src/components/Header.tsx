"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070C]/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8" aria-label="Main">
        <Link href="/" className="focus-ring rounded-2xl text-left" onClick={() => setIsOpen(false)}>
          <span className="block text-base font-black text-white">Fritzch Ainsley Santos</span>
          <span className="block text-xs font-black uppercase tracking-[0.18em] text-[#74C7FF]">PTF04 Arcade</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-full px-5 py-2.5 text-sm font-bold transition ${
                  isActive
                    ? "bg-[#E8334A] !text-white shadow-[0_10px_25px_rgba(232,51,74,0.28)]"
                    : "text-[#DDEBFF] hover:bg-[#1C9BFF] hover:!text-white hover:shadow-[0_10px_25px_rgba(28,155,255,0.24)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <button
          type="button"
          className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/55 text-white shadow-[0_10px_25px_rgba(0,0,0,0.28)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`grid transition-all duration-300 md:hidden ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <div className="mx-6 mb-5 flex flex-col gap-2 rounded-[24px] border border-white/10 bg-[#090D15] p-3 shadow-[0_16px_35px_rgba(0,0,0,0.35)]">
            {navItems.map((item) => {
              const isActive = item.href === "/" ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`focus-ring rounded-2xl px-4 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-[#E8334A] !text-white"
                      : "text-[#DDEBFF] hover:bg-[#1C9BFF] hover:!text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
