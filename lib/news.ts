// 공지(NEMONE NEWS) 데이터 — 정적 export 빌드 시점에 가져온다(/notice/, /notice/[id]/, sitemap 공용).
// 백엔드(matmatch/backend)의 GET /news는 목록만 있어 개별 공지는 전체 목록에서 찾는다(공지 수가 적음).
export const NEWS_API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://nemoneai.com/api';

export interface NewsItem {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

export async function fetchNewsPage(skip: number, limit: number): Promise<{ total: number; news: NewsItem[] }> {
  try {
    const res = await fetch(`${NEWS_API_URL}/news?skip=${skip}&limit=${limit}`);
    if (!res.ok) return { total: 0, news: [] };
    const data = await res.json();
    return { total: data.total ?? 0, news: data.news ?? [] };
  } catch {
    return { total: 0, news: [] };
  }
}

export async function fetchAllNews(): Promise<NewsItem[]> {
  return (await fetchNewsPage(0, 1000)).news;
}
