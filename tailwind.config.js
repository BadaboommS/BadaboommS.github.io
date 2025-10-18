/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chalk: ["chalk", "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: ["font-chalk"],
};