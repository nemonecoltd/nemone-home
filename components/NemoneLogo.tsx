// public/nemone-logo-horizontal-*.svg를 그대로 쓰면 워드마크(회사명 텍스트)가 브랜드 네이비(#35577A)로
// 고정돼 있어 이 사이트의 어두운 배경(jeju-900)에서 대비가 약함. 아이콘(네이비 박스+흰 글자)은
// 원본 그대로 두고, 워드마크만 currentColor로 바꿔서 배경에 맞는 색을 줄 수 있게 만든 버전.
export default function NemoneLogo({ lang, className }: { lang: 'en' | 'kr'; className?: string }) {
  const width = lang === 'en' ? 260 : 220;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} 64`} className={className}>
      <svg x="0" y="0" width="64" height="64" viewBox="0 0 100 100">
        <rect x="4" y="4" width="92" height="92" rx="22" fill="#35577A" />
        <text x="50" y="65" textAnchor="middle" fontFamily="Helvetica Neue,Arial,sans-serif" fontSize="40" fontWeight="700" fill="#fff">Ne</text>
      </svg>
      <text
        x="81" y="32" dominantBaseline="central" textAnchor="start"
        fontFamily="Helvetica Neue,Arial,sans-serif"
        fontSize={lang === 'en' ? 30 : 28}
        fontWeight="700"
        letterSpacing={lang === 'en' ? 0.3 : 0}
        fill="currentColor"
      >
        {lang === 'en' ? 'NEMONE' : '네모네'}
      </text>
    </svg>
  );
}
