/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-white',
    'bg-black',
    'bg-transparent',
    { pattern: /^bg-.*-(50|100|200|300|400|500|600|700|800|900)/, }
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
        "size-80": '80px',
        "size-100": '100px',
        "size-120": '120px',
        "size-140": '140px',
        "size-160": '160px',
        "size-180": '180px',
        "size-200": '200px',
      },
      colors: {
        nier: {
          200: '#DCD8C0',
          300: '#D1CDB7',
          350: '#CCC8B1',
          400: '#BAB5A1',
          700: '#454138',
        },
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'Arial', defaultTheme.fontFamily.sans],
        'exodus-regular': ['"Exodus Regular"', defaultTheme.fontFamily.serif],
        'exodus-sharpen': ['"Exodus Sharpen"', defaultTheme.fontFamily.serif],
        'exodus-stencil': ['"Exodus Stencil"', defaultTheme.fontFamily.serif],
        'exodus-striped': ['"Exodus Striped"', defaultTheme.fontFamily.serif],
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    require('tailwindcss-animated')
  ],
}


