const services = [
  {
    icon: '📈',
    name: 'MSM — Market Signal Master',
    desc: '주식 AI 분석 · 할루시네이션 차단',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://msm.nemoneai.com',
  },
  {
    icon: '🗺️',
    name: '지금여기 — NOW HERE',
    desc: '서울·제주 하이퍼-로컬 RAG',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://now.nemoneai.com',
  },
  {
    icon: '📰',
    name: '네모네AIM',
    desc: '자체 CMS · SSO · AI 미디어',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://nemoneai.com',
  },
  {
    icon: '🌿',
    name: '와랑스튜디오',
    desc: '제주 · NEMONE LAB',
    badge: 'LAB',
    badgeClass: 'bg-jeju-400/20 text-jeju-200',
    href: '#lab',
  },
];

export default function Hero({ id }: { id: string }) {
  return (
    <section id={id} className="border-b border-white/[.05] pt-8 pb-10 px-6 md:pt-12 md:pb-14">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <p className="text-xs font-black uppercase tracking-widest text-accent">AI for Human Transformation</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            인간의 변화를<br />
            연구하고 <span className="text-accent">만든다</span>
          </h1>
          <blockquote className="border-l-2 border-accent pl-4 text-slate-400 italic text-sm">
            "What changes people?"
          </blockquote>
          <p className="text-slate-400 text-sm leading-relaxed">
            네모네는 음식·생각·공간·기술이 인간을 어떻게 바꾸는지 탐구하고,<br className="hidden md:block" />
            그 통찰을 AI 시스템으로 구현하는 회사입니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#build" className="bg-accent text-jeju-900 text-sm font-bold px-5 py-2.5 rounded hover:opacity-90 transition-opacity">
              서비스 살펴보기
            </a>
            <a href="#lab" className="text-sm font-bold px-5 py-2.5 rounded border border-white/[.1] text-slate-300 hover:border-accent/40 hover:text-white transition-all">
              와랑스튜디오 →
            </a>
          </div>
        </div>

        {/* Right: Service pills */}
        <div className="flex flex-col gap-3">
          {services.map(s => (
            <a
              key={s.name}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-white/[.025] border border-white/[.07] rounded-lg px-5 py-4 hover:border-accent/25 transition-colors group"
            >
              <span className="text-2xl flex-shrink-0">{s.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white group-hover:text-accent transition-colors truncate">{s.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
              </div>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-sm flex-shrink-0 ${s.badgeClass}`}>{s.badge}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
