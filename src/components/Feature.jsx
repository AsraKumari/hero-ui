import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

// Importing all Lottie JSON icons
import rocket from "../assets/rocket.json";
import setting from "../assets/setting.json";
import global from "../assets/global.json";
import link from "../assets/link.json";
import graph from "../assets/graph.json";
import team from "../assets/team.json";

// Feature list with Lottie animations
const features = [
  {
    icon: rocket,
    title: "Fast Deployment",
    description: "Deploy your projects instantly with zero config setup.",
  },
  {
    icon: setting,
    title: "Built-in CI/CD",
    description: "Push your code and watch it go live automatically.",
  },
  {
    icon: global,
    title: "Global CDN",
    description: "Serve your apps worldwide with low latency.",
  },
  {
    icon: link,
    title: "Custom Domains",
    description: "Easily connect custom domains with SSL.",
  },
  {
    icon: graph,
    title: "Analytics",
    description: "Track performance and engagement out of the box.",
  },
  {
    icon: team,
    title: "Team Collaboration",
    description: "Work together with roles and permissions.",
  },
];

const Feature = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
   <section id="feature" className="relative w-full bg-black text-white py-20 overflow-hidden">

      {/* Soft Purple Gradient From Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-purple-600/20 to-transparent blur-2xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Core Features</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the powerful features that make our platform fast, reliable, and scalable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative group p-1"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Glass Effect */}
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.div
                    layoutId="glassEffect"
                    className="absolute inset-0 rounded-2xl bg-purple-500/10 border border-purple-500/20 backdrop-blur-lg"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.4, ease: "easeOut" },
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Actual Card */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm p-6 h-full border border-white/10 hover:border-purple-500/40 transition">
                <div className="w-16 h-16 mb-4">
                  <Lottie animationData={feature.icon} loop={true} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
