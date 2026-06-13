const stacks = [
  {
    label: 'AI / Data',
    tags: ['RAG Architecture', 'LLM Orchestration', 'Hallucination Control', 'SSE Streaming', 'Async Crawling', 'Redis Cache'],
  },
  {
    label: 'Backend / Infra',
    tags: ['FastAPI (Python)', 'PostgreSQL', 'Nginx + PM2', 'Google Cloud', 'Supabase SSO', 'CI/CD'],
  },
  {
    label: 'Frontend / Platform',
    tags: ['Next.js 14 App Router', 'TypeScript', 'Tailwind CSS', 'Custom Analytics', 'SSG / ISR', 'Google OAuth'],
  },
];

export default function SectionTech({ id }: { id: string }) {
  return (
    <section id={id} className="border-b border-white/[.05] py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">TECH</span>
          <h2 className="text-lg font-bold text-white">기술 스택</h2>
          <div className="flex-1 border-t border-white/[.05]" />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
          {stacks.map(s => (
            <div key={s.label} className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-accent2">{s.label}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map(t => (
                  <span key={t} className="bg-white/5 text-slate-400 font-mono text-[9px] px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
