import React from "react";
import { motion } from "framer-motion";

interface CardHoverEffectProps {
  items: {
    id: string;
    title: string;
    description: string;
    image?: string;
  }[];
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({ items }) => {
  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item) => (
        <motion.div
          key={item.id}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn(
            "rounded-xl p-6 backdrop-blur-md bg-white/5 border border-white/10 text-white",
            "relative overflow-hidden group cursor-pointer"
          )}
        >
          <div className="z-10 relative">
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            <p className="text-sm text-gray-300">{item.description}</p>
          </div>
          {/* Optional image */}
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              className="absolute bottom-0 right-0 w-20 opacity-10 group-hover:opacity-20 transition-opacity"
            />
          )}
          {/* Gradient hover glow */}
          <motion.div
            layoutId="hover"
            className="absolute inset-0 z-0 rounded-xl bg-gradient-to-tr from-purple-600/20 to-pink-600/10 opacity-0 group-hover:opacity-100 transition duration-300"
          />
        </motion.div>
      ))}
    </div>
  );
};
