export default function SectionWarang({ id }: { id: string }) {
  return (
    <section id={id} className="border-b border-white/[.05] py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">LAB</span>
          <h2 className="text-lg font-bold text-white">와랑스튜디오</h2>
          <div className="flex-1 border-t border-white/[.05]" />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6">
          {/* Left */}
          <div className="space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500">말이 아닌 실험 · NEMONE LAB</p>
            <h3 className="text-2xl font-black text-white leading-tight">
              이론을 현실에서<br />검증하는 공간
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              네모네의 모든 철학 — AI, 삶의 방식, 음식, 생산성, 공간 설계 —
              을 실제로 살아보며 실험하는 플래그십 랩입니다.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[['🤖', 'AI 실험'], ['🏠', '공간 연구'], ['🍽️', '미식 탐구'], ['📹', '콘텐츠 제작']].map(([icon, label]) => (
                <div key={label} className="flex items-center gap-2 bg-white/[.02] border border-white/[.05] rounded px-3 py-2">
                  <span className="text-base">{icon}</span>
                  <span className="text-xs text-slate-400 font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Location card */}
          <div className="bg-jeju-600/30 border border-accent/15 rounded-lg overflow-hidden flex flex-col">
            {/* Tropical background image */}
            <div className="relative h-52 overflow-hidden flex-shrink-0" style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/35" />
              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <p className="text-white font-black text-xl tracking-tight drop-shadow-lg">와랑스튜디오</p>
                <p className="text-white/80 text-xs font-medium drop-shadow">제주 · NEMONE LAB</p>
              </div>
              <a
                href="https://map.naver.com/p/entry/place/2065456826"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-accent/30 transition-colors"
              >
                지도에서 보기 →
              </a>
            </div>

            {/* Info */}
            <div className="p-4 space-y-3 flex-1">
              <div className="flex items-start gap-2 text-xs text-slate-400">
                <span className="text-accent mt-0.5 flex-shrink-0">📍</span>
                <span>제주특별자치도 · NEMONE LAB</span>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/[.05]">
                {[['Jeju', '거점'], ['Lab', '역할'], ['Open', '상태']].map(([val, sub]) => (
                  <div key={val} className="text-center py-1">
                    <p className="text-sm font-black text-accent">{val}</p>
                    <p className="text-[10px] text-slate-600 mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
