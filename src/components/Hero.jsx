import React from "react";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import heroAnimation from "../assets/hero.json";

const Hero = () => {
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full bg-gradient-to-br from-black via-[#0a001f] to-black text-white overflow-hidden px-6 pt-10 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Glowing background blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-purple-700 via-purple-500 to-indigo-600 opacity-20 blur-[160px] rounded-full z-0 rotate-45" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-gradient-to-br from-pink-600 via-purple-500 to-blue-500 opacity-15 blur-[120px] rounded-full z-0 rotate-12" />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:pl-12 relative z-10">
        {/* Text */}
        <div className="text-center lg:text-left flex-1 space-y-6">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase text-sm tracking-widest text-purple-400 font-medium"
          >
            The Future of Web Development
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            Empower Your Web <br />
            <span className="bg-gradient-to-r from-purple-500 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Development Journey
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-xl"
          >
            Discover a platform that empowers developers to build blazing-fast, modern web
            experiences. Our tools, infrastructure, and support are crafted to scale with
            your ambitions. Join a future built for speed, reliability, and creativity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <button
              onClick={() => handleScroll("#pricing")} 
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full shadow-xl hover:shadow-pink-400/40 transition-all duration-300"
            >
              Get Started
            </button>
            <button
              className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full text-white border border-white/10 transition"
            >
              Explore More
            </button>
          </motion.div>
        </div>

        {/* Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-1 max-w-2xl w-full relative"
        >
          <div className="absolute -inset-4 bg-purple-400/10 rounded-3xl blur-xl z-0" />
          <div className="relative z-10">
            <Lottie animationData={heroAnimation} loop className="w-full h-full" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => handleScroll("#pricing")} 
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl animate-bounce cursor-pointer hover:text-purple-400"
        title="Scroll Down"
      >
        ↓
      </motion.div>
    </section>
  );
};

export default Hero;
