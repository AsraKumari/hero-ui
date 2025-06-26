import React from "react";
import timelineData from "../data/timelineData.jsx";
import { motion } from "framer-motion";

const Timeline = () => {
  return (
    <section className="relative bg-black pt-10 pb-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-purple-600/30 via-purple-500/20 to-purple-800/30 rounded-full blur-[140px] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading & Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Tracing <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Our Legacy</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A glimpse into the milestones that defined our path — from small beginnings to transformative achievements, our timeline reflects growth, passion, and progress.
          </p>
        </motion.div>

        {/* Grid-Based Card Layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-purple-300/20 backdrop-blur-xl rounded-2xl p-6 shadow-md hover:shadow-purple-500/30 transition-all duration-300"
            >
              <div className="text-sm text-purple-400 font-medium mb-2">
                {item.date}
              </div>
              <div className="text-xl font-semibold flex items-center gap-3 text-white">
                {item.icon}
                {item.title}
              </div>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
