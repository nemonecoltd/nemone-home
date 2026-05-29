
import React, { createContext, useContext, useState, useEffect } from 'react';

const DEFAULT_CONTENT = {
  hero: {
    titleTop: "AI가 만든 시간,",
    titleBottom: "제주가 채우는 삶",
    subtitle: "네모네는 기술의 혁신으로 인간에게 시간을 돌려주고, 그 시간을 본질적인 가치로 채우는 여정을 함께합니다.",
    bgImage: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp"
  },
  about: {
    mainTitle: "AI는 도구가 아닌, 인간성 회복의 시작입니다.",
    description: "우리는 LLM RAG와 AI Agent 기술로 새로운 가치를 창조하는 AI 혁신 기업입니다. 하지만 우리의 목적은 단순한 자동화가 아닙니다. AI가 만들어낸 여유로운 시간을 통해 인간이 본연의 삶을 회복하고, 진정한 가치를 탐구하도록 돕는 것이 우리의 미션입니다.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80&fm=webp"
  },
  warang: {
    title: "제주 와랑스튜디오",
    description: "디지털과 자연, 기술과 인간성의 조화를 실험하는 네모네의 거점입니다. 기술의 종착지는 결국 인간이며, 우리는 제주에서 그 답을 찾습니다.",
    quote: "제주 중산간의 바람과 빛 아래에서, 우리는 가장 인간다운 기술을 설계합니다.",
    mainImage: "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&fm=webp",
    subImage1: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=webp",
    subImage2: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80&fm=webp"
  },
  vision: {
    philosophy: "기술은 진보하고 있지만, 인간의 마음은 제자리일 수 있습니다. 네모네는 인간 본연의 존엄을 지키는 기술을 실현합니다."
  },
  aiKnowledge: `네모네 주식회사는 2024년 2월 14일에 설립되었습니다. 
대표 정환석은 IT 대기업에서 30년의 경력을 가진 전문가입니다. 
주요 사업부: 채널 사업부(AI 콘텐츠 자동화), F&B 사업부(글로벌 미식 탐험대), 여행 사업부(LLM RAG 기반 큐레이션), 제주 사업부(와랑스튜디오 운영), 기술 사업부(AI R&D 및 컨설팅). 
본사는 제주시 한경면 낙천리 1235번지에 위치한 와랑스튜디오입니다.`,
  apiEndpoint: "" // 여기에 귀하의 RAG 서버 주소를 입력할 수 있습니다.
};

interface ContentContextType {
  content: typeof DEFAULT_CONTENT;
  updateContent: (newContent: typeof DEFAULT_CONTENT) => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState(DEFAULT_CONTENT);

  useEffect(() => {
    const saved = localStorage.getItem('nemone_content');
    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse saved content", e);
      }
    }
  }, []);

  const updateContent = (newContent: typeof DEFAULT_CONTENT) => {
    setContent(newContent);
    localStorage.setItem('nemone_content', JSON.stringify(newContent));
  };

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  );
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) throw new Error("useContent must be used within ContentProvider");
  return context;
};
