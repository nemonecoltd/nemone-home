import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '브랜드 이야기',
  description:
    '네모네는 사람들의 시간의 가치를 높이는 걸 돕는 회사입니다. 미디어처럼 보이지만 AI가 엔진인 회사 — 존재이유, 정체성, 브랜드 구조와 서비스 포트폴리오를 소개합니다.',
  alternates: { canonical: '/brand' },
  openGraph: {
    title: '네모네 브랜드 이야기',
    description: '당신의 시간은 가치있다. 네모네는 AI를 통해 그 시간의 밀도를 높입니다.',
    url: 'https://home.nemoneai.com/brand',
  },
}

const axes = [
  {
    tag: 'Taste',
    gradient: 'from-[#ff8c42] to-[#ffcb6b]',
    project: 'The Civilization of Taste',
    question: '음식은 인간을 어떻게 바꾸는가?',
    role: '이해',
    href: 'https://nemoneai.com',
  },
  {
    tag: 'Mind',
    gradient: 'from-[#a855f7] to-[#7c3aed]',
    project: 'Brainwashing for the Self',
    question: '생각은 인간을 어떻게 바꾸는가?',
    role: '이해',
    href: 'https://nemoneai.com',
  },
  {
    tag: 'Place',
    gradient: 'from-[#10b981] to-[#34d399]',
    project: 'K-Life Project',
    question: '환경은 인간을 어떻게 바꾸는가?',
    role: '이해',
    href: 'https://now.nemoneai.com',
  },
  {
    tag: 'Future',
    gradient: 'from-jeju-400 to-jeju-200',
    project: 'AI & Finance',
    question: '기술은 인간을 어떻게 바꾸는가?',
    role: '이해',
    href: 'https://msm.nemoneai.com',
  },
  {
    tag: 'Lab',
    gradient: 'from-jeju-300 to-white',
    project: 'Warang Studio',
    question: '위 네 가지를 현실에서 어떻게 증명하는가?',
    role: '증명',
    href: 'https://map.naver.com/p/entry/place/2065456826',
  },
];

const portfolio = [
  {
    name: '네모네AIM',
    domain: 'nemoneai.com',
    role: '에디토리얼 미디어. Taste/Mind/Place/Future 콘텐츠 발행 허브',
    status: 'LIVE',
    href: 'https://nemoneai.com',
  },
  {
    name: 'PACE',
    domain: 'now.nemoneai.com',
    role: '시간 설계 AI. "3시간 코스"는 시그니처 포맷',
    status: 'LIVE',
    href: 'https://now.nemoneai.com',
  },
  {
    name: 'MSM',
    domain: 'msm.nemoneai.com',
    role: '국내 주식 AI 분석, 할루시네이션 차단 RAG',
    status: 'LIVE',
    href: 'https://msm.nemoneai.com',
  },
  {
    name: '와랑스튜디오',
    domain: '제주',
    role: '제주 소재 물리적 실험실 (Living Lab)',
    status: 'LIVE',
    href: 'https://map.naver.com/p/entry/place/2065456826',
  },
  {
    name: '네모네스토어',
    domain: '스마트스토어',
    role: 'AIM 콘텐츠 → 구매 전환 파이프라인의 종착점',
    status: 'LIVE',
    href: 'https://smartstore.naver.com/nemone24',
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">
      {children}
    </span>
  );
}

