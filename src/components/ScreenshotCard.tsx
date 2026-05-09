import Image from "next/image";
import type { Screenshot } from "@/data/projects";

type ScreenshotCardProps = {
  screenshot: Screenshot;
};

export function ScreenshotCard({ screenshot }: ScreenshotCardProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-white/10 bg-[#090D15] shadow-[0_18px_42px_rgba(0,0,0,0.3)]">
      <div className="relative aspect-[16/10] bg-[#101723]">
        <Image
          src={screenshot.image}
          alt={screenshot.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black uppercase text-white">{screenshot.title}</h3>
        <p className="mt-2 text-sm leading-7 text-[#C7D8EA]">{screenshot.description}</p>
      </div>
    </article>
  );
}
