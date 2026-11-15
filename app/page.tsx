import Nav                from '@/components/Nav'
import Hero               from '@/components/Hero'
import MainAdSlot         from '@/components/MainAdSlot'
import SectionLatestNews  from '@/components/SectionLatestNews'
import SectionThink       from '@/components/SectionThink'
import SectionBuild       from '@/components/SectionBuild'
import SectionTech        from '@/components/SectionTech'
import SectionWarang      from '@/components/SectionWarang'
import SectionMedia       from '@/components/SectionMedia'
import SectionStore       from '@/components/SectionStore'
import SectionNews        from '@/components/SectionNews'
import SectionBrandTeaser from '@/components/SectionBrandTeaser'
import Footer             from '@/components/Footer'
import { fetchStoreItems } from '@/lib/store'

export default async function Home() {
  const storeItems = await fetchStoreItems()   // 빌드 때 한 번(정적 export) — 방문 시 클라이언트가 최신으로 갱신
  // 네모네스토어 상품 목록 구조화 데이터(가격·Offer 없음 — 홈은 구매 페이지가 아니다)
  const storeJsonLd = storeItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: '네모네스토어 최신 상품',
    itemListElement: storeItems.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: it.url.split('?')[0],
      name: it.title,
      image: it.image.split('?')[0],
    })),
  } : null
  return (
    <>
      {storeJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }} />}
      <Nav />
      <SectionLatestNews />
      <main>
        <Hero              id="hero"  />
        <MainAdSlot />
        <SectionThink      id="think" />
        <SectionBuild      id="build" />
        <SectionTech       id="tech"  />
        <SectionWarang     id="lab"   />
        <SectionMedia      id="media" />
        <SectionStore      id="store" initialItems={storeItems} />
        <SectionNews       id="news"  />
        <SectionBrandTeaser id="brand" />
      </main>
      <Footer />
    </>
  )
}
