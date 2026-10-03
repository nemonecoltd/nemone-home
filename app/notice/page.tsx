import type { Metadata } from 'next'
import SectionNews from '@/components/SectionNews'
import { fetchNewsPage } from '@/lib/news'

export const metadata: Metadata = {
  title: '공지사항',
  description: '네모네의 소식과 공지사항을 확인하세요.',
  alternates: { canonical: '/notice/' },
  openGraph: {
    title: 'Nemone News',
    description: '네모네의 소식과 공지사항',
    url: 'https://home.nemoneai.com/notice/',
    images: ['/og-image.png'],
  },
}

export default async function NoticePage() {
  // 빌드 시점에 첫 페이지를 가져와 HTML에 포함 — 검색엔진이 공지 제목을 읽을 수 있게 한다
  const { total, news } = await fetchNewsPage(0, 5)
  return (
    <>
      <nav className="sticky top-0 z-50 bg-jeju-900/95 backdrop-blur-md border-b border-white/[.07]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-lg font-black tracking-tight select-none">
            <span className="text-white">NEMO</span><span className="text-accent">NE</span>
          </a>
          <a href="/" className="text-sm text-slate-400 hover:text-white transition-colors">← 홈으로</a>
        </div>
      </nav>

      <div className="py-8">
        {/* SectionNews는 홈에서도 쓰여서 그 안의 h2를 h1으로 못 올린다(홈에 h1이 2개가 됨).
            이 페이지 전용 h1만 따로 둔다 — 디자인 변경 없이 sr-only(2026-09-11 빙 지적). */}
        <h1 className="sr-only">공지사항</h1>
        <SectionNews id="news" initialNews={news} initialTotal={total} />
      </div>
    </>
  )
}
