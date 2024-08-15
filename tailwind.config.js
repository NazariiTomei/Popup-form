/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mori: ['"PP Mori"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
      },
      fontSize: {
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "16px": "16px",
        "18px": "18px",
        "22px": "22px",
        "28px": "28px",
        "120px": "120px",
      },
      lineHeight: {
        "18px": "18px",
        "19.12px": "19.12px",
        "20.49px": "20.49px",
        "21.86px": "21.86px",
        "22px": "22px",
        "23.1px": "23.1px",
        "24px": "24px",
        "30.05px": "30.05px",
        "38.25px": "38.25px",
        "163.92px": "163.92px",
      },
      colors: {
        customBlue: "#5E48DB",
        darkGray: "#313234",
      },
    },
  },
  plugins: [],
};
