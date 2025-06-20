/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      keyframes: {
        cardShine: {
          "0%": { transform: "translateX(-100%) rotate(-12deg) scale(1.5)" },
          "100%": { transform: "translateX(200%) rotate(-12deg) scale(1.5)" },
        },
      },
      animation: {
        cardShine: "cardShine 1.4s ease-in-out forwards",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
