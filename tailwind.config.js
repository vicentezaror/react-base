/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false,
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'],
      montserratAlternates: ['Montserrat Alternates', 'sans-serif'],
      bungee: ['Bungee', 'cursive'],
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        bisque: '#FFE8D1',
        primary: {
          lighter: '#c4ffff',
          light: '#9ceaef',
          DEFAULT: '#68C3D4',
          dark: '#568EA3',
          darker: '#125866',
        },
      },
    },
  },
  plugins: [],
}
