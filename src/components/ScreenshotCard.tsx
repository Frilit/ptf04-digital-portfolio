import Image from "next/image";
import type { Screenshot } from "@/data/projects";

type ScreenshotCardProps = {
  screenshot: Screenshot;
};

export function ScreenshotCard({ screenshot }: ScreenshotCardProps) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-[#D5ECFF] bg-white shadow-[0_16px_35px_rgba(18,48,71,0.08)]">
      <div className="relative aspect-[16/10] bg-[#EAF7FF]">
        <Image
          src={screenshot.image}
          alt={`${screenshot.title} placeholder`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black text-[#123047]">{screenshot.title}</h3>
        <p className="mt-2 text-sm leading-7 text-[#31536B]">{screenshot.description}</p>
      </div>
    </article>
  );
}
