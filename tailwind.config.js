module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        'lg': '1500px',
        'max-lg': '1840px',
        'mega-lg': '2500px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
