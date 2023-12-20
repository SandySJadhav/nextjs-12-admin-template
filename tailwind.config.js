/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "#7e22ce",
        base: "#191C24",
        secondary: "#f2f2f2",
        sidebar: "#0f172a1a",
        pp: "#6A62D2",
        textboxbg: "#E5E8ED",
      },
      colors: {
        primary: "#7e22ce",
        base: "#191C24",
        danger: "#EB1616",
        pp: "#6A62D2",
        textboxbg: "#E5E8ED",
        textboxtext: "#A0A4AD",
      },
      textColor: {
        primary: "#7e22ce",
        base: "#191C24",
        pp: "#6A62D2",
        textboxtext: "#A0A4AD",
      },
      borderColor: {
        primary: "#7e22ce",
        base: "#0f172a1a",
      },
      placeholderColor: {
        textboxtext: "#A0A4AD",
      },
      ringColor: {
        pp: "#6A62D2",
      },
    },
  },
  plugins: [],
};
