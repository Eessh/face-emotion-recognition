module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          1: "#FFEDD3",
          2: "#FCD2D1"
        },
        fg: {
          1: "#FE8F8F",
          2: "#FF5C58"
        }
      },
      fontFamily: {
        dmMono: ["DM Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
