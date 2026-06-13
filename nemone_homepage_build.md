# 네모네 홈페이지 리뉴얼 — Claude Code 작업 요청서

> **작업 목표:** `home.nemoneai.com` 완전 신규 개발  
> **스택:** Next.js 14 App Router + TypeScript + Tailwind CSS  
> **백엔드:** 없음 (정적 페이지). 게시판/콘텐츠 API는 `nemoneai.com` 백엔드가 담당하므로 이 프로젝트에서는 제외.

---

## 1. 프로젝트 초기 세팅

```bash
npx create-next-app@latest nemone-home \
  --typescript \
  --tailwind \
  --app \
  --no-src-dir \
  --import-alias "@/*"

cd nemone-home
```

### 추가 패키지

```bash
npm install next-seo lucide-react
```

### 디렉토리 구조

```
nemone-home/
├── app/
│   ├── layout.tsx          # 메타데이터, JSON-LD, 전역 스타일
│   ├── page.tsx            # 메인 페이지 (섹션 조립)
│   ├── sitemap.ts          # 자동 sitemap 생성
│   └── robots.ts           # robots.txt
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── SectionThink.tsx
│   ├── SectionBuild.tsx
│   ├── SectionTech.tsx
│   ├── SectionWarang.tsx
│   ├── SectionMedia.tsx
│   └── Footer.tsx
├── public/
│   └── og-image.png        # 1200×630 OG 이미지 (별도 제작 필요)
└── tailwind.config.ts
```

---

## 2. 디자인 토큰 (tailwind.config.ts)

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jeju: {
          900: '#040e1c',
          800: '#071a33',
          700: '#0a2448',
          600: '#0d3366',
          500: '#1150a0',
          400: '#1a6ec4',
          300: '#3d92e0',
          200: '#7ab8f0',
          100: '#c2dff8',
          50:  '#e8f3fd',
        },
        accent:  '#00d4ff',   // 제주 시안 — 메인 강조색
        accent2: '#0af5c8',   // 민트 — live 배지, tech 레이블
      },
      fontFamily: {
        sans: ['Inter', 'Apple SD Gothic Neo', 'sans-serif'],
      },
    },
  },
}
export default config
```

---

## 3. 전역 레이아웃 + SEO (app/layout.tsx)

```tsx
// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'

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

// JSON-LD 구조화 데이터
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
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-jeju-900 text-slate-200 antialiased">{children}</body>
    </html>
  )
}
```

---

## 4. Sitemap & Robots (app/sitemap.ts, app/robots.ts)

```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://home.nemoneai.com',        lastModified: new Date(), priority: 1.0 },
    { url: 'https://home.nemoneai.com/#think', lastModified: new Date(), priority: 0.8 },
    { url: 'https://home.nemoneai.com/#build', lastModified: new Date(), priority: 0.9 },
    { url: 'https://home.nemoneai.com/#lab',   lastModified: new Date(), priority: 0.7 },
    { url: 'https://home.nemoneai.com/#media', lastModified: new Date(), priority: 0.6 },
  ]
}
```

```ts
// app/robots.ts
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://home.nemoneai.com/sitemap.xml',
  }
}
```

---

## 5. 메인 페이지 조립 (app/page.tsx)

```tsx
// app/page.tsx
import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import SectionThink  from '@/components/SectionThink'
import SectionBuild  from '@/components/SectionBuild'
import SectionTech   from '@/components/SectionTech'
import SectionWarang from '@/components/SectionWarang'
import SectionMedia  from '@/components/SectionMedia'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero          id="hero"   />
        <SectionThink  id="think"  />
        <SectionBuild  id="build"  />
        <SectionTech   id="tech"   />
        <SectionWarang id="lab"    />
        <SectionMedia  id="media"  />
      </main>
      <Footer />
    </>
  )
}
```

---

## 6. 컴포넌트별 상세 스펙

### 6-1. Nav.tsx

- `sticky top-0 z-50`, `backdrop-blur-md`, 배경 `bg-jeju-900/95`
- 좌: 로고 `NEMO` + `NE` (accent 컬러)
- 중: `Think / Build / Lab / Media` 앵커 링크 (`#think` 등)
- 우: `Contact` 버튼 (accent 배경, jeju-900 텍스트)
- **모바일:** 햄버거 메뉴 (`☰`), 클릭 시 전체화면 오버레이 드로어로 링크 표시
- 스크롤 시 border-bottom 라인 나타남 (`scrollY > 10` 감지)

