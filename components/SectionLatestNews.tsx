"use client";

import { useEffect, useState } from 'react';
import { ChevronRight, Newspaper } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nemoneai.com/api';

// SectionNews.tsx(전체 소식 목록)엔 있는데 이 컴포넌트(홈 상단 최신 소식 바)엔 없어서
// 게시글 본문에 넣은 URL이 그냥 텍스트로만 보이던 문제(2026-09-05) — 동일 로직 적용,
// 새 창(target="_blank")으로 열림.
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

export default function SectionLatestNews() {
  const [latest, setLatest] = useState<NewsItem | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(`${API_URL}/news?skip=0&limit=1`)
      .then(r => r.ok ? r.json() : null)
      .then(d => { if (d?.news?.[0]) setLatest(d.news[0]); })
      .catch(() => {});
  }, []);

  if (!latest) return null;

  const date = latest.created_at?.substring(2, 10).replace(/-/g, '.') ?? '';

  return (
    <div className="border-b border-white/[.05] bg-jeju-800/60">
      <div className="max-w-6xl mx-auto px-6">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center gap-3 py-3 text-left group"
        >
          <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-widest text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded flex-shrink-0">
            <Newspaper size={10} /> NEW
          </span>
          <span className="text-[11px] font-mono text-slate-500 flex-shrink-0">{date}</span>
          <span className="text-sm text-slate-300 font-medium truncate group-hover:text-white transition-colors">
            {latest.title}
          </span>
          <ChevronRight
            size={14}
            className={`text-slate-500 flex-shrink-0 ml-auto transition-transform ${expanded ? 'rotate-90' : ''}`}
          />
        </button>

        {expanded && (
          <div className="pb-4 pl-[calc(3rem+1.5rem)] pr-2">
            <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap">
              {renderContentWithLinks(latest.content)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
