import React from 'react';
import heroImg from '../assets/img.png';

const Hero = () => {
  return (
    <section className="w-full px-6 py-20 md:py-28 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Text first in all views */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Build Your Portfolio Like a Pro
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Showcase your work, skills, and passion in one place.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition">
            Get Started
          </button>
        </div>

        {/* Image second in all views (mobile below text) */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-[500px] md:max-w-[700px] drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
