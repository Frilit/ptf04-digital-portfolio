"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type SplashState = "visible" | "leaving" | "hidden";

export function RouteExperience() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement>(null);
  const previousPathRef = useRef(pathname);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [splashState, setSplashState] = useState<SplashState>("visible");

  const playDorya = useCallback(() => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    audio.currentTime = 0;
    audio.volume = 0.62;
    void audio.play().catch(() => {
      setSoundEnabled(false);
    });
  }, []);

  function startExperience() {
    setSoundEnabled(true);
    setSplashState("leaving");

    window.setTimeout(() => {
      playDorya();
    }, 540);

    window.setTimeout(() => {
      setSplashState("hidden");
    }, 980);
  }

  useEffect(() => {
    if (previousPathRef.current !== pathname && soundEnabled && splashState === "hidden") {
      playDorya();
    }

    previousPathRef.current = pathname;
  }, [pathname, playDorya, soundEnabled, splashState]);

  return (
    <>
      <audio ref={audioRef} src="/dorya.mp3" preload="auto" />
      {splashState !== "hidden" ? (
        <div
          className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#05070C] px-6 transition duration-500 ${
            splashState === "leaving" ? "scale-105 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(232,51,74,0.3),transparent_26%),radial-gradient(circle_at_42%_62%,rgba(28,155,255,0.32),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_18px)]" />
          <div className="splash-slash absolute inset-y-0 left-1/2 w-24 -translate-x-1/2 bg-white/5" />
          <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
            <div className="splash-core relative grid h-44 w-44 place-items-center rounded-full bg-black/70 shadow-[0_0_80px_rgba(28,155,255,0.25)]">
              <div className="relative z-10 grid h-32 w-32 place-items-center rounded-full border border-white/10 bg-[#101723]">
                <span className="text-4xl font-black uppercase tracking-[0.16em] text-white">Dorya</span>
              </div>
            </div>
            <p className="mt-8 text-xs font-black uppercase tracking-[0.32em] text-[#74C7FF]">Portfolio loading</p>
            <h1 className="arcade-title mt-3 text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              Ready for the next battle
            </h1>
            <button
              type="button"
              onClick={startExperience}
              className="focus-ring tekken-button mt-8 bg-[#E8334A] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_38px_rgba(232,51,74,0.32)] transition hover:-translate-y-1 hover:bg-[#FF5267]"
            >
              Start Fight
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
