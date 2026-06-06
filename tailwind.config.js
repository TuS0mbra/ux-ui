/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0a',
          800: '#0e0e10',
          700: '#14141a',
          600: '#1c1c22',
          500: '#26262d',
        },
        graphite: '#14141a',
        oxblood: {
          DEFAULT: '#2a0a14',
          deep: '#1a0610',
          warm: '#3d0e1c',
        },
        ivory: {
          DEFAULT: '#f5f0e6',
          soft: '#faf5ec',
          deep: '#e8e0d0',
        },
        gold: {
          DEFAULT: '#c9a227',
          soft: '#e7cd8f',
          deep: '#a08020',
          foil: '#d8b25a',
        },
        haze: {
          DEFAULT: '#8a8689',
          deep: '#5a575a',
          soft: '#b8b4b7',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        meta: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        editorial: '0.3em',
        wide: '0.4em',
      },
      boxShadow: {
        hairline: '0 1px 0 0 rgba(201, 162, 39, 0.4)',
        goldsoft: '0 0 80px -30px rgba(201, 162, 39, 0.5)',
      },
      keyframes: {
        'gold-sweep': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'letter-rise': {
          '0%': { opacity: '0', transform: 'translateY(1em)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'orbit-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'grain-flicker': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-1%, 1%)' },
          '40%': { transform: 'translate(1%, -1%)' },
          '60%': { transform: 'translate(-1%, -1%)' },
          '80%': { transform: 'translate(1%, 1%)' },
        },
      },
      animation: {
        'gold-sweep': 'gold-sweep 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'letter-rise': 'letter-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        marquee: 'marquee 28s linear infinite',
        'orbit-slow': 'orbit-slow 60s linear infinite',
        'grain-flicker': 'grain-flicker 0.6s steps(4) infinite',
      },
    },
  },
  plugins: [],
}
