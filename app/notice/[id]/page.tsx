import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { fetchAllNews } from '@/lib/news'

// 공지 하나하나를 검색 가능한 페이지로 — 제목·요약·canonical·og를 개별로 둔다(2026-10-04)
export async function generateStaticParams() {
  const items = await fetchAllNews()
  return items.map((item) => ({ id: String(item.id) }))
}

function summarize(text: string): string {
  return text.replace(/\s+/g, ' ').trim().slice(0, 150)
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const item = (await fetchAllNews()).find((n) => String(n.id) === id)
  if (!item) return { title: '공지사항' }
  const description = summarize(item.content) || '네모네 공지사항'
  const url = `/notice/${item.id}/`
  return {
    title: `${item.title} | 네모네 공지사항`,
    description,
    alternates: { canonical: url },
    openGraph: { title: item.title, description, url, type: 'article', images: ['/og-image.png'] },
  }
}

export default async function NoticeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const item = (await fetchAllNews()).find((n) => String(n.id) === id)
  if (!item) notFound()
  const date = item.created_at?.substring(0, 10).replace(/-/g, '.') ?? ''
  return (
    <>
      <nav className="sticky top-0 z-50 bg-jeju-900/95 backdrop-blur-md border-b border-white/[.07]">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="/" className="text-lg font-black tracking-tight select-none">
            <span className="text-white">NEMO</span><span className="text-accent">NE</span>
          </a>
          <a href="/notice/" className="text-sm text-slate-400 hover:text-white transition-colors">← 공지 목록</a>
        </div>
      </nav>
      <article className="max-w-3xl mx-auto px-6 py-12">
        <p className="text-[10px] font-mono text-accent/60 mb-3">{date}</p>
        <h1 className="text-2xl font-bold text-white mb-8 leading-snug">{item.title}</h1>
        <div className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">{item.content}</div>
      </article>
    </>
  )
}
