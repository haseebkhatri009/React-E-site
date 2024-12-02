/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm-custom': '500px',   // Custom breakpoint at 500px
        'md-custom': '900px',   // Custom breakpoint at 900px
        '960': '960px',
        '1200': '1200px',
      },
    },
  },
  plugins: [],
}

