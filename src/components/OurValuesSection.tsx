import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils"; 


interface OurValuesSectionProps {
  items: {
    id: string;
    title: string;
    description: string;
  }[];
}

const OurValuesSection: React.FC<OurValuesSectionProps> = ({ items }) => {
  return (
    <section className="py-16 bg-black text-white px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10">Our Values</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            <motion.div
              layoutId="hover"
              className="absolute inset-0 z-0 rounded-xl bg-gradient-to-tr from-purple-600/20 to-pink-600/10 opacity-0 group-hover:opacity-100 transition duration-300"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurValuesSection;
