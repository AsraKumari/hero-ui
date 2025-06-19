/** @type {import('tailwindcss').Config} */
// This line helps with auto-complete and type-checking

export default {
  content: [
    // Tells Tailwind to scan these files for class names
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adding a custom font family called 'Outfit'
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },

      // Defining keyframes for the card shine animation
      keyframes: {
        cardShine: {
          "0%": { transform: "translateX(-100%) rotate(-12deg) scale(1.5)" },
          "100%": { transform: "translateX(200%) rotate(-12deg) scale(1.5)" },
        },
      },

      // Creating an animation class using the keyframes above
      animation: {
        cardShine: "cardShine 1s ease-in-out forwards",
      },

      // Adding support for radial background gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },

  // No extra Tailwind plugins added for now
  plugins: [],
};
