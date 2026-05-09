"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type SplashState = "visible" | "leaving" | "hidden";

declare global {
  interface Window {
    playDoryaSound?: () => void;
  }
}

export function RouteExperience() {
  const pathname = usePathname();
  const doryaAudioRef = useRef<HTMLAudioElement>(null);
  const finalRoundAudioRef = useRef<HTMLAudioElement>(null);
  const finalRoundVideoRef = useRef<HTMLVideoElement>(null);
  const finishTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const finishedRef = useRef(false);
  const previousPathRef = useRef(pathname);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [splashState, setSplashState] = useState<SplashState>("visible");
  const [introPlaying, setIntroPlaying] = useState(false);

  const playDorya = useCallback(() => {
    const audio = doryaAudioRef.current;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.volume = 0.62;
    void audio.play().catch(() => {
      setSoundEnabled(false);
    });
  }, []);

  const finishExperience = useCallback(() => {
    if (finishedRef.current) {
      return;
    }

    finishedRef.current = true;

    if (finishTimeoutRef.current) {
      window.clearTimeout(finishTimeoutRef.current);
      finishTimeoutRef.current = null;
    }

    setSplashState("leaving");

    window.setTimeout(() => {
      setIntroPlaying(false);
      setSplashState("hidden");
    }, 720);
  }, []);

  function startExperience() {
    if (introPlaying || splashState !== "visible") {
      return;
    }

    const finalRoundAudio = finalRoundAudioRef.current;
    const finalRoundVideo = finalRoundVideoRef.current;

    finishedRef.current = false;
    setSoundEnabled(true);
    setIntroPlaying(true);

    if (finalRoundVideo) {
      finalRoundVideo.pause();
      finalRoundVideo.currentTime = 0;
      finalRoundVideo.muted = true;
      void finalRoundVideo.play().catch(() => {});
    }

    if (finalRoundAudio) {
      finalRoundAudio.pause();
      finalRoundAudio.currentTime = 0;
      finalRoundAudio.volume = 0.9;
      void finalRoundAudio.play().catch(() => {});
    }

    finishTimeoutRef.current = window.setTimeout(finishExperience, 4300);
  }

  useEffect(() => {
    window.playDoryaSound = () => {
      if (soundEnabled && splashState === "hidden") {
        playDorya();
      }
    };

    return () => {
      delete window.playDoryaSound;
    };
  }, [playDorya, soundEnabled, splashState]);

  useEffect(() => {
    previousPathRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (finishTimeoutRef.current) {
        window.clearTimeout(finishTimeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <audio ref={doryaAudioRef} src="/dorya.m4a" preload="auto" />
      <audio ref={finalRoundAudioRef} src="/final-round-audio.mp4" preload="auto" onEnded={finishExperience} />
      {splashState !== "hidden" ? (
        <div
          className={`fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#05070C] px-6 transition duration-500 ${
            splashState === "leaving" ? "scale-105 opacity-0" : "scale-100 opacity-100"
          }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_42%,rgba(232,51,74,0.3),transparent_26%),radial-gradient(circle_at_42%_62%,rgba(28,155,255,0.32),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.04)_0_1px,transparent_1px_18px)]" />
          <div className="splash-slash absolute inset-y-0 left-1/2 w-24 -translate-x-1/2 bg-white/5" />
          <video
            ref={finalRoundVideoRef}
            src="/final-round-splash.webm"
            preload="auto"
            playsInline
            muted
            className={`pointer-events-none absolute left-1/2 top-1/2 z-20 w-[min(92vw,980px)] -translate-x-1/2 -translate-y-1/2 transition duration-300 ${
              introPlaying ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            aria-hidden="true"
          />
          <div
            className={`relative z-10 flex max-w-2xl flex-col items-center text-center transition duration-300 ${
              introPlaying ? "pointer-events-none scale-95 opacity-0" : "scale-100 opacity-100"
            }`}
          >
            <p className="splash-step splash-step-one mt-8 text-xs font-black uppercase tracking-[0.32em] text-[#74C7FF]">
              Portfolio loading
            </p>
            <h1 className="arcade-title mt-3 text-4xl font-black uppercase leading-none text-white sm:text-6xl">
              <span className="splash-step splash-step-two block">Ready for</span>
              <span className="splash-step splash-step-three block">the next battle</span>
            </h1>
            <button
              type="button"
              onClick={startExperience}
              className="focus-ring tekken-button splash-step splash-step-four mt-8 bg-[#E8334A] px-8 py-4 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_18px_38px_rgba(232,51,74,0.32)] transition hover:-translate-y-1 hover:bg-[#FF5267]"
            >
              Start Fight
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
