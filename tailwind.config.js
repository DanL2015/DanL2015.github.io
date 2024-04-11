/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
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
        red: {
          light: "#db524e",
          DEFAULT: "#fa7970",
        },
        orange: "#faa356",
        green: "#7ce38b",
        lightblue: {
          light: "#2076d8",
          DEFAULT: "#a2d2fb",
        },
        blue: {
          light: "#0d33a5",
          DEFAULT: "#77bdfb",
        },
        purple: "#cea5fb",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
