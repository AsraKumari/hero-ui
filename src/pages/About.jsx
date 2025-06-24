import React from "react";
import Timeline from "../components/Timeline";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <main id="about" className="bg-black text-white">
      {/* ========== Hero Heading Section ========== */}
      <section className="relative py-24 px-6 text-center bg-gradient-to-t from-purple-800/40 to-transparent">
        <h2 className="text-5xl font-extrabold mb-6 text-white">About Us</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          Welcome to our creative space! We’re a passionate team of developers,
          designers, and visionaries dedicated to crafting modern digital
          experiences. With a strong belief in clean design and seamless user
          interfaces, we turn ideas into reality—one pixel at a time. Our
          journey is built on curiosity, collaboration, and continuous learning.
        </p>
      </section>

      {/* ========== Our Journey & Team Section ========== */}
      <section>
        <Timeline />
        <TeamSection />
      </section>
    </main>
  );
};

export default About;
