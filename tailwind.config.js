const { default: daisyui } = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "black-alpha": "rgba(0, 0, 0, 0.9)",
        "paragraph-color": "#1297bd",
        "grey-color": "#f3f1f1",
        "story-color": "rgba(26, 215, 219,0.5)",
      },
      maxHeight: {
        "swiper-silde": "36em",
      },
      colors: {
        "brown-normal": "#5f2f14",
        "blue-normal": "#1297bd",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  plugins: [require("daisyui")],
};
