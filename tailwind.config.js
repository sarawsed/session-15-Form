/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    screens: {
      mobile: "321px",
      tablet: "426px",
      desctop: "769px",
    },
    extend: {
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [],
};
