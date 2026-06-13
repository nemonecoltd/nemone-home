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
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
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
          href="mailto:futureleadet@gmail.com"
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
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 bg-jeju-900 z-40 flex flex-col items-center justify-center gap-8">
          <a href="#" className="text-2xl font-black">
            <span className="text-white">NEMO</span><span className="text-accent">NE</span>
          </a>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xl text-slate-200 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:futureleadet@gmail.com"
            className="mt-4 bg-accent text-jeju-900 font-bold px-6 py-2.5 rounded"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
