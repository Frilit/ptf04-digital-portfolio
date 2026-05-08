"use client";

import { useEffect, useRef, useState } from "react";

type StickPosition = {
  x: number;
  y: number;
};

export function ArcadeJoystick() {
  const baseRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<StickPosition>({ x: 0, y: 0 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const base = baseRef.current;

      if (!base) {
        return;
      }

      const rect = base.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);
      const maxTravel = 22;

      if (distance === 0) {
        setPosition({ x: 0, y: 0 });
        return;
      }

      const travel = Math.min(distance / 14, maxTravel);
      setPosition({
        x: (deltaX / distance) * travel,
        y: (deltaY / distance) * travel,
      });
    }

    function resetStick() {
      setPosition({ x: 0, y: 0 });
    }

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerleave", resetStick);
    window.addEventListener("blur", resetStick);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetStick);
      window.removeEventListener("blur", resetStick);
    };
  }, []);

  return (
    <div className="arcade-panel relative mx-auto flex w-full max-w-sm flex-col items-center gap-7 rounded-[28px] border border-white/10 bg-black/45 p-7 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-3">
        <span className="rounded-full bg-[#E8334A] px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-white">
          Player 1
        </span>
        <span className="text-xs font-black uppercase tracking-[0.22em] text-[#74C7FF]">Portfolio Arcade</span>
      </div>

      <div
        ref={baseRef}
        className="relative h-40 w-40 rounded-full border border-[#74C7FF]/45 bg-[radial-gradient(circle_at_45%_38%,#314458_0_16%,#101723_17%_55%,#05070C_56%_100%)] shadow-[inset_0_12px_32px_rgba(116,199,255,0.2),0_0_44px_rgba(91,173,235,0.22)]"
        aria-label="Cursor-reactive arcade joystick"
      >
        <div className="absolute inset-7 rounded-full border border-white/10 bg-black/45 shadow-[inset_0_10px_22px_rgba(0,0,0,0.65)]" />
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75 ease-out"
          style={{
            transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px)) rotateX(${-position.y * 1.2}deg) rotateY(${position.x * 1.2}deg)`,
          }}
        >
          <div className="absolute left-1/2 top-1/2 h-20 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,#0B1018,#DDEBFF_48%,#111A27)] shadow-[0_18px_28px_rgba(0,0,0,0.45)]" />
          <div className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-full border border-white/25 bg-[radial-gradient(circle_at_34%_25%,#ffffff_0_10%,#FF6B7B_11%_32%,#E8334A_33%_72%,#7D0C1D_73%_100%)] shadow-[0_0_28px_rgba(232,51,74,0.7)]" />
        </div>
      </div>

      <div className="grid w-full grid-cols-4 gap-3">
        {["A", "B", "X", "Y"].map((button, index) => (
          <span
            key={button}
            className={`grid aspect-square place-items-center rounded-full text-sm font-black text-white shadow-[inset_0_-8px_14px_rgba(0,0,0,0.35),0_10px_25px_rgba(0,0,0,0.28)] ${
              index % 2 === 0 ? "bg-[#E8334A]" : "bg-[#1C9BFF]"
            }`}
          >
            {button}
          </span>
        ))}
      </div>
    </div>
  );
}