---

### 6-2. Hero.tsx

**레이아웃**
- 데스크톱: `grid grid-cols-2 gap-12`, 좌=카피 / 우=서비스 pill 목록
- 모바일: 세로 적층 (`flex flex-col`), 서비스 pill은 가로 스크롤 (`overflow-x-auto flex gap-3`)

**좌측 카피**
```
[eyebrow] AI for Human Transformation
[h1]      인간의 변화를
          연구하고 만든다          ← "만든다" accent 컬러
[blockquote] "What changes people?"  ← 좌측 accent border
[p]       네모네는 음식·생각·공간·기술이 인간을 어떻게 바꾸는지 탐구하고,
          그 통찰을 AI 시스템으로 구현하는 회사입니다.
[buttons] [서비스 살펴보기 #build] [와랑스튜디오 → #lab]
```

**우측 서비스 pill (4개)**

| 아이콘 | 이름 | 설명 | 배지 |
|---|---|---|---|
| 📈 | MSM — Market Signal Master | 주식 AI 분석 · 할루시네이션 차단 | `LIVE` (accent2) |
| 🗺️ | 지금여기 — NOW HERE | 서울·제주 하이퍼-로컬 RAG | `LIVE` |
| 📰 | 네모네AIM | 자체 CMS · SSO · AI 미디어 | `LIVE` |
| 🌿 | 와랑스튜디오 | 제주 · NEMONE LAB | `LAB` (jeju-200) |

각 pill: `border border-white/7 rounded-lg`, hover 시 `border-accent/25` 전환

---

### 6-3. SectionThink.tsx

섹션 헤더 패턴 (공통):
```
[tag: THINK] [title: 4가지 탐구 영역] ─────── [note: 인간 변화의 4개 입구]
```

**카드 4개** — 데스크톱 `grid-cols-4`, 모바일 `grid-cols-2`

각 카드 상단에 2px 컬러 바:

| 도메인 | 카드 컬러바 | 프로젝트명 | 핵심 질문 | 연결 채널 |
|---|---|---|---|---|
| Taste | `#ff8c42 → #ffcb6b` | The Civilization of Taste | 음식은 인간을 어떻게 바꾸었는가? | YouTube · Podcast · nemoneai.com/Taste |
| Mind | `#a855f7 → #7c3aed` | Brainwashing for the Self | 생각은 인간을 어떻게 바꾸는가? | 브런치 @you1 · nemoneai.com/Life |
| Place | `#10b981 → #34d399` | K-Life Project | 환경은 인간을 어떻게 바꾸는가? | 와랑스튜디오 · 지금여기 |
| Future | `#00d4ff → #0af5c8` | AI & Finance | 기술은 인간을 어떻게 바꾸는가? | MSM · nemoneai.com/Tech |

---

### 6-4. SectionBuild.tsx

**레이아웃**
- 데스크톱: `grid grid-cols-[2fr_1fr_1fr] gap-2`
- 모바일: `flex flex-col gap-3` (MSM 피처드 카드 먼저)

**MSM 카드 (featured, 2/4 너비)**
- 배경: `bg-jeju-500/15`, 테두리: `border-accent/20`
- 우상단에 미묘한 방사형 그라디언트 (`radial-gradient`)
- URL: `msm.nemoneai.com` (monospace, accent 컬러)
- 타이틀: `MSM / Market Signal Master`
- 태그라인: "계산은 시스템, 해석은 AI — 숫자가 틀리지 않는 분석"
- 피처 목록 (▸ 아이콘):
  - 기술적 분석(MACD·RSI·볼린저밴드·일목균형표) + 퀀트(몬테카를로·VaR) 백엔드 직접 연산
  - 삼중 교차검증 실시간 시세 — 할루시네이션 원천 차단
  - SSE 실시간 스트리밍 리포트 출력
  - Redis 다계층 캐시 · AI 모델 이원화 (감성 분류/리포트 생성 분리)
  - PRO: 4-팩터 스코어링으로 TOP 10 종목 자동 추천
