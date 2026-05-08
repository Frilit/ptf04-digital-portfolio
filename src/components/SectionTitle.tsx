type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#74C7FF]">{eyebrow}</p>
      <h1 className="arcade-title mt-3 text-4xl font-black uppercase leading-tight text-white md:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-base leading-8 text-[#C7D8EA] md:text-lg">{description}</p> : null}
    </div>
  );
}
