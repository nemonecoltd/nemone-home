export interface ServiceItem {
  id: string;
  name: string;
  domain: string;
  status: 'LIVE' | 'BETA';
  axis: string;
  description: string;
  ctaLabel: string;
  url: string;
}

// 최신 서비스가 맨 위 — 새 서비스는 맨 앞에 추가한다(홈 서비스 페이지가 이 순서대로 보여 준다).
export const services: ServiceItem[] = [
  {
    id: 'santa',
    name: '산타의 칭찬카드',
    domain: 'santa.nemoneai.com',
    status: 'LIVE',
    axis: 'Mind',
    description: 'MBTI와 혈액형만 알려 주면 산타가 나만의 칭찬카드를 만들어 드려요. 무료로 받고, 친구에게 선물하고, 산타의 일기도 읽어 보세요.',
    ctaLabel: '칭찬카드 받기',
    url: 'https://santa.nemoneai.com',
  },
  {
    id: 'plants',
    name: 'NEMONE PLANTS',
    domain: 'plants.nemoneai.com',
    status: 'LIVE',
    axis: 'Place',
    description: '식물도감과 케어 가이드, 사진으로 식물 상태를 살펴 주는 AI 진단까지. 반려식물을 잘 키우도록 돕는 서비스입니다.',
    ctaLabel: '식물도감 보기',
    url: 'https://plants.nemoneai.com',
  },
  {
    id: 'lii',
    name: 'LII',
    domain: 'msm.nemoneai.com',
    status: 'LIVE',
    axis: 'Future',
    description: '기업의 과거보다 미래를 보는 장기투자 AI 분석. Long-term Investment Intelligence.',
    ctaLabel: '바로가기',
    url: 'https://msm.nemoneai.com',
  },
  {
    id: 'pace',
    name: 'NEMONE PACE',
    domain: 'now.nemoneai.com',
    status: 'LIVE',
    axis: 'Place',
    description: '당신의 다음 3시간을 AI가 설계합니다. "3시간 코스"는 시그니처 포맷입니다.',
    ctaLabel: '앱 다운로드',
    url: 'https://play.google.com/store/apps/details?id=com.nemoneai.now',
  },
  {
    id: 'aim',
    name: '네모네AIM',
    domain: 'nemoneai.com',
    status: 'LIVE',
    axis: '플랫폼',
    description: '네모네의 IP를 담는 에디토리얼 서비스 플랫폼. Taste/Mind/Place/Future 콘텐츠 발행 허브입니다.',
    ctaLabel: '지금 읽기',
    url: 'https://nemoneai.com',
  },
  {
    id: 'store',
    name: '네모네스토어',
    domain: '스마트스토어',
    status: 'LIVE',
    axis: '커머스',
    description: '삶의 감도를 설계하는 큐레이션 스토어. AIM 콘텐츠 → 구매 전환의 종착점입니다.',
    ctaLabel: '구매하기',
    url: 'https://smartstore.naver.com/nemone24',
  },
  {
    id: 'warang',
    name: '와랑스튜디오',
    domain: '제주',
    status: 'LIVE',
    axis: 'Lab',
    description: '네모네의 철학을 현실에서 검증하는 Living Lab. 제주 소재 물리적 실험실입니다.',
    ctaLabel: '위치 보기',
    url: 'https://map.naver.com/p/entry/place/2065456826',
  },
];
