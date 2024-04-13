/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        vive_items_50:'##201c1c',
        vive_items:'#1F1F1F',
        vive_main:'#6655D7'
      }
    },
  },
  plugins: [],
}