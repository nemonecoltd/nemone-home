const channels = [
  {
    icon: '▶',
    platform: 'YouTube',
    name: '글로벌미식탐험대',
    desc: 'MatMatch 채널 · 미식 문명사 영상',
    href: 'https://www.youtube.com/@MatMatch',
    color: 'text-red-400',
  },
  {
    icon: '♪',
    platform: 'Podcast · Apple',
    name: '네모네AIM',
    desc: 'Taste 시리즈 · 음식과 문명 이야기',
    href: 'https://podcasts.apple.com/kr/channel/%EB%84%A4%EB%AA%A8%EB%84%A4aim/id6753140870',
    color: 'text-green-400',
  },
  {
    icon: '◉',
    platform: 'Media Site',
    name: 'nemoneai.com',
    desc: 'Taste·Culture·Life·Tech 롱폼 아티클',
    href: 'https://nemoneai.com',
    color: 'text-accent',
  },
  {
    icon: '✍',
    platform: '브런치',
    name: '애들빙자여행러',
    desc: 'Mind · K-Life · 생각과 삶의 에세이',
    href: 'https://brunch.co.kr/@you1',
    color: 'text-yellow-400',
  },
];

export default function SectionMedia({ id }: { id: string }) {
  return (
    <section id={id} className="py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">MEDIA</span>
          <h2 className="text-lg font-bold text-white">콘텐츠 채널</h2>
          <div className="flex-1 border-t border-white/[.05]" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {channels.map(c => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[.025] border border-white/[.07] rounded-lg p-5 space-y-3 hover:border-accent/25 transition-colors group"
            >
              <div className={`text-2xl ${c.color}`}>{c.icon}</div>
              <div>
                <p className="text-[10px] text-slate-600 uppercase tracking-widest">{c.platform}</p>
                <p className="text-sm font-bold text-white group-hover:text-accent transition-colors mt-0.5">{c.name}</p>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{c.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
