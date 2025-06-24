import React from "react";
import timelineData from "../data/timelineData.jsx";

const Timeline = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-14 text-center">
          Our Journey
        </h2>

        <div className="flex flex-col gap-10 items-center">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="w-full bg-purple-100/5 backdrop-blur-lg border border-purple-300/20 rounded-xl p-6 shadow-md hover:shadow-purple-500/20 transition-all duration-300"
            >
              <div className="text-base text-purple-400 font-medium mb-1">{item.date}</div>
              <div className="text-xl font-semibold flex items-center gap-3 text-white">
                {item.icon}
                {item.title}
              </div>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
