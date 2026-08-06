export default function SectionBrandTeaser({ id }: { id: string }) {
  return (
    <section id={id} className="border-t border-white/[.05] py-12 px-6 md:py-16">
      <div className="max-w-3xl mx-auto text-center space-y-5">
        <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">
          BRAND
        </span>
        <p className="text-lg md:text-xl font-bold text-white leading-relaxed">
          우리는 사람이 무엇에 의해 변화하는지 연구합니다.<br className="hidden md:block" />
          그 답을 AIM, PACE, 와랑스튜디오로 만듭니다.
        </p>
        <a
          href="/brand/"
          className="inline-block text-sm font-bold px-5 py-2.5 rounded border border-white/[.1] text-slate-300 hover:border-accent/40 hover:text-white transition-all"
        >
          우리 이야기 더 보기 →
        </a>
      </div>
    </section>
  );
}
