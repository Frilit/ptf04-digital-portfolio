type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5BADEB]">{eyebrow}</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-[#123047] md:text-5xl">{title}</h1>
      {description ? <p className="mt-5 text-base leading-8 text-[#31536B] md:text-lg">{description}</p> : null}
    </div>
  );
}
