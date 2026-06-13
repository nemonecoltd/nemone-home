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
        accent:  '#00d4ff',
        accent2: '#0af5c8',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'Apple SD Gothic Neo', 'sans-serif'],
      },
    },
  },
}
export default config
