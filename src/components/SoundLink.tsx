"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

type SoundLinkProps = ComponentProps<typeof Link>;

export function SoundLink({ href, onClick, ...props }: SoundLinkProps) {
  const pathname = usePathname();
  const targetPath = typeof href === "string" ? href : href.pathname ?? "";

  return (
    <Link
      href={href}
      onClick={(event) => {
        if (targetPath && targetPath !== pathname) {
          window.playDoryaSound?.();
        }

        onClick?.(event);
      }}
      {...props}
    />
  );
}
