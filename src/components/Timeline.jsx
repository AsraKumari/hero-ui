import React, { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2022",
    title: "Founded",
    description:
      "Our journey began with a vision to make digital experiences seamless and stunning.",
  },
  {
    year: "2023",
    title: "First Product Launch",
    description:
      "We released our first product, revolutionizing the way users interact with modern UIs.",
  },
  {
    year: "2024",
    title: "Hit 1000+ Users",
    description:
      "A major milestone—our platform reached over 1000 active users worldwide.",
  },
  {
    year: "2025",
    title: "Expanded Globally",
    description:
      "We took the leap and expanded operations globally, impacting lives across continents.",
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
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-20 px-4 sm:px-6">
      {/* Background Line */}
      <div className="absolute top-0 h-full w-1 left-6 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 rounded-full bg-white/10 z-0" />

      {/* Glowing Progress Line */}
      <div
        ref={lineRef}
        className="absolute top-0 w-1 left-6 sm:left-1/2 -translate-x-0 sm:-translate-x-1/2 rounded-full z-10 transition-all duration-500 ease-in-out"
        style={{
          height: "0%",
          background: "linear-gradient(to bottom, #a855f7, #ffffff)",
          boxShadow: "0 0 14px 3px rgba(168, 85, 247, 0.6)",
        }}
      />

      {/* Timeline Items */}
      <div className="flex flex-col gap-20 relative z-20">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                isLeft ? "sm:flex-row-reverse" : "sm:flex-row"
              } gap-6`}
            >
              {/* Removed mobile-only circle completely */}

              {/* Content */}
              <div
                className={`w-full sm:w-5/12 flex flex-col items-end text-right pr-2 sm:pr-0`}
              >
                <div className="bg-purple-700/30 backdrop-blur border border-purple-500 px-6 py-2 rounded-full font-semibold text-white text-sm w-max mr-0">
                  {item.year}
                </div>
                <h4 className="text-xl font-bold text-purple-300 mt-4">{item.title}</h4>
                <p className="text-gray-400 mt-2 max-w-[90%] sm:max-w-full">{item.description}</p>
              </div>

              {/* Desktop-only Dot */}
              <div className="hidden sm:flex sm:w-2/12 justify-center items-center">
                <div className="relative">
                  <div className="h-5 w-5 rounded-full bg-purple-600 border-4 border-white relative z-10" />
                  <div className="absolute top-0 left-0 h-5 w-5 rounded-full bg-purple-600 opacity-40 animate-ping" />
                </div>
              </div>

              {/* Spacer */}
              <div className="hidden sm:block sm:w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
