/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      screens: {
        mb: { min: "0", max: "767px" }
      },
      colors: {
        Lime: 'hsl(61, 70%, 52%)',
        Red: 'hsl(4, 69%, 50%)',
        White: 'hsl(0, 0%, 100%)',
        Slate_100: 'hsl(202, 86%, 94%)',
        Slate_300: 'hsl(203, 41%, 72%)',
        Slate_500: 'hsl(200, 26%, 54%)',
        Slate_700: 'hsl(200, 24%, 40%)',
        Slate_900: 'hsl(202, 55%, 16%)',
      }
    },
  },
  plugins: [],
}

