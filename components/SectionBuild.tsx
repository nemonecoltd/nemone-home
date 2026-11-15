function Tag({ label }: { label: string }) {
  return <span className="bg-white/5 text-slate-500 font-mono text-[9px] px-1.5 py-0.5 rounded">{label}</span>;
}

const liiFeatures = [
  '5축 스코어링(성장성·수익성·밸류에이션·재무건전성) — 자기 역사 대비 정량 분석',
  '거장의 렌즈 4종(퀄리티·버핏·밸류·배당) — 규칙 기반 스크리닝',
  '코스피200 전체 기업 커버, 매일 AI 서술 자동 갱신',
  '기존 실시간 스캐너·기술적 분석(MACD·RSI·볼린저밴드)은 "현재" 탭으로 유지',
  'Redis 다계층 캐시 · AI 모델 이원화 (감성 분류/리포트 생성 분리)',
];

export default function SectionBuild({ id }: { id: string }) {
  return (
    <section id={id} className="border-b border-white/[.05] py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">BUILD</span>
          <h2 className="text-lg font-bold text-white">운영 중인 서비스</h2>
          <div className="flex-1 border-t border-white/[.05]" />
          <a href="/services/" className="text-xs text-slate-500 hover:text-accent transition-colors flex-shrink-0">전체보기 →</a>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-3">
          {/* LII — featured */}
          <div className="relative bg-jeju-500/15 border border-accent/20 rounded-lg p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 pointer-events-none opacity-20"
              style={{ background: 'radial-gradient(circle at top right, #00d4ff, transparent 70%)' }} />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] text-accent">msm.nemoneai.com</p>
                <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">LII</h3>
                <p className="text-sm text-slate-400">Long-term Investment Intelligence</p>
              </div>
              <p className="text-xs text-slate-400 italic">"기업의 과거보다, 미래를 봅니다"</p>
              <ul className="space-y-2">
                {liiFeatures.map(f => (
                  <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="text-accent mt-0.5 flex-shrink-0">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['FastAPI', 'pandas-ta', 'Gemini Pro', 'Redis', 'DART API', 'SSE', 'PostgreSQL', 'Next.js 14'].map(s => <Tag key={s} label={s} />)}
              </div>
              <a href="https://msm.nemoneai.com" target="_blank" rel="noopener noreferrer"
                className="inline-block text-xs font-bold text-accent hover:underline">
                → msm.nemoneai.com 바로가기
              </a>
            </div>
          </div>

          {/* NEMONE PACE */}
          <div className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] text-accent">now.nemoneai.com</p>
              <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
            </div>
            <div>
              <h3 className="text-base font-black text-white">NEMONE PACE</h3>
              <p className="text-xs text-slate-400">당신의 다음 3시간을 설계합니다</p>
            </div>
            <ul className="space-y-1.5">
              {['Google 에코시스템 RAG', '팝업·공연·제주 행사 실시간 수집', 'AI 코스 자동 생성', '한/영 지원'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-accent2 flex-shrink-0">▸</span><span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {['RAG', 'Google Places API', 'Next.js', 'Supabase'].map(s => <Tag key={s} label={s} />)}
            </div>
            <a href="https://now.nemoneai.com" target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold text-accent hover:underline">→ now.nemoneai.com</a>
          </div>

          {/* 네모네AIM */}
          <div className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] text-accent">nemoneai.com</p>
              <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
            </div>
            <div>
              <h3 className="text-base font-black text-white">네모네AIM</h3>
              <p className="text-xs text-slate-400">당신시간의 알찬소비, 당신 주변의 변화를 관찰합니다.</p>
            </div>
            <ul className="space-y-1.5">
              {['Next.js 14 SSG/ISR + FastAPI + PostgreSQL', 'Supabase 통합 SSO', '자체 AnalyticsTracker (5초 체류 기준)', 'GCS 이미지 파이프라인'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-accent2 flex-shrink-0">▸</span><span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js 14', 'TypeScript', 'FastAPI', 'GCS', 'PM2'].map(s => <Tag key={s} label={s} />)}
            </div>
            <a href="https://nemoneai.com" target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold text-accent hover:underline">→ nemoneai.com</a>
          </div>
        </div>

        {/* 최근 서비스 — 산타의 칭찬카드·NEMONE PLANTS (2026-11-13 추가) */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-3 mt-3">
          <div className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] text-accent">santa.nemoneai.com</p>
              <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
            </div>
            <div>
              <h3 className="text-base font-black text-white">산타의 칭찬카드</h3>
              <p className="text-xs text-slate-400">이름과 MBTI·혈액형으로 받는 나만의 칭찬카드</p>
            </div>
            <ul className="space-y-1.5">
              {['MBTI·혈액형 맞춤 칭찬카드 무료 발급', '카드 이미지·영상 저장, 친구에게 선물 링크 전달', '산타의 수다 연재', '로그인 없이 시작 · 통합 계정으로 보관함'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-accent2 flex-shrink-0">▸</span><span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js', 'FastAPI', 'PostgreSQL', 'Gemini'].map(s => <Tag key={s} label={s} />)}
            </div>
            <a href="https://santa.nemoneai.com" target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold text-accent hover:underline">→ santa.nemoneai.com</a>
          </div>
          <div className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] text-accent">plants.nemoneai.com</p>
              <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
            </div>
            <div>
              <h3 className="text-base font-black text-white">NEMONE PLANTS</h3>
              <p className="text-xs text-slate-400">식물도감 & 케어 가이드</p>
            </div>
            <ul className="space-y-1.5">
              {['식물도감 · 케어 가이드 · 식물 매거진', '사진으로 식물 상태를 살펴 주는 AI 진단'].map(f => (
                <li key={f} className="flex items-start gap-2 text-xs text-slate-400">
                  <span className="text-accent2 flex-shrink-0">▸</span><span>{f}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-1.5">
              {['Next.js', 'FastAPI', 'Gemini', 'Capacitor'].map(s => <Tag key={s} label={s} />)}
            </div>
            <a href="https://plants.nemoneai.com" target="_blank" rel="noopener noreferrer"
              className="text-xs font-bold text-accent hover:underline">→ plants.nemoneai.com</a>
          </div>
        </div>
      </div>
    </section>
  );
}
