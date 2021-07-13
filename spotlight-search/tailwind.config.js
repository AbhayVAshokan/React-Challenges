module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        background: "url(assets/images/background.webp)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
