/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paranoia: {
          950: '#060709',
          900: '#0c0d12',
          850: '#12141c',
          800: '#181b26',
          700: '#232738',
          600: '#353a52',
          500: '#4e5675',
          400: '#757f9e',
          300: '#a3abc2',
          200: '#cbd1df',
          100: '#e7eaf2',
        },
        crimson: {
          950: '#1f050b',
          900: '#330812',
          800: '#4d0b1c',
          700: '#6e0f27',
          600: '#941434',
          500: '#bf1a43',
          400: '#e6325f',
          300: '#f06286',
        },
        amber: {
          accent: '#e5a13c',
          dim: '#8f5f1c',
          glow: '#fcd34d',
        },
        spectral: {
          violet: '#3d2563',
          glow: '#7c3aed',
          faint: '#1f1633',
        }
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        gothic: ['"Cormorant Garamond"', 'Cinzel', 'serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'flicker': 'flicker 4s infinite',
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'subtle-drift': 'drift 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.98',
            filter: 'brightness(1)',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.45',
            filter: 'brightness(0.65)',
          },
        },
        drift: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
          '100%': { transform: 'translateY(0) scale(1)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
