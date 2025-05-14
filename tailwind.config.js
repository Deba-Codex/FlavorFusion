/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5B8C5A', // Roasted Green
          light: '#7BA87A',
          dark: '#4A7149',
        },
        secondary: {
          DEFAULT: '#7C4F20', // Charred Brown
          light: '#9A673A',
          dark: '#5E3A14',
        },
        accent: {
          DEFAULT: '#D94F30', // Tomato Red
          light: '#E37058',
          dark: '#B33D22',
        },
        highlight: {
          DEFAULT: '#F4B400', // Golden Yellow
          light: '#FFCA33',
          dark: '#D19A00',
        },
        background: {
          DEFAULT: '#FFF4E6', // Creamy Beige
          light: '#FFFAF2',
          dark: '#F5E6D0',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600')",
      },
    },
  },
  plugins: [],
};