import React from "react";
import Timeline from "../components/Timeline";
import TeamSection from "../components/TeamSection";
import OurValuesSection from "../components/OurValuesSection";
import { valuesData } from "../data/valuesData";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import aboutAnimation from "../assets/about.json";

const About = () => {
  return (
    <main id="about" className="bg-black text-white">
      {/* ========== Hero Heading Section ========== */}
      <section className="relative pt-8 pb-20 px-6 overflow-hidden">
        {/* Radial Gradient BG */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.15),transparent_60%)] z-0" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-2xl pt-2"
          >
            <p className="uppercase text-sm tracking-widest text-purple-300 mb-4">
              Our Story & Purpose
            </p>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 leading-tight text-white">
              Empowering <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Creative Teams</span>
            </h2>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              We are more than just a team — we're a collaborative force passionate about turning visions into reality. With design thinking, clean code, and human-first interfaces, we craft experiences that leave a lasting impact.
            </p>

            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 text-lg font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition">
                Meet the Team
              </button>
              <button className="px-6 py-3 text-lg font-semibold rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
                Our Values
              </button>
            </div>
          </motion.div>

          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-lg pt-2"
          >
            <Lottie animationData={aboutAnimation} loop={true} />
          </motion.div>
        </div>
      </section>

      {/* ========== Our Journey & Team Section ========== */}
      <section>
        <Timeline />
        <TeamSection />
        <OurValuesSection items={valuesData} />
      </section>
    </main>
  );
};

export default About;