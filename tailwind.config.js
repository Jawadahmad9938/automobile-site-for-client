/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,ts,jsx,tsx}"], // Update paths according to your project structure
  theme: {
    extend: {
      transitionProperty: {
        'transform': 'transform',
      },
      colors: {
        'blue-900': '#1a365d',
        'blue-700': '#2c5282',
        'blue-400': '#63b3ed',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        subheading: ['Roboto Condensed', 'sans-serif'],
        // Add more as needed
      },
    },
  },
  plugins: [],
}
