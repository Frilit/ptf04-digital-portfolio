import type { CodeSnippet } from "@/data/projects";

type CodeBlockProps = {
  snippet: CodeSnippet;
};

export function CodeBlock({ snippet }: CodeBlockProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-[#D5ECFF] bg-white shadow-[0_14px_34px_rgba(18,48,71,0.08)]">
      <div className="flex items-center justify-between gap-3 border-b border-[#D5ECFF] bg-[#F5FBFF] px-5 py-4">
        <h3 className="text-base font-black text-[#123047]">{snippet.title}</h3>
        <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-[#267FC0]">
          {snippet.language}
        </span>
      </div>
      <pre className="overflow-x-auto bg-[#102E45] p-5 text-sm leading-7 text-[#DDF1FF]">
        <code>{snippet.code}</code>
      </pre>
      <p className="px-5 py-4 text-sm leading-7 text-[#31536B]">{snippet.explanation}</p>
    </article>
  );
}
