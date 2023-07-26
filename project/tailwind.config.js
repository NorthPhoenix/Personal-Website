/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'wave': 'wave 5s ease-in-out infinite',
      },
      keyframes: {
        'wave': {
          '0%': { transform: 'translate(-50px, 50px) rotate(-45deg)' },
          '100%': { transform: 'translate(105vw, -105vh) rotate(-45deg)' },
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(ellipse at center, transparent 0%, #000 100%)',
        'wave': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.75), rgba(0, 0, 0, 0))',
        'lines-inverted': 'url("../public/images/lines-diagonal-transparent.png")',
        'nier-border': 'url("../public/design/border-nier.svg")',
      },
      backgroundSize: {
        80: '80px',
        100: '100px',
        120: '120px',
        140: '140px',
        160: '160px',
        180: '180px',
        200: '200px',
      },
      colors: {
        nier: {
          200: '#DCD8C0',
          300: '#D1CDB7',
          400: '#BAB5A1',
          700: '#454138',
        },
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'exodus-regular': ['"Exodus Regular"', 'serif'],
        'exodus-sharpen': ['"Exodus Sharpen"', 'serif'],
        'exodus-shino': ['"Exodus Shino"', 'serif'],
        'exodus-stencil': ['"Exodus Stencil"', 'serif'],
        'exodus-striped': ['"Exodus Striped"', 'serif'],
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
  ],
}


