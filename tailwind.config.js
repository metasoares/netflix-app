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
        'netRedColor': '#E50914'

      },
      width: {
        '18': '4.4rem',
      },
      height: {
        '18': '4.4rem',
      },
      borderWidth: {
        DEFAULT: '1.5px',
        '0': '0',
      }
    },
  },
  plugins: [],
}

