// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bluish: "#3EC8C1",
        "light-buish": "#0EBAB1",
      },
      boxShadow: {
        "white-glow": "0 4px 15px 5px rgba(0, 0, 0, 0.5)", // Glowing white shadow
        "white-glow-hover": "0 0 25px 10px rgba(0, 0, 0, 0.9)",
        "glow-boder": "0 4px 15px 5px rgba(62, 200, 193, 0.5)",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInTop: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "slide-in-left": "slideInLeft 1s ease-out forwards",
        "slide-in-top": "slideInTop 1s ease-out forwards",
        "slide-in-right": "slideInRight 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
