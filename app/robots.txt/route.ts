// robots.txt — 다음 웹마스터도구 소유 확인 주석을 넣으려고 robots.ts(MetadataRoute, 주석 불가)를 텍스트 라우트로 바꿨다(2026-11-16).
// 규칙은 이전 robots.ts와 동일(전체 허용 + 사이트맵). 정적 export라 force-static이 필요하다.
export const dynamic = 'force-static'

const DAUM_VERIFY = '#DaumWebMasterTool:548c4f8d5caa54d85101e3a8595d8090c71e307c956777c82c30409678967757:CNSJIIGOISrSV2aL3hPlgQ=='

export function GET() {
  const body = [
    DAUM_VERIFY,
    'User-Agent: *',
    'Allow: /',
    '',
    'Sitemap: https://home.nemoneai.com/sitemap.xml',
    '',
  ].join('\n')
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
