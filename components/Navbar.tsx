
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onLogoClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0A1929]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={(e) => {
            e.preventDefault();
            onLogoClick?.();
          }} 
          className="flex items-center space-x-2 cursor-pointer group"
        >
          <div className="w-8 h-8 border-2 border-[#00D9FF] flex items-center justify-center transform rotate-45 group-hover:scale-110 transition-transform">
             <div className="w-4 h-4 bg-[#E8DCC4] transform rotate-45"></div>
          </div>
          <span className={`font-space font-bold text-2xl tracking-tighter text-white`}>
            NEMONE
          </span>
        </div>
        
        <div className="hidden md:flex space-x-12">
          {['About', 'Business', 'Warang', 'Vision'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#00D9FF] text-white/80`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://msm.nemoneai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-white border border-zinc-200 text-zinc-900 text-[10px] font-black italic rounded-full hover:bg-zinc-100 transition-all shadow-lg tracking-tighter"
          >
            MSM
          </a>
          <a
            href="https://nemoneai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-[#0c0c0c] border border-[#D4AF37] text-[#D4AF37] text-[10px] font-black italic rounded-full hover:bg-[#D4AF37] hover:text-[#0c0c0c] transition-all shadow-lg tracking-tighter"
          >
            네모네AIM
          </a>
          <a
            href="https://now.nemoneai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 bg-emerald-500 border border-emerald-400 text-white text-[10px] font-black italic rounded-full hover:bg-emerald-600 transition-all shadow-lg tracking-tighter"
          >
            NOWHERE
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
