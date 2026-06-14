export default function Footer() {
  return (
    <footer className="border-t border-white/[.05] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
        <a href="#" className="text-lg font-black tracking-tight">
          <span className="text-white">NEMO</span><span className="text-accent">NE</span>
          <span className="text-slate-600 text-xs font-normal ml-2">INC.</span>
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
          {[
            ['nemoneai.com', 'https://nemoneai.com'],
            ['now.nemoneai.com', 'https://now.nemoneai.com'],
            ['msm.nemoneai.com', 'https://msm.nemoneai.com'],
            ['Contact', 'mailto:contact@namoneai.com'],
          ].map(([label, href]) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover:text-slate-300 transition-colors">
              {label}
            </a>
          ))}
        </div>
        <p className="text-[11px] text-slate-600">© 2026 네모네주식회사. All rights reserved.</p>
      </div>
    </footer>
  );
}
