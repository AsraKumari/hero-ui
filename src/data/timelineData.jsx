// src/data/timelineData.jsx
import { FaRocket, FaReact, FaBriefcase } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";

const timelineData = [
  
  {
    date: "June 2024",
    title: "Learnt React & Tailwind",
    description:
      "As I became confident with fundamentals, I started learning React for component-based development and Tailwind CSS for fast UI styling. This helped me build reusable UIs and responsive layouts. I also practiced routing, props, and state management.",
    icon: (
      <div className="flex gap-1">
        <FaReact size={20} />
        <SiTailwindcss size={20} />
      </div>
    ),
  },
  {
    date: "Early 2024",
    title: "Built My Portfolio",
    description:
      "I designed and developed two full projects — Orchid Aura (a flower shop landing page) and Hero UI (a creative landing page with particles and glassmorphism). I deployed both to GitHub Pages with proper routing and responsiveness.",
    icon: <FaRocket size={20} />,
  },
  {
    date: "June 2025",
    title: "Joined TechCognita Internship",
    description:
      "I was selected as a frontend intern at TechCognita where I worked on real-world UI tasks. I fixed responsiveness issues, improved mobile nav, created animated sections like Pricing, Timeline, and About Us — using React, Tailwind, and clean component structure.",
    icon: <FaBriefcase size={20} />,
  },
];

export default timelineData;
