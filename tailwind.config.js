/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        black: {
          800: "#121212",
        },
        violet: {
          800: "#4630EB",
        },
      },
    },
  },
  plugins: [],
};
