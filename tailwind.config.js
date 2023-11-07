/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "#4830B0",
        btnHover: "#c97b06",
      },
    },
  },
  plugins: [],
};
