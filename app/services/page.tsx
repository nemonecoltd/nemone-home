import type { Metadata } from 'next'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: '서비스',
  description: '네모네가 운영 중인 서비스 — AIM, PACE, MSM, 네모네스토어, 와랑스튜디오를 한눈에 확인하세요.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: '네모네 서비스',
    description: 'AIM, PACE, MSM, 네모네스토어, 와랑스튜디오 — 네모네가 운영 중인 5개 서비스',
    url: 'https://home.nemoneai.com/services',
  },
}

export default function ServicesPage() {
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

      <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
        <div className="space-y-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">
            SERVICES
          </span>
          <h1 className="text-3xl font-black text-white leading-tight tracking-tight">
            운영 중인 서비스
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            콘텐츠(통찰) → AI(도구) → 와랑스튜디오(실증). 네모네가 지금 운영 중인 서비스 {services.length}개입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map(s => (
            <div
              key={s.id}
              className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[9px] font-mono text-accent/50">{s.domain}</span>
                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-sm bg-accent2/10 text-accent2 flex-shrink-0">
                  {s.status}
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-base font-black text-white">{s.name}</h2>
                  <span className="text-[9px] text-slate-600 uppercase tracking-wide border border-white/[.1] rounded px-1.5 py-0.5">
                    {s.axis}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{s.description}</p>
              </div>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block text-center text-sm font-bold px-4 py-2 rounded bg-accent text-jeju-900 hover:opacity-90 transition-opacity"
              >
                {s.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}
