/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#050506',
          800: '#0a0a0c',
          700: '#101015',
          600: '#16161d',
          500: '#1d1d26',
        },
        royal: {
          DEFAULT: '#7c3aed',
          deep: '#4c1d95',
          mid: '#6d28d9',
          light: '#a78bfa',
          glow: '#8b5cf6',
        },
        gold: {
          DEFAULT: '#d8b25a',
          soft: '#e7cd8f',
          deep: '#b8902f',
        },
        haze: '#a5a3b0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      boxShadow: {
        glow: '0 0 60px -12px rgba(124, 58, 237, 0.55)',
        'glow-lg': '0 0 120px -20px rgba(124, 58, 237, 0.6)',
        gold: '0 0 50px -14px rgba(216, 178, 90, 0.55)',
        card: '0 24px 60px -28px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a78bfa 100%)',
        'gold-gradient': 'linear-gradient(135deg, #b8902f 0%, #e7cd8f 50%, #d8b25a 100%)',
        'radial-glow': 'radial-gradient(60% 60% at 50% 40%, rgba(124,58,237,0.28) 0%, rgba(5,5,6,0) 70%)',
      },
      keyframes: {
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'scroll-cue': {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '40%': { opacity: '1' },
          '100%': { transform: 'translateY(14px)', opacity: '0' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 8s ease infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'scroll-cue': 'scroll-cue 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
