module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      colors: {
        custom__tx: "#ff9c6c",
        custom__border_c: "#ff9c6c",
        custom__bg: "#020202"
      }
    }
  },
  variants: {
    borderWidth: ["hover"]
  },
  plugins: []
};
