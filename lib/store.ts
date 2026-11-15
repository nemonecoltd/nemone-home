// 네모네스토어(네이버 스마트스토어) 최신 상품 — 포털 백엔드(GET /portal/today의 store)가 하루 한 번 네이버 커머스API로 모아 둔 것을 읽는다.
// 홈은 정적 export라 빌드 때 한 번 가져와 HTML에 넣고(검색엔진용), 방문 시 클라이언트에서 최신으로 다시 읽는다.
export const STORE_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nemoneai.com/api';
export const STORE_URL = 'https://smartstore.naver.com/nemone24';

export interface StoreItem {
  id: string;
  title: string;
  image: string;
  url: string;
  price: number;
  list_price: number | null;
  discount_pct: number;
}

export async function fetchStoreItems(): Promise<StoreItem[]> {
  try {
    const res = await fetch(`${STORE_API_URL}/portal/today`);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.store) ? data.store.slice(0, 4) : [];
  } catch {
    return [];
  }
}
