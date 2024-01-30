import defaultTheme from "tailwindcss/defaultTheme"
 
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Barlow Semi Condensed", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xs: "400px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
