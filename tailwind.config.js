/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "white-alpha-0": "rgba(255, 255, 255,0.1)",
        "paragraph-color": "#1297bd",
        "grey-color": "#f3f1f1",
        "story-color": "#1ad7db",
        "light-grey-color": "#364968",
      },
      maxHeight: {
        "swiper-silde": "36em",
      },
      colors: {
        "brown-normal": "#5f2f14",
      },
    },
  },
  plugins: [],
};
