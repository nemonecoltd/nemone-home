
import React from 'react';
import { useContent } from '../context/ContentContext';

const Hero: React.FC = () => {
  const { content } = useContent();
  
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#0A1929]">
      {/* Abstract AI Background Layer */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-[#0A1929] to-[#0A1929]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D9FF]/20 blur-[120px] rounded-full animate-pulse"></div>
      </div>
      
      {/* Dynamic Jeju Nature Layer */}
      <div 
        className="absolute inset-0 z-0 opacity-30 mix-blend-overlay scale-110 transition-all duration-1000"
        style={{
          backgroundImage: `url('${content.hero.bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className="relative z-10 text-center px-6">
        <div className="inline-block mb-6 px-4 py-1 border border-[#00D9FF]/40 rounded-full">
          <span className="text-[#00D9FF] text-xs font-space tracking-[0.2em] uppercase">Technology Meets Humanity</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-extrabold text-white mb-8 tracking-tighter leading-tight">
          {content.hero.titleTop}<br />
          <span className="text-gradient">{content.hero.titleBottom}</span>
        </h1>
        
        <p className="text-[#E8DCC4] text-lg md:text-2xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
          {content.hero.subtitle}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="#business" className="w-full md:w-auto px-10 py-4 bg-[#00D9FF] text-[#0A1929] rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(0,217,255,0.4)] hover:-translate-y-1">
            사업 영역 둘러보기
          </a>
          <a href="#about" className="w-full md:w-auto px-10 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold transition-all hover:bg-white hover:text-[#0A1929]">
            브랜드 철학
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/40 text-[10px] tracking-widest uppercase mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
