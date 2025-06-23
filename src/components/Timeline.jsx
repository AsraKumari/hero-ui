import React, { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2022",
    title: "Founded",
    description: "Our journey began with a vision to make digital experiences seamless and stunning.",
  },
  {
    year: "2023",
    title: "First Product Launch",
    description: "We released our first product, revolutionizing the way users interact with modern UIs.",
  },
  {
    year: "2024",
    title: "Hit 1000+ Users",
    description: "A major milestone—our platform reached over 1000 active users worldwide.",
  },
  {
    year: "2025",
    title: "Expanded Globally",
    description: "We took the leap and expanded operations globally, impacting lives across continents.",
  },
];

const Timeline = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !lineRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.min(
        Math.max((windowHeight - rect.top) / (windowHeight + rect.height), 0),
        1
      );

      lineRef.current.style.height = `${scrollProgress * 100}%`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-20 px-6">
      {/* Vertical line background */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-purple-800/30 rounded-full">
        {/* Filled growing line with NO glow */}
        <div
          ref={lineRef}
          className="absolute top-0 left-0 w-full bg-purple-500 transition-all duration-500 ease-in-out rounded-full"
          style={{ height: "0%" }}
        />
      </div>

      {/* Timeline Items */}
      <div className="flex flex-col gap-20 relative z-10">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`w-full flex flex-col items-center ${
                isLeft ? "sm:flex-row-reverse" : "sm:flex-row"
              } justify-between sm:items-start gap-6`}
            >
              <div className="sm:w-5/12 w-full text-white text-left">
                <div className="bg-purple-700/30 backdrop-blur-sm border border-purple-600 px-6 py-2 rounded-full font-semibold text-lg w-max mx-auto sm:mx-0">
                  {item.year}
                </div>
                <h4 className="text-xl font-bold text-purple-300 mt-4">{item.title}</h4>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
              <div className="hidden sm:flex sm:w-2/12 justify-center items-center">
                {/* Center dot only, no glow */}
                <div className="h-5 w-5 rounded-full bg-purple-600 border-4 border-white" />
              </div>
              <div className="sm:w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
