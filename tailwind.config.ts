import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#C41E3A',
          'red-dark': '#9e1830',
          black: '#0a0a0a',
          dark: '#111111',
          dark2: '#1a1a1a',
          dark3: '#222222',
          silver: '#B8BCC8',
          'silver-light': '#d4d8e2',
        },
      },
      fontFamily: {
        title: ['var(--font-rajdhani)', 'sans-serif'],
        body:  ['var(--font-inter)', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-14px)' },
        },
        pulseRing: {
          '0%, 100%': { transform: 'scale(1)',   opacity: '0.6' },
          '50%':       { transform: 'scale(1.1)', opacity: '1' },
        },
        pulseWa: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.6)' },
          '60%':       { boxShadow: '0 0 0 14px rgba(37,211,102,0)' },
        },
        orb1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':       { transform: 'translate(40px, -60px) scale(1.08)' },
          '66%':       { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':       { transform: 'translate(-50px, 40px) scale(1.05)' },
          '66%':       { transform: 'translate(30px, -20px) scale(0.92)' },
        },
        orb3: {
          '0%, 100%': { transform: 'translate(-50%, -50%) scale(1)' },
          '50%':       { transform: 'translate(-50%, -50%) scale(1.15)' },
        },
      },
      animation: {
        float:       'float 4s ease-in-out infinite',
        'pulse-ring': 'pulseRing 4s ease-in-out infinite',
        'pulse-wa':   'pulseWa 2s ease-out infinite',
        'orb-1':      'orb1 18s ease-in-out infinite',
        'orb-2':      'orb2 22s ease-in-out infinite',
        'orb-3':      'orb3 15s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
