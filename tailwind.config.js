/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'netflixRedColor': '#E50914'
      },
      backgroundColor: {
        'netRedColor': '#E50914',
        'inputcolor': '#333333',

      },
      width: {
        '18': '4.4rem',
        '22': '5.5rem'
      },
      height: {
        '18': '4.4rem',
        '120': '36rem',

      },
      borderWidth: {
        DEFAULT: '1.5px',
        '0': '0',
      },
      backgroundImage: {
        'home-netflix': "url('/src/Assets/netBackground.jpg')"

      },
    },
  },
  plugins: [],
}

