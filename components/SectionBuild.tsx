function Tag({ label }: { label: string }) {
  return <span className="bg-white/5 text-slate-500 font-mono text-[9px] px-1.5 py-0.5 rounded">{label}</span>;
}

const msmFeatures = [
  '기술적 분석(MACD·RSI·볼린저밴드·일목균형표) + 퀀트(몬테카를로·VaR) 백엔드 직접 연산',
  '삼중 교차검증 실시간 시세 — 할루시네이션 원천 차단',
  'SSE 실시간 스트리밍 리포트 출력',
  'Redis 다계층 캐시 · AI 모델 이원화 (감성 분류/리포트 생성 분리)',
  'PRO: 4-팩터 스코어링으로 TOP 10 종목 자동 추천',
];

export default function SectionBuild({ id }: { id: string }) {
  return (
    <section id={id} className="border-b border-white/[.05] py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">BUILD</span>
          <h2 className="text-lg font-bold text-white">운영 중인 서비스</h2>
          <div className="flex-1 border-t border-white/[.05]" />
        </div>

        <div className="flex flex-col md:grid md:grid-cols-[2fr_1fr_1fr] gap-3">
          {/* MSM — featured */}
          <div className="relative bg-jeju-500/15 border border-accent/20 rounded-lg p-6 overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 pointer-events-none opacity-20"
              style={{ background: 'radial-gradient(circle at top right, #00d4ff, transparent 70%)' }} />
            <div className="relative space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[11px] text-accent">msm.nemoneai.com</p>
                <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">MSM</h3>
                <p className="text-sm text-slate-400">Market Signal Master</p>
              </div>
              <p className="text-xs text-slate-400 italic">"계산은 시스템, 해석은 AI — 숫자가 틀리지 않는 분석"</p>
              <ul className="space-y-2">
                {msmFeatures.map(f => (
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

          {/* 지금여기 */}
          <div className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-4">
            <div className="flex items-center justify-between">
              <p className="font-mono text-[11px] text-accent">now.nemoneai.com</p>
              <span className="bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm">LIVE</span>
            </div>
            <div>
              <h3 className="text-base font-black text-white">지금여기</h3>
              <p className="text-xs text-slate-400">NOW HERE</p>
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
              <p className="text-xs text-slate-400">AI Media Platform</p>
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
      </div>
    </section>
  );
}