- 스택 태그: `FastAPI` `pandas-ta` `Gemini Pro` `Redis` `DART API` `SSE` `PostgreSQL` `Next.js 14`
- 하단에 `→ msm.nemoneai.com 바로가기` 링크

**지금여기 카드 (1/4 너비)**
- URL: `now.nemoneai.com`
- 피처: Google 에코시스템 RAG · 팝업·공연·제주 행사 실시간 수집 · AI 코스 자동 생성 · 한/영 지원
- 스택 태그: `RAG` `Google Places API` `Next.js` `Supabase`

**네모네AIM 카드 (1/4 너비)**
- URL: `nemoneai.com`
- 피처: Next.js 14 SSG/ISR + FastAPI + PostgreSQL · Supabase 통합 SSO · 자체 AnalyticsTracker (5초 체류 기준) · GCS 이미지 파이프라인
- 스택 태그: `Next.js 14` `TypeScript` `FastAPI` `GCS` `PM2`

---

### 6-5. SectionTech.tsx

**레이아웃:** 데스크톱 `grid-cols-3`, 모바일 `flex flex-col`

3개 카드, 각 카드 상단 레이블은 `accent2` 컬러:

| 레이블 | 태그 목록 |
|---|---|
| AI / Data | `RAG Architecture` `LLM Orchestration` `Hallucination Control` `SSE Streaming` `Async Crawling` `Redis Cache` |
| Backend / Infra | `FastAPI (Python)` `PostgreSQL` `Nginx + PM2` `Google Cloud` `Supabase SSO` `CI/CD` |
| Frontend / Platform | `Next.js 14 App Router` `TypeScript` `Tailwind CSS` `Custom Analytics` `SSG / ISR` `Google OAuth` |

태그 스타일: `bg-white/5 text-slate-400 font-mono text-[9px] px-1.5 py-0.5 rounded`

---

### 6-6. SectionWarang.tsx

**레이아웃**
- 데스크톱: `grid grid-cols-2 gap-6`
- 모바일: `flex flex-col gap-4`

**좌측 — 텍스트**
```
[label]  말이 아닌 실험 · NEMONE LAB
[h2]     이론을 현실에서
         검증하는 공간
[p]      네모네의 모든 철학 — AI, 삶의 방식, 음식, 생산성, 공간 설계 —
         을 실제로 살아보며 실험하는 플래그십 랩입니다.
[roles grid 2×2]
  AI 실험    | 공간 연구
  미식 탐구  | 콘텐츠 제작
```

**우측 — 지도 블록**
- 배경: `bg-jeju-600/30`, 테두리: `border-accent/15`
- 지도 영역: 네이버 지도 iframe embed (`place/2065456826`)
  - `width: 100%`, `height: 140px`, `border: none`, `border-radius: 6px`
  - iframe 로드 실패 대비 fallback: "📍 와랑스튜디오 · 제주 — 네이버 지도에서 보기" 링크
- 하단 스탯 3개: `Jeju / 거점` · `Lab / 역할` · `Open / 상태`

---

### 6-7. SectionMedia.tsx

**레이아웃:** 데스크톱 `grid-cols-4`, 모바일 `grid-cols-2`

| 플랫폼 | 이름 | 설명 | 링크 |
|---|---|---|---|
| YouTube | 글로벌미식탐험대 | MatMatch 채널 · 미식 문명사 영상 | `https://www.youtube.com/@MatMatch` |
| Podcast · Spotify | 네모네AIM | Taste 시리즈 · 음식과 문명 이야기 | `https://open.spotify.com/show/033lW1LKn5eM7rMyAufqHt` |
| Media Site | nemoneai.com | Taste·Culture·Life·Tech 롱폼 아티클 | `https://nemoneai.com` |
| 브런치 | @you1 | Mind · K-Life · 생각과 삶의 에세이 | `https://brunch.co.kr/@you1` |

