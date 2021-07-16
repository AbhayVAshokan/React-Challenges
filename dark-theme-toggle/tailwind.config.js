module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        dark: {
          title: "#3B3B3B",
          innerBody: "#323232",
          outerBody: "#1E1E1E",
          dropDowns: "#656565",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
