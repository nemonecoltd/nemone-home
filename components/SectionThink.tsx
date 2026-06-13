const domains = [
  {
    tag: 'Taste',
    gradient: 'from-[#ff8c42] to-[#ffcb6b]',
    project: 'The Civilization of Taste',
    question: '음식은 인간을 어떻게 바꾸었는가?',
    channels: [{ label: 'YouTube', href: 'https://www.youtube.com/@MatMatch' }, { label: 'Podcast', href: 'https://open.spotify.com/show/033lW1LKn5eM7rMyAufqHt' }, { label: 'nemoneai.com', href: 'https://nemoneai.com' }],
  },
  {
    tag: 'Mind',
    gradient: 'from-[#a855f7] to-[#7c3aed]',
    project: 'Brainwashing for the Self',
    question: '생각은 인간을 어떻게 바꾸는가?',
    channels: [{ label: '브런치 @you1', href: 'https://brunch.co.kr/@you1' }, { label: 'nemoneai.com', href: 'https://nemoneai.com' }],
  },
  {
    tag: 'Place',
    gradient: 'from-[#10b981] to-[#34d399]',
    project: 'K-Life Project',
    question: '환경은 인간을 어떻게 바꾸는가?',
    channels: [{ label: '와랑스튜디오', href: '#lab' }, { label: '지금여기', href: 'https://now.nemoneai.com' }],
  },
  {
    tag: 'Future',
    gradient: 'from-[#00d4ff] to-[#0af5c8]',
    project: 'AI & Finance',
    question: '기술은 인간을 어떻게 바꾸는가?',
    channels: [{ label: 'MSM', href: 'https://msm.nemoneai.com' }, { label: 'nemoneai.com', href: 'https://nemoneai.com' }],
  },
];

export default function SectionThink({ id }: { id: string }) {
  return (
    <section id={id} className="border-b border-white/[.05] pt-6 pb-8 px-6 md:pt-8 md:pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">THINK</span>
          <h2 className="text-lg font-bold text-white">4가지 탐구 영역</h2>
          <div className="flex-1 border-t border-white/[.05]" />
          <span className="text-xs text-slate-600 hidden md:block">인간 변화의 4개 입구</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {domains.map(d => (
            <div key={d.tag} className="bg-white/[.025] border border-white/[.07] rounded-lg overflow-hidden">
              <div className={`h-0.5 bg-gradient-to-r ${d.gradient}`} />
              <div className="p-5 space-y-3">
                <span className={`text-[10px] font-black uppercase tracking-widest bg-gradient-to-r ${d.gradient} bg-clip-text text-transparent`}>
                  {d.tag}
                </span>
                <p className="text-xs font-bold text-white leading-snug">{d.project}</p>
                <p className="text-[11px] text-slate-500 leading-relaxed">{d.question}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {d.channels.map(ch => (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.href.startsWith('http') ? '_blank' : undefined}
                      rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[9px] bg-white/5 text-slate-500 px-1.5 py-0.5 rounded hover:text-slate-300 transition-colors"
                    >
                      {ch.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
