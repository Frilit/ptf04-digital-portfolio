import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex rounded-full border border-[#BFE4FF] bg-[#F5FBFF] px-3 py-1.5 text-xs font-bold text-[#267FC0]">
      {children}
    </span>
  );
}
