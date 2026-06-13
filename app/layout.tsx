import type { Metadata } from 'next'
import { Inter, Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSansKR = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto', weight: ['300', '400', '500', '700'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://home.nemoneai.com'),
  title: {
    default: '네모네 | AI for Human Transformation',
    template: '%s | 네모네',
  },
  description:
    '네모네는 음식·생각·공간·기술이 인간을 어떻게 바꾸는지 탐구하고, 그 통찰을 AI 시스템으로 구현하는 회사입니다. MSM(주식 AI 분석), 지금여기(로컬 RAG), 네모네AIM, 와랑스튜디오를 운영합니다.',
  keywords: [
    '네모네', 'AI', '인간변화', 'MSM', '주식AI분석',
    '지금여기', '로컬가이드', '와랑스튜디오', '제주', 'RAG', 'LLM',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: '네모네주식회사',
    url: 'https://home.nemoneai.com',
    title: '네모네 | AI for Human Transformation',
    description: '음식·생각·공간·기술로 인간의 변화를 연구하는 AI 회사.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: '네모네 | AI for Human Transformation',
    description: '음식·생각·공간·기술로 인간의 변화를 연구하는 AI 회사.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      name: '네모네주식회사',
      alternateName: 'NEMONE Inc.',
      url: 'https://home.nemoneai.com',
      logo: 'https://home.nemoneai.com/logo.png',
      description: '음식·생각·공간·기술로 인간의 변화를 탐구하고 AI 시스템을 구현하는 회사',
      sameAs: [
        'https://www.youtube.com/@MatMatch',
        'https://open.spotify.com/show/033lW1LKn5eM7rMyAufqHt',
        'https://brunch.co.kr/@you1',
        'https://nemoneai.com',
      ],
    },
    {
      '@type': 'WebSite',
      url: 'https://home.nemoneai.com',
      name: '네모네주식회사',
      inLanguage: ['ko', 'en'],
    },
    {
      '@type': 'LocalBusiness',
      name: '와랑스튜디오',
      description: 'AI·삶·공간을 실험하는 네모네 제주 플래그십 랩',
      url: 'https://home.nemoneai.com/#lab',
      address: {
        '@type': 'PostalAddress',
        addressRegion: '제주특별자치도',
        addressCountry: 'KR',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'MSM — Market Signal Master',
      applicationCategory: 'FinanceApplication',
      url: 'https://msm.nemoneai.com',
      description: '한국 주식 실시간 AI 분석. 할루시네이션 없는 수치 기반 리포트.',
      operatingSystem: 'Web',
    },
    {
      '@type': 'SoftwareApplication',
      name: '지금여기 NOW HERE',
      applicationCategory: 'TravelApplication',
      url: 'https://now.nemoneai.com',
      description: '서울·제주 하이퍼-로컬 RAG. AI가 설계하는 3시간 코스.',
      operatingSystem: 'Web',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKR.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-jeju-900 text-slate-200 antialiased font-sans">{children}</body>
    </html>
  )
}
