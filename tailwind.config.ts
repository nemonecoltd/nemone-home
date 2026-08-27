import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        jeju: {
          900: '#0B1622',
          800: '#132235',
          700: '#1C314A',
          600: '#284462',
          500: '#35577A',
          400: '#4675A4',
          300: '#6D96C0',
          200: '#9AB8D6',
          100: '#C0D4E7',
          50:  '#DDE8F3',
        },
        accent:  '#9AB8D6',
        accent2: '#0af5c8',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans KR', 'Apple SD Gothic Neo', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Inter', 'sans-serif'],
      },
    },
  },
}
export default config
