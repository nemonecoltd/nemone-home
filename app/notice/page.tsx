import type { Metadata } from 'next'
import SectionNews from '@/components/SectionNews'

export const metadata: Metadata = {
  title: '공지사항',
  description: '네모네의 소식과 공지사항을 확인하세요.',
  alternates: { canonical: '/notice' },
  openGraph: {
    title: 'Nemone News',
    description: '네모네의 소식과 공지사항',
    url: 'https://home.nemoneai.com/notice',
  },
}

export default function NoticePage() {
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
        <SectionNews id="news" />
      </div>
    </>
  )
}
