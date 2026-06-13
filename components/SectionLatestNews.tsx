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
              {latest.content}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
