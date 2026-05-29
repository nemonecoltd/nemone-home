
import React from 'react';
import { Cpu, Utensils, Plane, MapPin, TrendingUp, ChevronRight, ShoppingBag } from 'lucide-react';

const businessList = [
  {
    id: "msm",
    title: "금융 사업부",
    desc: "AI 기반 주식 수급·공매도·리스크 분석 플랫폼 MSM",
    icon: <TrendingUp className="w-8 h-8" />,
    color: "bg-yellow-50 text-yellow-600"
  },
  {
    id: "matmatch",
    title: "미디어 사업부",
    desc: "네모네AIM - 미디어 플랫폼",
    icon: <Utensils className="w-8 h-8" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: "nowhere",
    title: "로컬 사업부",
    desc: "초개인화 LLM RAG 기반 실시간 여행 큐레이션",
    icon: <Plane className="w-8 h-8" />,
    color: "bg-cyan-50 text-cyan-600"
  },
  {
    id: "channel",
    title: "채널 사업부",
    desc: "AI 자동화와 공공 빅데이터 기반 콘텐츠 유통 서비스",
    icon: <Cpu className="w-8 h-8" />,
    color: "bg-blue-50 text-blue-600",
    link: "https://www.youtube.com/@MatMatch"
  },
  {
    id: "jeju",
    title: "공간 사업부",
    desc: "와랑스튜디오 중심 워케이션 및 힐링 공간 운영",
    icon: <MapPin className="w-8 h-8" />,
    color: "bg-green-50 text-green-600",
    link: "https://naver.me/FDGH15XY"
  },
  {
    id: "commerce",
    title: "커머스 사업부",
    desc: "네모네 감각적인 소품 유통 공간",
    icon: <ShoppingBag className="w-8 h-8" />,
    color: "bg-pink-50 text-pink-600",
    link: "https://smartstore.naver.com/nemone24"
  }
];

interface BusinessAreasProps {
  onNavigate?: (id: string) => void;
}

const BusinessAreas: React.FC<BusinessAreasProps> = ({ onNavigate }) => {
  return (
    <section id="business" className="py-24 md:py-40 bg-[#0A1929] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h2 className="text-[#00D9FF] font-space tracking-[0.3em] uppercase mb-4">Core Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">AI 혁신이 만드는<br />6가지 라이프스타일 혁명</h3>
          <p className="text-gray-400 text-lg">
            우리의 비즈니스는 점진적이며 유기적으로 연결되어 있습니다.<br className="hidden md:block" />
            기술이 시간을 만들고, 그 시간이 새로운 가치로 순환됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessList.map((biz, idx) => (
            <div 
              key={idx}
              className="group relative p-10 bg-white/5 border border-white/10 rounded-3xl transition-all hover:bg-white hover:text-[#0A1929] hover:-translate-y-2 flex flex-col items-start"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-colors ${biz.color}`}>
                {biz.icon}
              </div>
              <h4 className="text-2xl font-bold mb-4">{biz.title}</h4>
              <p className="text-gray-400 group-hover:text-gray-600 transition-colors mb-8 flex-grow">
                {biz.desc}
              </p>
              <div className="flex flex-wrap gap-4 mt-auto">
                {biz.link && (
                  <a 
                    href={biz.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[10px] font-bold tracking-widest uppercase transition-all group-hover:translate-x-1 text-[#00D9FF] group-hover:text-blue-600 border border-[#00D9FF]/20 px-3 py-2 rounded-lg hover:bg-[#00D9FF] hover:text-white"
                  >
                    Visit Web <ChevronRight className="w-3 h-3 ml-1" />
                  </a>
                )}
                {(biz as any).appLink && (
                  <a 
                    href={(biz as any).appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[10px] font-bold tracking-widest uppercase transition-all group-hover:translate-x-1 text-emerald-500 group-hover:text-emerald-600 border border-emerald-500/20 px-3 py-2 rounded-lg hover:bg-emerald-500 hover:text-white"
                  >
                    Install App <ChevronRight className="w-3 h-3 ml-1" />
                  </a>
                )}
                {!biz.link && !(biz as any).appLink && (biz.id === 'matmatch' || biz.id === 'nowhere' || biz.id === 'msm') && onNavigate ? (
                  <button 
                    onClick={() => onNavigate(biz.id)}
                    className="flex items-center text-[10px] font-bold tracking-widest uppercase transition-all group-hover:translate-x-1 text-[#00D9FF] group-hover:text-blue-600 border border-[#00D9FF]/20 px-3 py-2 rounded-lg hover:bg-[#00D9FF] hover:text-white"
                  >
                    Learn More <ChevronRight className="w-3 h-3 ml-1" />
                  </button>
                ) : !biz.link && !(biz as any).appLink && (
                  <div className="flex items-center text-[10px] font-bold tracking-widest uppercase transition-all opacity-50 cursor-not-allowed">
                    Coming Soon
                  </div>
                )}
              </div>
            </div>
          ))}
          
          <div className="p-10 border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center text-center opacity-60">
            <p className="text-xl font-medium mb-2">And more to come...</p>
            <p className="text-sm text-gray-500">인간 본연의 가치를 위한 새로운 도전을 계속합니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas;