export default function BrandPage() {
  return (
    <>
      <nav className="sticky top-0 z-50 bg-jeju-900/95 backdrop-blur-md border-b border-white/[.07]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-lg font-black tracking-tight select-none">
            <span className="text-white">NEMO</span><span className="text-accent">NE</span>
          </a>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">← 홈으로</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-20">
        {/* WHY */}
        <section className="space-y-6">
          <Label>WHY</Label>
          <h1 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
            당신의 시간은<br />가치있습니다.
          </h1>
          <p className="text-slate-300 leading-relaxed">
            네모네는 AI를 통해 그 시간의 밀도를 높입니다.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            "미디어 회사냐 AI 회사냐"는 잘못된 질문이었습니다. 진짜 축은 이렇습니다 —
            네모네는 사람들의 시간의 가치를 높이는 걸 돕는 회사이고, 미디어와 AI는 둘 다 그 수단입니다.
            콘텐츠(Taste/Mind/Place/Future)는 "시간을 무엇으로 채울지"에 대한 통찰이고,
            AI 제품(PACE, MSM)은 그 통찰을 실제로 사용자의 시간에 적용하는 실행 엔진입니다.
          </p>
        </section>

        {/* WHAT WE ARE */}
        <section className="space-y-6">
          <Label>WHAT WE ARE</Label>
          <h2 className="text-2xl font-black text-white leading-tight">
            미디어처럼 보이지만,<br />AI가 엔진인 회사
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            겉으로 보이는 표면은 <strong className="text-slate-200 font-bold">미디어</strong>입니다 —
            콘텐츠 채널과 에디토리얼 브랜드로 사용자와 접점을 만듭니다.
            하지만 그 표면을 가능하게 하는 인프라와 실제 제품(PACE, MSM)의 엔진은{' '}
            <strong className="text-slate-200 font-bold">AI</strong>입니다.
          </p>
          <blockquote className="border-l-2 border-accent pl-4 text-slate-400 italic text-sm">
            "AI for Human Transformation"
          </blockquote>
        </section>

        {/* STRUCTURE */}
        <section className="space-y-6">
          <Label>STRUCTURE</Label>
          <h2 className="text-2xl font-black text-white leading-tight">
            Taste · Mind · Place · Future · Lab
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            콘텐츠(통찰) → AI(도구) → 와랑스튜디오(실증). 와랑스튜디오는 Place의 하위 개념이 아니라
            독립된 다섯 번째 축입니다. 앞의 넷이 "이해"라면, Lab은 "증명"입니다.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {axes.map(a => (
              <a
                key={a.tag}
                href={a.href}
                target={a.href.startsWith('http') ? '_blank' : undefined}
                rel={a.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="bg-white/[.025] border border-white/[.07] rounded-lg overflow-hidden hover:border-accent/25 transition-colors"
              >
                <div className={`h-0.5 bg-gradient-to-r ${a.gradient}`} />
                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-white">{a.tag}</span>
                    <span className="text-[9px] text-slate-600 uppercase tracking-wide">{a.role}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-200">{a.project}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{a.question}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PORTFOLIO */}
        <section className="space-y-6">
          <Label>PORTFOLIO</Label>
          <h2 className="text-2xl font-black text-white leading-tight">서비스 포트폴리오</h2>
          <div className="divide-y divide-white/[.05] border border-white/[.07] rounded-lg overflow-hidden">
            {portfolio.map(p => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-white/[.02] transition-colors"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">{p.name}</p>
                    <span className="text-[9px] font-mono text-accent/50">{p.domain}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{p.role}</p>
                </div>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-accent2/10 text-accent2 flex-shrink-0">
                  {p.status}
                </span>
              </a>
            ))}
          </div>

          <div className="bg-white/[.02] border border-white/[.05] rounded-lg p-5 space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">왜 "PACE"인가</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              "지금여기"는 SEO·해외 확장성·서비스 가치 전달력이 모두 약해 이름을 교체했습니다.
              서비스 브랜드에는 숫자를 넣지 않았습니다 — "3시간"은 브랜드가 아니라 시그니처 포맷이자
              슬로건("당신의 다음 3시간을 설계합니다")의 자리에만 남겨, 6시간·당일 코스로도
              자유롭게 확장할 수 있게 했습니다. "PACE"는 제주 브랜딩 언어(속도를 낮춘다, 여백)와
              직접 연결되면서도, 숫자나 장소 어디에도 갇히지 않는 이름입니다.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
