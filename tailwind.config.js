/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        aqua: {
          DEFAULT: '#7fffd4',
          dim: 'rgba(127,255,212,0.10)',
          glow: 'rgba(127,255,212,0.25)',
        },
        coral: '#ff6b8a',
        gold: '#ffd166',
        dark: {
          bg:      '#0a0a0f',
          bg2:     '#0e0e16',
          surface: '#111118',
          card:    '#16161f',
          border:  '#2a2a38',
          muted:   '#7a7a96',
        },
      },
      keyframes: {
        fadeDown: {
          from: { opacity: 0, transform: 'translateY(-16px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        pulse2: {
          '0%,100%': { opacity: 1, transform: 'scale(1)' },
          '50%':     { opacity: 0.3, transform: 'scale(0.7)' },
        },
        scrollLine: {
          '0%':   { left: '-100%' },
          '100%': { left: '100%' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%,100%': { boxShadow: '0 0 20px rgba(127,255,212,0.25)' },
          '50%':     { boxShadow: '0 0 40px rgba(127,255,212,0.5), 0 0 80px rgba(127,255,212,0.15)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        spin1: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        spin2: {
          from: { transform: 'rotate(360deg)' },
          to:   { transform: 'rotate(0deg)' },
        },
        reveal: {
          from: { opacity: 0, transform: 'translateY(28px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        borderGlow: {
          '0%,100%': { borderColor: 'rgba(127,255,212,0.2)' },
          '50%':     { borderColor: 'rgba(127,255,212,0.8)' },
        },
      },
      animation: {
        fadeDown:   'fadeDown 0.8s ease both',
        fadeUp:     'fadeUp 0.8s ease both',
        pulse2:     'pulse2 2s infinite',
        float:      'float 4s ease-in-out infinite',
        glowPulse:  'glowPulse 3s ease-in-out infinite',
        shimmer:    'shimmer 3s linear infinite',
        spin1:      'spin1 8s linear infinite',
        spin2:      'spin2 12s linear infinite',
        borderGlow: 'borderGlow 3s ease infinite',
        reveal:     'reveal 0.65s ease both',
      },
      backgroundSize: {
        '200': '200%',
      },
    },
  },
  plugins: [],
}