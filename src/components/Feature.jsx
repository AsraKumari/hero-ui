import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { features } from "../data/featureData";

const Feature = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="feature"
      className="relative w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Responsive Background Gradients */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] lg:w-[600px] lg:h-[450px] bg-gradient-to-bl from-purple-600 via-pink-500 to-indigo-600 opacity-25 blur-[100px] sm:blur-[120px] rounded-full z-0 -rotate-45 pointer-events-none" />

      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] sm:w-[500px] sm:h-[400px] lg:w-[600px] lg:h-[450px] bg-gradient-to-tr from-pink-500 via-purple-600 to-indigo-600 opacity-25 blur-[100px] sm:blur-[120px] rounded-full z-0 rotate-45 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 px-2 sm:px-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Powerful{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Core Features
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Unlock the power of seamless performance, futuristic design, and secure technology that evolves with your needs.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative group p-1"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Desktop-only Glass Hover Effect */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="glassEffect"
                    className="absolute inset-0 hidden md:block rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-lg z-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.4 } }}
                    exit={{ opacity: 0, transition: { duration: 0.3 } }}
                  />
                )}
              </AnimatePresence>

              {/* Card Content */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 h-full border border-white/10 hover:border-purple-500/40 transition cursor-pointer">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4">
                  <Lottie animationData={feature.icon} loop={true} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
