import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Newspaper, Loader2 } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const Vision: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 5;

  const fetchNews = async (page: number) => {
    setIsLoading(true);
    try {
      const skip = (page - 1) * limit;
      const API_URL = import.meta.env.DEV ? 'http://localhost:8080' : 'https://nemoneai.com/api';
      const res = await fetch(`${API_URL}/news?skip=${skip}&limit=${limit}`);
      if (res.ok) {
        const data = await res.json();
        setNews(data.news);
        setTotal(data.total);
      }
    } catch (e) {
      console.error("Failed to fetch news", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(total / limit);

  // URL을 감지하여 a 태그로 렌더링하는 함수
  const renderContentWithLinks = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#00D9FF] hover:text-blue-400 underline decoration-1 underline-offset-4 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <section id="vision" className="py-24 md:py-40 bg-[#0A1929] relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#E8DCC4]/10 blur-[150px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-[#00D9FF] font-space tracking-[0.4em] uppercase mb-10">Our Vision</h2>
          <div className="space-y-4">
            <h3 className="text-6xl md:text-9xl font-bold text-white/10 select-none leading-none">
              HUMAN FIRST
            </h3>
            <h3 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              AI SECOND
            </h3>
          </div>
          <p className="mt-12 text-[#E8DCC4] text-xl md:text-2xl font-light max-w-3xl">
            기술은 진보하고 있지만, 인간의 마음은 제자리일 수 있습니다. 네모네는 인간 본연의 존엄을 지키는 기술을 실현합니다.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
            <div className="bg-white/5 px-8 md:px-12 py-8 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#00D9FF]/20 rounded-2xl flex items-center justify-center border border-[#00D9FF]/30">
                  <Newspaper className="text-[#00D9FF] w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl tracking-tight uppercase">Nemone News</h4>
                  <p className="text-[#00D9FF] text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Company Updates</p>
                </div>
              </div>
              <div className="text-white/20 text-xs font-mono">
                TOTAL: {total}
              </div>
            </div>

            <div className="p-4 md:p-8 min-h-[400px]">
              {isLoading ? (
                <div className="h-[400px] flex items-center justify-center">
                  <Loader2 className="w-8 h-8 text-[#00D9FF] animate-spin" />
                </div>
              ) : news.length > 0 ? (
                <div className="space-y-3">
                  {news.map((item) => (
                    <div 
                      key={item.id} 
                      className={`transition-all duration-300 rounded-2xl border ${expandedId === item.id ? 'bg-white/10 border-white/20 shadow-lg' : 'bg-white/5 border-white/5 hover:bg-white/8'}`}
                    >
                      <button 
                        onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <span className="text-[10px] font-mono text-[#00D9FF] opacity-50 flex-shrink-0">
                            {item.created_at ? item.created_at.substring(2, 10).replace(/-/g, '.') : ''}
                          </span>
                          <span className="text-white font-medium truncate md:text-lg">{item.title}</span>
                        </div>
                        {expandedId === item.id ? <ChevronUp className="text-[#00D9FF] w-5 h-5 flex-shrink-0" /> : <ChevronDown className="text-white/20 w-5 h-5 flex-shrink-0" />}
                      </button>
                      
                      {expandedId === item.id && (
                        <div className="px-6 pb-6 pt-2 transition-all duration-500">
                          <div className="h-px bg-white/10 mb-6"></div>
                          <p className="text-[#E8DCC4] leading-relaxed whitespace-pre-wrap md:text-lg font-light">
                            {renderContentWithLinks(item.content)}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[400px] flex flex-col items-center justify-center text-white/20">
                  <p className="italic">등록된 소식이 없습니다.</p>
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="bg-white/5 px-8 py-6 border-t border-white/10 flex items-center justify-center space-x-6">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 text-white/40 hover:text-[#00D9FF] disabled:opacity-10 transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="flex items-center space-x-3">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${currentPage === i + 1 ? 'bg-[#00D9FF] text-[#0A1929] shadow-[0_0_15px_rgba(0,217,255,0.5)]' : 'text-white/40 hover:text-white hover:bg-white/10'}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 text-white/40 hover:text-[#00D9FF] disabled:opacity-10 transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
