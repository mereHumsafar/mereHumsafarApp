/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#d90429",     
        secondary: "#edf2f4",         
      },
    },
  },
  plugins: [],
}
