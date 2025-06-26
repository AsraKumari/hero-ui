import React from "react";
import { pricingPlans } from "../data/pricingData";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="w-full bg-black text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Simple and <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Affordable Pricing</span> Plans
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Start tracking and improving your finance management
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.8 }}
            className={`relative group p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-white/5 transition-all overflow-hidden shadow-lg hover:shadow-2xl ${
              plan.highlight ? "ring-2 ring-purple-400" : ""
            }`}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md transform -rotate-12 scale-150 translate-x-[-100%] group-hover:animate-cardShine" />
            </div>

            {/* Tag Badge */}
            {plan.tag && (
              <span className="absolute top-4 right-4 bg-purple-600 text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                {plan.tag}
              </span>
            )}

            {/* Title + Price */}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-sm font-medium text-gray-400">/month</span>
            </p>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-full font-medium transition duration-300 ${
                plan.highlight
                  ? "bg-orange-500 text-white"
                  : "bg-white/10 text-white border border-white/20 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700"
              }`}
            >
              {plan.button}
            </button>

            {/* Features */}
            <div className="mt-6 text-left">
              <p className="uppercase text-xs font-bold text-gray-400 mb-2">
                Features
              </p>
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;