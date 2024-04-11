/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Gabarito", "Rubik", "Dosis"],
      mono: ["Iosevka"],
    },
    extend: {
      colors: {
        b0: "#0d1117",
        b1: "#161b22",
        b2: "#21262d",
        b3: "#89929b",
        b4: "#c6cdd5",
        b5: "#ecf2f8",
        red: "#fa7970",
        orange: "#faa356",
        green: "#7ce38b",
        lightblue: "#a2d2fb",
        blue: "#77bdfb",
        purple: "#cea5fb",
      },
      screens: {
        sm: "576px",
        md: "1000px",
        lg: "1400px",
      },
    },
  },
  plugins: [],
};
