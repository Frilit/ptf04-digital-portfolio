import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-sm border border-[#74C7FF]/40 bg-[#102033] px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#74C7FF]">
      {children}
    </span>
  );
}
