/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      title: ['Syne Mono', "monospace"],
    },
    colors: {
      'primary-blue': "#01A4E9",
      white: "#ffffff",
      transparent: "transparent",
      dark: "rgb(2 6 23)",
      light: "rgb(30 41 59)"
    }
  },
  plugins: [],
}

