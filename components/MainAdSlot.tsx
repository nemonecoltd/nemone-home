"use client";

import { useEffect } from 'react';

// matmatch 메인((main)/MainAdSlot.tsx)과 같은 광고 유닛(ca-pub-4274957638983041 / slot
// 7051929128)을 그대로 재사용 — 네모네 계정의 기존 가로형 디스플레이 광고.
export default function MainAdSlot() {
  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="border-y border-white/[.05] py-8 px-6">
      <div className="max-w-6xl mx-auto flex justify-center w-full overflow-hidden">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-4274957638983041"
          data-ad-slot="7051929128"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
