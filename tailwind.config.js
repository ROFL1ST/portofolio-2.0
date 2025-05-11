/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "night-sky": "radial-gradient(circle at bottom, #001524, #000C19)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
