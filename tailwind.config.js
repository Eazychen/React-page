const { default: daisyui } = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "swiper-silde": "36em",
      },
      zIndex: {
        999: "999",
      },
    },
  },
  plugins: [require("daisyui")],
};
