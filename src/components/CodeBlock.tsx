import type { CodeSnippet } from "@/data/projects";

type CodeBlockProps = {
  snippet: CodeSnippet;
};

export function CodeBlock({ snippet }: CodeBlockProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-white/10 bg-[#090D15] shadow-[0_18px_42px_rgba(0,0,0,0.3)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#101723] px-5 py-4">
        <h3 className="text-base font-black uppercase text-white">{snippet.title}</h3>
        <span className="rounded-sm bg-[#E8334A] px-3 py-1 text-xs font-black uppercase tracking-[0.12em] text-white">
          {snippet.language}
        </span>
      </div>
      <pre className="overflow-x-auto bg-[#102E45] p-5 text-sm leading-7 text-[#DDF1FF]">
        <code>{snippet.code}</code>
      </pre>
      <p className="px-5 py-4 text-sm leading-7 text-[#C7D8EA]">{snippet.explanation}</p>
    </article>
  );
}
