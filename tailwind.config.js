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
      },
      animation: {
        fade: "fadeIn 1s ease-in-out forwards",
        'fade-in-slow': "fadeIn 2s ease-out",
        'fade-in-up': "fadeInUp 1s ease-out",
      },
      backgroundImage: {
        // 🎨 Radial background helper (if needed)
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
