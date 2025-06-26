import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import valueAnimation from "../assets/value.json";
import { valuesData } from "../data/valuesData";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OurValuesSection = () => {
  const [showPoints, setShowPoints] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("values-section");
      const rect = section?.getBoundingClientRect();
      const isScrollingDown = window.scrollY > lastScrollY;

      if (rect && isScrollingDown && !showPoints) {
        if (rect.top < window.innerHeight - 100) {
          setShowPoints(true);
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, showPoints]);

  return (
    <section id="values-section" className="relative dark:bg-black py-20 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute left-0 top-0 w-[400px] h-[300px] bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-transparent blur-[100px] z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          What <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Drives Us</span>
        </h2>
        <p className="text-zinc-300 text-lg">
          These aren’t just words — they’re the principles that fuel our work, our team, and the solutions we craft every day.
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16">
        {/* Left: Values List with Animation */}
        <div className="w-full lg:w-1/2 space-y-6">
          {valuesData.map((value, index) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, x: -30 }}
              animate={showPoints ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex gap-4 items-start"
            >
              <CheckCircle className="w-6 h-6 text-purple-400 mt-1 shrink-0" />
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">
                  {value.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Lottie Animation */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Lottie
            animationData={valueAnimation}
            loop
            className="w-full max-w-lg lg:max-w-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
