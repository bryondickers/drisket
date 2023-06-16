/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        blaack:"hsl(var(--black))",
        goldenBrown:"hsl(var(--golden))",
        blueBg:"hsl(var(--blueish))",
        white:"hsl(var(--white))"
      },
      fontFamily: {
        fontJost: "'Jost', sans-serif",
        fontForum:"'Forum', cursive",
      }
    },
  },
  plugins: [],
}

