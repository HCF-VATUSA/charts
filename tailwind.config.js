/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{fs,html,js}"],
  theme: {
    extend: {
      colors: {
        hawaii: {
          orient: "#005883",
          teal: "#008799",
          bluegreen: "#08B6A0",
          panache: "#EAF6ED",
          beige: "#E7D8C4",
          shimmer: "#D5BFBB",
        },
      },
    },
  },
  plugins: [],
}

