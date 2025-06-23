import React from "react";
import Timeline from "../components/Timeline";

const About = () => {
  return (
    <main className="bg-black text-white">
      {/* ========== Heading Section ========== */}
      <div className="relative h-fit w-full bg-gradient-to-t from-purple-800/50 to-transparent py-24 px-6 text-center">
        <h2 className="text-5xl font-extrabold text-white mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          Welcome to our creative space! We’re a passionate team of developers, designers, and visionaries dedicated to crafting modern digital experiences. With a strong belief in clean design and seamless user interfaces, we turn ideas into reality—one pixel at a time. Our journey is built on curiosity, collaboration, and continuous learning.
        </p>
      </div>

      {/* ========== Main Content ========== */}
      <div className="px-6 py-12 space-y-24">
        {/* ========== Journey Timeline Section ========== */}
        <section className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Journey</h3>
          <Timeline />
        </section>

        {/* ========== Team Section ========== */}
        <section className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Meet Our Team</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Asra", role: "Frontend Dev" },
              { name: "John", role: "UI/UX Designer" },
              { name: "Emma", role: "Product Manager" },
              { name: "Liam", role: "Backend Dev" },
            ].map((member, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg backdrop-blur-md">
                <div className="w-20 h-20 mx-auto mb-4 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl">
                  {member.name[0]}
                </div>
                <h4 className="text-lg font-semibold text-white">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ========== Values Section ========== */}
        <section className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Our Values</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {[
              { title: "Innovation", desc: "We embrace creativity and push boundaries." },
              { title: "Transparency", desc: "Open communication builds trust." },
              { title: "Learning", desc: "We grow through continuous learning." },
              { title: "Ownership", desc: "We take pride in what we build." },
            ].map((val, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-lg">
                <div className="w-12 h-12 mx-auto bg-purple-600 rounded-full text-white flex items-center justify-center text-xl font-bold mb-3">
                  {val.title[0]}
                </div>
                <h4 className="text-lg font-semibold text-white">{val.title}</h4>
                <p className="text-gray-400 text-sm mt-2">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
