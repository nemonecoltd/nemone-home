"use client";

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Newspaper, Loader2 } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nemoneai.com/api';
const LIMIT = 5;

function renderContentWithLinks(text: string) {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.split(urlRegex).map((part, i) =>
    part.match(urlRegex)
      ? <a key={i} href={part} target="_blank" rel="noopener noreferrer"
          className="text-accent hover:text-jeju-300 underline underline-offset-4 transition-colors"
          onClick={e => e.stopPropagation()}>{part}</a>
      : part
  );
}

export default function SectionNews({ id }: { id: string }) {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (p: number) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/news?skip=${(p - 1) * LIMIT}&limit=${LIMIT}`);
      if (res.ok) {
        const data = await res.json();
        setNews(data.news);
        setTotal(data.total);
      }
    } catch {}
    finally { setLoading(false); }
  };

  useEffect(() => { fetchNews(page); }, [page]);

  const totalPages = Math.ceil(total / LIMIT);

  return (
    <section id={id} className="border-t border-white/[.05] py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">NEWS</span>
          <h2 className="text-lg font-bold text-white">Nemone News</h2>
          <div className="flex-1 border-t border-white/[.05]" />
          <span className="text-[10px] font-mono text-slate-600">TOTAL {total}</span>
        </div>

        {/* News list */}
        <div className="max-w-3xl">
          <div className="bg-white/[.02] border border-white/[.07] rounded-lg overflow-hidden">
            <div className="min-h-[360px]">
              {loading ? (
                <div className="h-[360px] flex items-center justify-center">
                  <Loader2 className="w-6 h-6 text-accent animate-spin" />
                </div>
              ) : news.length > 0 ? (
                <div className="divide-y divide-white/[.05]">
                  {news.map(item => (
                    <div key={item.id} className={`transition-colors ${expanded === item.id ? 'bg-white/[.04]' : 'hover:bg-white/[.02]'}`}>
                      <button
                        onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                        className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-4 flex-1 min-w-0">
                          <span className="text-[10px] font-mono text-accent/50 flex-shrink-0">
                            {item.created_at?.substring(2, 10).replace(/-/g, '.') ?? ''}
                          </span>
                          <span className="text-sm text-slate-300 font-medium truncate">{item.title}</span>
                        </div>
                        {expanded === item.id
                          ? <ChevronUp size={16} className="text-accent flex-shrink-0" />
                          : <ChevronDown size={16} className="text-slate-600 flex-shrink-0" />}
                      </button>
                      {expanded === item.id && (
                        <div className="px-6 pb-5">
                          <div className="border-t border-white/[.05] pt-4">
                            <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap">
                              {renderContentWithLinks(item.content)}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-[360px] flex items-center justify-center text-slate-700 text-sm italic">
                  등록된 소식이 없습니다.
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="border-t border-white/[.05] px-6 py-4 flex items-center justify-center gap-4">
                <button onClick={() => setPage(p => Math.max(1, p - 1))} disabled={page === 1}
                  className="p-1 text-slate-600 hover:text-accent disabled:opacity-20 transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button key={i + 1} onClick={() => setPage(i + 1)}
                      className={`w-7 h-7 rounded text-xs font-bold transition-all ${page === i + 1 ? 'bg-accent text-jeju-900' : 'text-slate-600 hover:text-white hover:bg-white/10'}`}>
                      {i + 1}
                    </button>
                  ))}
                </div>
                <button onClick={() => setPage(p => Math.min(totalPages, p + 1))} disabled={page === totalPages}
                  className="p-1 text-slate-600 hover:text-accent disabled:opacity-20 transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
