/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#EB5528",
          light: "#f49f86",
          dark: "#9f300f",
        },
      },
    },
  },
  plugins: [],
};
