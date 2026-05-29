
import React from 'react';
import { Cpu } from 'lucide-react';
import { useContent } from '../context/ContentContext';

const About: React.FC = () => {
  const { content } = useContent();

  return (
    <section id="about" className="py-24 md:py-40 bg-[#0A1929] px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left: AI Visual */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-square bg-gradient-to-br from-[#00D9FF]/20 to-blue-600/20 rounded-[3rem] overflow-hidden border border-white/10 relative">
              <div 
                className="absolute inset-0 opacity-40 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-700"
                style={{
                  backgroundImage: `url('${content.about.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute inset-0 border-2 border-[#00D9FF]/20 rounded-full animate-ping"
                      style={{
                        animationDuration: `${4 + i}s`,
                        animationDelay: `${i * 0.7}s`
                      }}
                    />
                  ))}
                  <div className="absolute inset-0 flex items-center justify-center bg-[#0A1929]/40 backdrop-blur-sm rounded-full border border-white/10 shadow-[0_0_50px_rgba(0,217,255,0.2)]">
                    <Cpu className="w-24 h-24 text-[#00D9FF] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 md:order-2">
            <div className="text-[#00D9FF] text-sm font-space tracking-[0.3em] uppercase mb-8">
              About NEMONE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight tracking-tighter">
              AI는 도구가 아닌,<br />인간성 회복의 시작입니다.
            </h2>
            <div className="space-y-8 text-[#E8DCC4] text-lg md:text-xl font-light leading-relaxed">
              <p className="whitespace-pre-wrap">
                우리는 LLM RAG와 AI Agent 기술로 새로운 가치를 창조하는 AI 혁신 기업입니다. 하지만 우리의 목적은 단순한 자동화가 아닙니다. AI가 만들어낸 여유로운 시간을 통해 인간이 본연의 삶을 회복하고, 진정한 가치를 탐구하도록 돕는 것이 우리의 미션입니다.
              </p>
              <p className="text-white italic border-l-4 border-[#00D9FF] pl-6 py-2 opacity-80">
                "대부분의 AI 기업이 효율과 속도를 말할 때, 네모네는 '의미'와 '경험'을 이야기합니다."
              </p>
            </div>

            {/* Company Info */}
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="text-[#00D9FF]/60 text-xs font-space tracking-widest uppercase mb-3 group-hover:text-[#00D9FF] transition-colors">Expertise Years</div>
                <div className="text-2xl md:text-4xl font-bold text-white">20+</div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group">
                <div className="text-[#00D9FF]/60 text-xs font-space tracking-widest uppercase mb-3 group-hover:text-[#00D9FF] transition-colors">Established 2024</div>
                <div className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tighter">Feb 14</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
