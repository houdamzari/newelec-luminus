/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#E4E0E0",
        "textColor-grey": "#616161",
        "textColor-blue": "#2C8EFF",
        "textColor-lightGrey": "#B4B4B4",

        orange: "#EB7421",
      },
    },
  },
  plugins: [],
};
