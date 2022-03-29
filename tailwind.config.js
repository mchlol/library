module.exports = {
  content: [
    './index.html'
],

  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"), 
    require("daisyui")
  ],

  daisyui: {
    themes: ["cupcake", "dark"],
  },
}