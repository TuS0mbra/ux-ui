/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#06040c',
          800: '#0a0815',
          700: '#0f0c1f',
          600: '#15112a',
          500: '#1d1838',
        },
        royal: {
          DEFAULT: '#7c3aed',
          deep: '#4c1d95',
          mid: '#6d28d9',
          light: '#a78bfa',
          glow: '#8b5cf6',
          pale: '#c4b5fd',
        },
        gold: {
          DEFAULT: '#d4af37',
          soft: '#e7cd8f',
          deep: '#a08020',
          foil: '#f5e6a8',
        },
        haze: {
          DEFAULT: '#a89dc2',
          deep: '#6b6080',
          soft: '#d1c8e0',
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
        glow: '0 0 80px -10px rgba(139, 92, 246, 0.6)',
        'glow-lg': '0 0 140px -20px rgba(139, 92, 246, 0.7)',
        gold: '0 0 70px -14px rgba(212, 175, 55, 0.55)',
        'gold-lg': '0 0 120px -20px rgba(212, 175, 55, 0.6)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)',
        'gold-gradient': 'linear-gradient(135deg, #a08020 0%, #f5e6a8 50%, #d4af37 100%)',
        'aurora':
          'radial-gradient(45% 60% at 30% 30%, rgba(124,58,237,0.45), transparent 60%), radial-gradient(35% 45% at 75% 70%, rgba(212,175,55,0.18), transparent 65%), radial-gradient(60% 50% at 50% 50%, rgba(76,29,149,0.55), transparent 70%)',
      },
      keyframes: {
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'orbit-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
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
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'orbit-slow': 'orbit-slow 80s linear infinite',
        marquee: 'marquee 32s linear infinite',
        'grain-flicker': 'grain-flicker 0.6s steps(4) infinite',
      },
    },
  },
  plugins: [],
}
