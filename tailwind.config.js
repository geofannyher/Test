/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        txtCol: "#EC9109",
        mainBg: "#4830B0",
        bgBtn: "#EC9109",
        btnHover: "#c97b06",
        bgBorder: "#3813D7",
        textSecond: "#A3A0AE",
        secondBg: "#6444F0",
      },
    },
  },
  plugins: [],
};
