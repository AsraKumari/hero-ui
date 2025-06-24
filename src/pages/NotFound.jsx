import React from "react";
import { FaRocket, FaReact, FaBriefcase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";

const timelineData = [
  {
    date: "2023",
    title: "Started Learning Frontend",
    description:
      "My journey began with basic HTML, CSS, and a sprinkle of JavaScript. I was curious how websites worked and slowly fell in love with UI building.",
    icon: <PiStudentDuotone size={28} />,
  },
  {
    date: "June 2024",
    title: "Learnt React & Tailwind",
    description:
      "Discovered the magic of components with React and crafted beautiful UIs with Tailwind. This phase was full of mini projects and exploration.",
    icon: (
      <div className="flex gap-1">
        <FaReact size={22} />
        <SiTailwindcss size={22} />
      </div>
    ),
  },
  {
    date: "Early 2024",
    title: "Built My Portfolio",
    description:
      "Designed & deployed Orchid Aura (flower shop) and Hero UI using Vite + GitHub Pages. Gained confidence in real-world workflows.",
    icon: <FaRocket size={22} />,
  },
  {
    date: "June 2025",
    title: "Joined TechCognita Internship",
    description:
      "Got selected for a React + Tailwind internship. Working on live UI/UX tasks, improving designs, animations, and real problem solving.",
    icon: <FaBriefcase size={22} />,
  },
];

const Timeline = () => {
  return (
    <div className="min-h-screen bg-[#0a0a15] py-20 px-4 sm:px-6 lg:px-20 text-white">
      <div className="relative border-l-2 border-purple-700 ml-8">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-16 relative pl-8">
            {/* Centered Dot */}
            <span className="absolute left-[-1.15rem] top-6 w-4 h-4 rounded-full bg-purple-500 border-[3px] border-[#0a0a15] shadow-md shadow-purple-500/30 z-10" />

            {/* Glass Card */}
            <div className="bg-white/5 backdrop-blur-md border border-purple-300/20 rounded-xl p-5 shadow-md hover:shadow-purple-500/20 transition-shadow duration-300">
              <div className="text-sm text-purple-400 mb-1">{item.date}</div>
              <div className="text-lg font-semibold flex items-center gap-2 text-purple-100">
                {item.icon}
                {item.title}
              </div>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
