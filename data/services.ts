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

export const services: ServiceItem[] = [
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
    id: 'msm',
    name: 'MSM',
    domain: 'msm.nemoneai.com',
    status: 'LIVE',
    axis: 'Future',
    description: '할루시네이션을 통제한 국내 주식 AI 분석. Market Signal Master.',
    ctaLabel: '바로가기',
    url: 'https://msm.nemoneai.com',
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
