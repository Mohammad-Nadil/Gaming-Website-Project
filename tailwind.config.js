/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#15181D",
        "secondary-bg": "#1E2127",
        primary: "#8A8B8E",
        "Gr-start": "#00DBDE",
        "Gr-end": "#FC00FF",
      },
    },
    fontFamily: {
      openSans: ['"Open Sans"', "sans-serif"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
