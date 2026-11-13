export default function Footer() {
  return (
    <footer className="border-t border-white/[.05] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
          {[
            ['네모네AIM', 'https://nemoneai.com'],
            ['네모네페이스', 'https://now.nemoneai.com'],
            ['네모네LII', 'https://msm.nemoneai.com'],
            ['네모네플랜트', 'https://plants.nemoneai.com'],
            ['산타의 칭찬카드', 'https://santa.nemoneai.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="hover:text-slate-300 transition-colors">
              {label}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-slate-600 text-center">© 2026 네모네 주식회사. All rights reserved.</p>
      </div>
    </footer>
  );
}
