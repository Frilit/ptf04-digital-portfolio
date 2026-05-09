"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useCallback, useEffect, useState } from "react";
import type { Screenshot } from "@/data/projects";

type ScreenshotCardProps = {
  screenshot: Screenshot;
};

export function ScreenshotCard({ screenshot }: ScreenshotCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
  }, []);

  function closeFromBackdrop(event: MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      closeLightbox();
    }
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeLightbox();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeLightbox, isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="focus-ring group w-full overflow-hidden rounded-sm border border-white/10 bg-[#090D15] text-left shadow-[0_18px_42px_rgba(0,0,0,0.3)] transition duration-300 hover:-translate-y-1.5 hover:border-[#74C7FF]/60 hover:shadow-[0_0_42px_rgba(28,155,255,0.22)]"
        aria-label={`Open ${screenshot.title} screenshot`}
      >
        <span className="relative block aspect-[16/10] overflow-hidden bg-[#101723] transition duration-500 group-hover:-rotate-1 group-hover:scale-[1.03] group-hover:border-[#74C7FF]/70 group-hover:shadow-[0_22px_42px_rgba(28,155,255,0.18)]">
          <Image
            src={screenshot.image}
            alt={screenshot.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <span className="absolute right-4 top-4 translate-x-5 rounded-full border border-white/10 bg-black/70 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-white opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            View
          </span>
        </span>
        <span className="block p-5">
          <span className="block text-lg font-black uppercase text-white">{screenshot.title}</span>
          <span className="mt-2 block text-sm leading-7 text-[#C7D8EA]">{screenshot.description}</span>
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[90] grid place-items-center overflow-y-auto bg-black/82 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={screenshot.title}
          onMouseDown={closeFromBackdrop}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="focus-ring fixed right-4 top-4 z-[91] rounded-sm border border-white/15 bg-black/80 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white shadow-[0_12px_30px_rgba(0,0,0,0.45)] transition hover:border-[#74C7FF]/60 hover:bg-[#E8334A]"
          >
            Close
          </button>
          <div
            className="w-full max-w-[1120px] overflow-hidden rounded-sm border border-[#74C7FF]/30 bg-[#070B12] p-4 shadow-[0_0_60px_rgba(28,155,255,0.28)] md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em] text-[#74C7FF]">Screenshot Preview</p>
                <h3 className="mt-2 text-2xl font-black uppercase text-white md:text-3xl">{screenshot.title}</h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="focus-ring rounded-sm border border-white/10 bg-black/45 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-[#74C7FF]/60 hover:bg-[#1C9BFF]"
              >
                Close
              </button>
            </div>
            <div className="mt-5 flex max-h-[68vh] min-h-[220px] items-center justify-center overflow-hidden rounded-sm border border-white/10 bg-black/45 p-2">
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="max-h-[66vh] w-auto max-w-full rounded-sm object-contain"
              />
            </div>
            <p className="mt-5 text-base leading-8 text-[#C7D8EA]">{screenshot.description}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
