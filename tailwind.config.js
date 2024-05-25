/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "white-alpha-0": "rgba(255, 255, 255, 0)",
        "sand-color": "#dfd3c3",
      },
    },
  },
  plugins: [],
};
