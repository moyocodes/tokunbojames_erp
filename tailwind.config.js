module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#291770",
          dark: "#251565",
          darker: "#1d104e",
          light: "#3e2e7e",
          lighter: "#695d9b",
        },
        secondary: {
          DEFAULT: "#EB3237",
          dark: "#d42d32",
          darker: "#a52327",
          light: "#ed474b",
          lighter: "#f17073",
        },
      },
      width: {
        "header-full": "calc(100vw - 3.5rem)",
        "header": "calc(100vw - 15rem)",
      },
      maxWidth: {
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
