"use client";

import { useEffect, useState } from 'react';
import { fetchStoreItems, STORE_URL, type StoreItem } from '@/lib/store';

export default function SectionStore({ id, initialItems = [] }: { id: string; initialItems?: StoreItem[] }) {
  // 빌드 때 받은 상품을 먼저 그리고, 방문 시 최신으로 갱신한다(수집 실패·빈 응답이면 기존 상품 유지)
  const [items, setItems] = useState<StoreItem[]>(initialItems);
  useEffect(() => {
    fetchStoreItems().then(list => { if (list.length > 0) setItems(list); });
  }, []);
  if (items.length === 0) return null;

  return (
    <section id={id} className="py-8 px-6 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5 rounded">STORE</span>
          <h2 className="text-lg font-bold text-white">네모네스토어</h2>
          <div className="flex-1 border-t border-white/[.05]" />
          <a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="text-[11px] text-slate-500 hover:text-accent transition-colors whitespace-nowrap">스토어 전체 보기 →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {items.map(p => (
            <a
              key={p.id}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/[.025] border border-white/[.07] rounded-lg overflow-hidden hover:border-accent/25 transition-colors group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} width={300} height={300} loading="lazy" className="w-full aspect-square object-cover bg-white/[.04]" />
              <div className="p-4 space-y-2">
                <p className="text-sm font-bold text-white group-hover:text-accent transition-colors leading-snug line-clamp-2">{p.title}</p>
                <p className="text-sm font-bold text-white">
                  {p.discount_pct > 0 && <span className="text-red-400 mr-1.5">{p.discount_pct}%</span>}
                  {p.price.toLocaleString('ko-KR')}원
                </p>
                {p.list_price ? <p className="text-[11px] text-slate-600 line-through">{p.list_price.toLocaleString('ko-KR')}원</p> : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
