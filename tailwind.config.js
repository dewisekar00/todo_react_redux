/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        customPink: '#FF9E90', 
   
      },
      fontFamily: {
        'serif': ['Inria Serif', 'serif'],
      },
    },
  },
  plugins: [],
}