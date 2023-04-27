const plugin = require("tailwindcss/plugin");

const tokens = require("./style-dictionary/build/js/tokens");
const colorTokens = Object.values(tokens.color);
const colors = new Object();
colorTokens.forEach((el) => {
  colors[[el.attributes.type]] = el.value;
});

const themeColors = {
  ...colors,
  primary: colors["aqua-500"],
  secondary: colors["yellow-500"],
  tertiary: colors["orange-500"],
  cream: colors["yellow-50"],
  primarydark: colors["aqua-700"],
  primaryextradark: colors["aqua-800"],
  dark: colors["aqua-850"],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Toggle dark-mode based on class or data-mode=”dark”
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    colors: {
      ...themeColors,
      header: themeColors["dark"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        neutra2: ["NEUTRA2"],
        aktiv: ["aktiv"],
        specialelite: ["specialelite"],
      },
    },
  },
  plugins: [],
};
