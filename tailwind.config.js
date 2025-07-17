/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'], // ✅ Clean modern font
      },
      keyframes: {
        // ✨ Fade in keyframes
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        cardShine: {
          "0%":   { transform: "translateX(-120%) rotate(-12deg) scale(1.1)", opacity: "0" },
          "10%":  { opacity: "0.9" },
          "80%":  { opacity: "0.9" },
          "100%": { transform: "translateX(180%) rotate(-12deg) scale(1.1)", opacity: "0" },
        },
      },
      animation: {
        fade: "fadeIn 1s ease-in-out forwards",
        'fade-in-slow': "fadeIn 2s ease-out",
        'fade-in-up': "fadeInUp 1s ease-out",
        cardShine: "cardShine 1s cubic-bezier(.4,0,.2,1) forwards",
      },
      backgroundImage: {
        // 🎨 Radial background helper (if needed)
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  // ✅ I've added the required typography plugin here
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