각 카드: 외부 링크 `target="_blank" rel="noopener noreferrer"`

---

### 6-8. Footer.tsx

**데스크톱:** 1행 3열 — 로고 / 링크 모음 / 카피라이트  
**모바일:** 세로 적층

```
NEMONE INC.  |  nemoneai.com · now.nemoneai.com · msm.nemoneai.com · Contact
                                          © 2026 네모네주식회사. All rights reserved.
```

---

## 7. 반응형 브레이크포인트

**단일 브레이크포인트 `md (768px)` 로 통일**

```
< 768px  → 모바일 레이아웃
≥ 768px  → 데스크톱 레이아웃
```

| 섹션 | 모바일 | 데스크톱 |
|---|---|---|
| Hero | flex-col, pill 가로 스크롤 | grid-cols-2 |
| Think | grid-cols-2 | grid-cols-4 |
| Build | flex-col (MSM 먼저) | grid [2fr_1fr_1fr] |
| Tech | flex-col | grid-cols-3 |
| Warang | flex-col | grid-cols-2 |
| Media | grid-cols-2 | grid-cols-4 |
| Nav | 햄버거 드로어 | 인라인 링크 |

---

## 8. 공통 색상 / 스타일 규칙

```
배경:         bg-jeju-900  (#040e1c)
카드:         bg-white/[.025], border border-white/[.07], rounded-lg
섹션 구분선:  border-b border-white/[.05]
섹션 패딩:    py-8 px-6 (모바일: py-5 px-4)
강조색:       text-accent (#00d4ff)
서브 텍스트:  text-slate-400
뮤트 텍스트:  text-slate-600
LIVE 배지:    bg-accent2/10 text-accent2 text-[9px] font-bold px-1.5 py-0.5 rounded-sm
LAB 배지:     bg-jeju-400/20 text-jeju-200 text-[9px] font-bold px-1.5 py-0.5 rounded-sm
스택 태그:    bg-white/5 text-slate-500 font-mono text-[9px] px-1.5 py-0.5 rounded
```

---

## 9. SEO 체크리스트

- [ ] `app/layout.tsx` — Metadata API (title template, description, OG, twitter, robots)
- [ ] `app/layout.tsx` — JSON-LD `@graph` (Organization, WebSite, LocalBusiness, SoftwareApplication ×2)
- [ ] `app/sitemap.ts` — 자동 sitemap 생성
- [ ] `app/robots.ts` — robots.txt
- [ ] `public/og-image.png` — 1200×630 OG 이미지 제작 (별도)
- [ ] 모든 `<section>`에 `id` 앵커 (`hero`, `think`, `build`, `tech`, `lab`, `media`)
- [ ] 모든 `<img>`에 `alt` 텍스트
- [ ] 외부 링크 전체 `rel="noopener noreferrer"`
- [ ] `<h1>` 페이지당 1개 (Hero에만), 나머지는 `<h2>`

---

## 10. 주의 사항

1. **게시판/콘텐츠 API 연동 없음** — 이 프로젝트는 순수 정적 홈페이지. API 호출 코드 넣지 말 것.
2. **네이버 지도 iframe** — CSP(Content Security Policy) 이슈 발생 시 iframe 대신 외부 링크 버튼으로 대체.
3. **폰트** — Google Fonts `Inter` + `Noto Sans KR` (`next/font/google`로 최적화 로드).
4. **이미지** — `next/image` 컴포넌트 사용 (OG 이미지, 로고 등).
5. **애니메이션** — 최소화. Hero 배경 radial gradient glow 정도만 유지. `prefers-reduced-motion` 미디어 쿼리 대응.
6. **배포** — 기존 nemoneai.com 인프라(Nginx + PM2) 동일하게 사용 가능. `next build` 후 Standalone 출력.
