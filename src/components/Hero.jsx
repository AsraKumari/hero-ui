import React from "react";

// This is the Hero section of the webpage — it's usually the top part with main heading and CTA buttons
const Hero = () => {
  return (
    <section
      id="home" // This gives the section an ID so we can scroll to it from navbar links
      className="relative z-0 w-full px-8 pt-32 pb-20 bg-black text-white overflow-hidden"
    >
      {/* Purple glowing gradient added at the bottom to make the section visually appealing */}
      <div className="absolute bottom-[-120px] left-1/2 transform -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-r from-purple-500 via-purple-700 to-purple-500 opacity-30 rounded-full blur-[120px] z-0" />

      {/* Actual content of the hero section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
          Your complete platform for the web.
        </h1>

        {/* Sub-heading / paragraph below the main heading */}
        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl">
          Vercel provides the developer tools and cloud infrastructure to build,
          scale, and secure a faster, more personalized web.
        </p>

        {/* Two action buttons (like call-to-action) */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* First button - usually for starting or signup */}
          <button className="px-6 py-3 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-full text-white text-lg transition border border-white/20">
            Get Started
          </button>

          {/* Second button - explore more features */}
          <button className="px-6 py-3 backdrop-blur-xl bg-white/10 hover:bg-white/20 rounded-full text-white text-lg transition border border-white/20">
            Explore More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
