import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Code, Layers } from 'lucide-react';

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  link: string;
  appLink?: string;
  color: string;
  features: { title: string; desc: string }[];
}

export const matmatchData: ServiceData = {
  id: "matmatch",
  title: "네모네AIM",
  subtitle: "미디어 사업부",
  description: "당신의 시간을 알차게 채워줄 프리미엄 콘텐츠 큐레이션 플랫폼. 깊이 있는 에디토리얼과 트렌디한 라이프스타일 정보를 제공하며, 단순한 미디어를 넘어선 커머스 생태계를 구축합니다.",
  thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&fm=webp",
  techStack: ["Next.js 14", "React", "FastAPI", "Python", "PostgreSQL", "Google Gemini Pro"],
  link: "https://nemoneai.com",
  appLink: "https://play.google.com/store/apps/details?id=com.nemoneai.matmatch&pcampaignid=web_share",
  color: "from-emerald-400 to-teal-500",
  features: [
    { title: "프리미엄 에디토리얼", desc: "분야별 전문가가 엄선한 깊이 있는 아티클 제공" },
    { title: "미디어 커머스", desc: "콘텐츠와 자연스럽게 연결되는 커머스 경험" },
    { title: "SSG 기반 최적화", desc: "SEO 최적화 및 압도적인 페이지 로드 속도" }
  ]
};

export const nowhereData: ServiceData = {
  id: "nowhere",
  title: "지금 여기 (NOW HERE)",
  subtitle: "여행 사업부",
  description: "성수동, 홍대 등 로컬 핫플레이스와 팝업 스토어 정보를 실시간으로 수집하고, AI가 사용자의 취향과 상황에 맞게 최적의 여행 코스를 설계해주는 초개인화 가이드 서비스입니다.",
  thumbnail: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?q=80&w=800&fm=webp",
  techStack: ["Next.js 14", "TypeScript", "FastAPI", "PostgreSQL", "pgvector", "Gemini 1.5 Pro", "Vertex AI"],
  link: "https://now.nemoneai.com",
  appLink: "https://play.google.com/store/apps/details?id=com.nemoneai.now&pcampaignid=web_share",
  color: "from-emerald-400 to-teal-500",
  features: [
    { title: "실시간 RAG 검색", desc: "가장 최신의 로컬 데이터를 벡터화하여 정확한 AI 답변 제공" },
    { title: "초개인화 AI 코스", desc: "동반자, 시간, 목적에 맞는 완벽한 맞춤형 코스 생성" },
    { title: "자동 데이터 TTL", desc: "실시간성 유지를 위한 노후 데이터 자동 소멸 시스템" }
  ]
};

export const msmData: ServiceData = {
  id: "msm",
  title: "MSM (Market Signal Master)",
  subtitle: "금율 사업부",
  description: "국내 주식 시장의 수급·공매도·기술적 지표를 실시간으로 통합 분석하고, AI가 종목별 리포트를 자동 생성하는 퀀트 인텔리전스 플랫폼. 개인 투자자가 기관 수준의 데이터 인사이트를 얻을 수 있도록 설계되었습니다.",
  thumbnail: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&fm=webp",
  techStack: ["FastAPI", "Python", "React", "Redis", "PostgreSQL", "KRX API", "Naver Finance", "Google Gemini"],
  link: "https://msm.nemoneai.com",
  color: "from-yellow-400 to-amber-500",
  features: [
    { title: "수급 · 공매도 통합 분석", desc: "외국인·기관·개인 5일 누적 수급과 공매도 트렌드를 KRX·네이버 데이터 기반으로 실시간 집계" },
    { title: "몬테카를로 리스크 시뮬레이션", desc: "과거 가격 데이터 기반 확률적 시나리오 시뮬레이션으로 손익 구간 및 VaR 산출" },
    { title: "AI 종목 리포트 자동 생성", desc: "Gemini가 수급·기술지표·공매도 데이터를 종합해 투자 판단 리포트를 실시간으로 생성" }
  ]
};

const ServiceDetail: React.FC<{ data: ServiceData; onBack: () => void }> = ({ data, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="min-h-screen bg-[#0A1929] text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-[#0A1929]/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex-1 flex justify-start">
            <button 
              onClick={onBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-bold tracking-widest uppercase text-sm">Back to Home</span>
            </button>
          </div>
          
          <div className="hidden md:block flex-shrink-0 font-space tracking-[0.2em] font-bold text-xl text-white text-center">
            NEMONE<span className="text-[#00D9FF]">AI</span>
          </div>

          <div className="flex-1 flex justify-end items-center gap-3">
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
      </header>

      <main className="pt-32 pb-24 container mx-auto px-6 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-gradient-to-r ${data.color} text-white`}>
              {data.subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            {data.title}
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-3xl">
            {data.description}
          </p>
        </div>

        {/* Thumbnail */}
        <div className="w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden mb-20 relative group border border-white/10 shadow-2xl bg-[#111]">
          <img src={data.thumbnail} alt={data.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1929] via-transparent to-transparent opacity-80 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:right-8 flex flex-col sm:flex-row justify-end gap-4 items-end sm:items-center z-10">
            {data.appLink && (
              <a 
                href={data.appLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-emerald-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 hover:bg-emerald-600 transition-all shadow-xl text-sm md:text-base"
              >
                Android 앱 설치 <ExternalLink className="w-5 h-5" />
              </a>
            )}
            <a 
              href={data.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-[#0A1929] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl text-sm md:text-base"
            >
              웹 서비스 방문하기 <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-6 h-6 text-[#00D9FF]" />
              <h3 className="text-2xl font-bold">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {data.techStack.map(tech => (
                <span key={tech} className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-gray-300 hover:border-white/30 transition-colors cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Core Features */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Layers className="w-6 h-6 text-[#00D9FF]" />
              <h3 className="text-2xl font-bold">Core Features</h3>
            </div>
            <div className="space-y-4">
              {data.features.map((feature, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-lg mb-2 text-white">{feature.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceDetail;