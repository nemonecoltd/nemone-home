"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const links = [
  { label: 'Think', href: '#think' },
  { label: 'Build', href: '#build' },
  { label: 'Lab',   href: '#lab'   },
  { label: 'Media', href: '#media' },
  { label: 'News',  href: '#news'  },
];

export default function Nav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);
    if (clickCount.current >= 5) {
      clickCount.current = 0;
      router.push('/admin');
    } else {
      clickTimer.current = setTimeout(() => { clickCount.current = 0; }, 1000);
    }
  };

  return (
    <nav className={`sticky top-0 z-50 bg-jeju-900/95 backdrop-blur-md transition-all ${scrolled ? 'border-b border-white/[.07]' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between relative">
        <a href="#" onClick={handleLogoClick} className="text-lg font-black tracking-tight select-none">
          <span className="text-white">NEMO</span><span className="text-accent">NE</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.label} href={l.href} className="text-sm text-slate-400 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:contact@namoneai.com"
          className="hidden md:block bg-accent text-jeju-900 text-sm font-bold px-4 py-1.5 rounded hover:opacity-90 transition-opacity"
        >
          Contact
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-400 hover:text-white transition-colors text-xl w-8 h-8 flex items-center justify-center"
          aria-label="메뉴 열기"
        >
          {open ? '✕' : '☰'}
        </button>

        {open && (
          <>
            {/* 바깥 탭 시 메뉴 닫기 */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
            <div className="absolute top-full right-0 w-44 bg-jeju-800 border border-white/[.1] rounded-bl-lg shadow-2xl py-2 flex flex-col z-50">
              {links.map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-5 py-3 text-sm text-slate-300 hover:text-accent hover:bg-white/[.05] transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="border-t border-white/[.07] mt-1 pt-1 px-5 py-3">
                <a
                  href="mailto:contact@namoneai.com"
                  onClick={() => setOpen(false)}
                  className="text-sm font-bold text-accent"
                >
                  Contact
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
