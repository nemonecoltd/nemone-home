import { fetchAllNews } from '@/lib/news'
import type { MetadataRoute } from 'next'

// next.config의 trailingSlash: true 때문에 루트 외 모든 경로는 끝에 '/'가 붙은 URL이
// 정규(canonical) 주소이고, '/'가 없는 URL로 요청하면 301로 리다이렉트된다. sitemap이
// 슬래시 없는 URL을 실어 보내면 크롤러가 매번 불필요한 리다이렉트를 한 번씩 더 거치게
// 되고, Search Console엔 "3xx를 반환하는 페이지"로 잡힌다(2026-09-21, /notice 건으로
// 발견 — 실제로는 /brand·/services도 같은 문제였음). 루트('/')는 트레일링 슬래시가
// 이미 그 자체이므로 그대로 둔다.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 공지 개별 페이지도 사이트맵에 포함(검색엔진이 각 공지를 발견하도록)
  const notices = await fetchAllNews()
  const noticeEntries: MetadataRoute.Sitemap = notices.map((n) => ({
    url: `https://home.nemoneai.com/notice/${n.id}/`,
    lastModified: new Date(n.created_at),
    priority: 0.5,
  }))
  return [
    { url: 'https://home.nemoneai.com',           lastModified: new Date(), priority: 1.0 },
    { url: 'https://home.nemoneai.com/brand/',    lastModified: new Date(), priority: 0.8 },
    { url: 'https://home.nemoneai.com/services/', lastModified: new Date(), priority: 0.9 },
    { url: 'https://home.nemoneai.com/notice/',   lastModified: new Date(), priority: 0.6 },
    { url: 'https://home.nemoneai.com/#think',    lastModified: new Date(), priority: 0.8 },
    { url: 'https://home.nemoneai.com/#build',    lastModified: new Date(), priority: 0.9 },
    { url: 'https://home.nemoneai.com/#lab',      lastModified: new Date(), priority: 0.7 },
    { url: 'https://home.nemoneai.com/#media',    lastModified: new Date(), priority: 0.6 },
    ...noticeEntries,
  ]
}
