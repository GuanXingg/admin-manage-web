/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screen: {
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      mobile: { raw: '(max-width: 999px) and (orientation: landscape)' },
    },
    extend: {
      colors: {
        primary: '#000',
        secondary: '#fff',
        'text-second': 'rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        5: '0.5rem',
        10: '1rem',
        15: '1.5rem',
        20: '2rem',
        25: '2.5rem',
        30: '3rem',
        35: '3.5rem',
        40: '4rem',
        45: '4.5rem',
        50: '5rem',
        60: '6rem',
        80: '8rem',
        100: '10rem',
      },
      fontSize: {
        12: '1.2rem',
        13: '1.3rem',
        14: '1.4rem',
        15: '1.5rem',
        16: '1.6rem',
        18: '1.8rem',
        20: '2rem',
        22: '2.2rem',
        24: '2.4rem',
        25: '2.5rem',
        26: '2.6rem',
        28: '2.8rem',
        30: '3rem',
        35: '3.5rem',
        40: '4rem',
      },
      borderRadius: {
        2: '0.2rem',
        5: '0.5rem',
        10: '1rem',
      },
    },
  },
  plugins: [],
};