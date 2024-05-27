/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'display': ['Poppins','sans-serif'],
        'body' : ['Inter','sans-serif']
      },
      colors: {
        dark_purple: "#7F00FF",
        btn_primary: "#7e7ee3",
        heading_color: "#abd9d9",
      }
    },
  },
  plugins: [],
}