/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fontColor: '#957554',
        gold: '#DFAA5B'
      },
      backgroundImage: {
        'heroImg': "url(src/assets/hero.png)"
      }
    },
  },
  plugins: [],
}

