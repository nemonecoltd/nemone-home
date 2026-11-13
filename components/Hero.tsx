const services = [
  {
    icon: '/service-icons/santa.png',
    name: '산타의 칭찬카드',
    desc: 'MBTI·혈액형으로 받는 나만의 칭찬카드 · 무료',
    badge: 'NEW',
    badgeClass: 'bg-accent/15 text-accent',
    href: 'https://santa.nemoneai.com',
  },
  {
    icon: '/service-icons/msm.svg',
    name: 'LII — Long-term Investment Intelligence',
    desc: '장기투자 AI 분석 · 코스피200 기업',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://msm.nemoneai.com',
  },
  {
    icon: '/service-icons/pace.svg',
    name: 'NEMONE PACE',
    desc: '당신의 다음 3시간을 설계합니다',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://now.nemoneai.com',
  },
  {
    icon: '/service-icons/aim.png',
    name: '네모네AIM',
    desc: '당신시간의 알찬소비, 당신 주변의 변화를 관찰합니다.',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://nemoneai.com',
  },
  {
    icon: '/service-icons/plants.svg',
    name: 'NEMONE PLANTS',
    desc: '식물도감 & 케어 가이드',
    badge: 'LIVE',
    badgeClass: 'bg-accent2/10 text-accent2',
    href: 'https://plants.nemoneai.com',
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
    <section id={id} className="relative border-b border-white/[.05] pt-8 pb-10 px-6 md:pt-12 md:pb-14 overflow-hidden">
      {/* 히어로가 순수 텍스트+dark bg라 "차갑다"는 피드백(2026-09-06) — 실사진을 배경에
          깔고 페이지 다크톤(jeju-900)과 자연스럽게 섞이도록 어두운 그라데이션을 얹었다. */}
      {/* 모바일은 세로로 길게 잘려서 기본(center) 크롭이 두 사람 사이 화분 쪽을 비추고 여성
          얼굴이 잘리는 문제(2026-09-06 피드백) — 모바일은 여성 얼굴 위치로 크롭 기준점을
          옮기고, 가로 폭이 넉넉한 데스크톱(md+)은 원래 중앙 기준 그대로 둔다. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-photo.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[70%_35%] md:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-jeju-900 via-jeju-900/85 to-jeju-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-jeju-900 via-transparent to-jeju-900/40" />
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Copy */}
        <div className="space-y-6">
          <p className="text-xs font-black uppercase tracking-widest text-accent">AI for Human Transformation</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
            당신의 시간은<br />
            <span className="text-accent">가치있습니다.</span>
          </h1>
          <blockquote className="border-l-2 border-accent pl-4 text-slate-400 text-sm">
            네모네는 AI를 통해 그 시간의 밀도를 높입니다.
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
              {s.icon.startsWith('/') ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={s.icon} alt="" className="w-9 h-9 rounded-md flex-shrink-0" aria-hidden="true" />
              ) : (
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
              )}
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
