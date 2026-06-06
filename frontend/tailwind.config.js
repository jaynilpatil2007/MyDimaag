/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          300: "#e0e7fe",
          500: "#615FFF",
          600: "#5046e4"
        },
        blue: {
          500: "#2B7FFF"
        },
        violet: {
          500: "#8E51FF"
        },
        sky: {
          500: "#00A6F4"
        },
        teal: {
          500: "#00BBA7"
        },
        orange: {
          500: "#FF6900"
        },
        green: {
          500: "#00C950"
        },
        gray: {
          100: "#FAFAFA",
          200: "#E4E4E7",
          400: "#71717B"
        }
      }
    },
  },
  plugins: [],
}

