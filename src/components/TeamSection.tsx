import React, { useEffect, useState } from "react";
import { team } from "../data/teamData";
import Avatar from "react-avatar";

const TeamSection = () => {
  const [showCards, setShowCards] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("team-section");
      const rect = section?.getBoundingClientRect();
      const isScrollingDown = window.scrollY > lastScrollY;

      if (rect && isScrollingDown && !showCards) {
        if (rect.top < window.innerHeight - 100) {
          setShowCards(true);
        }
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, showCards]);

  return (
    <section id="team-section" className="relative bg-black pt-14 pb-20 px-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-gradient-to-br from-purple-700/20 via-purple-500/10 to-transparent blur-[100px] z-0" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Meet the <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">Dream Team</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
          A diverse team of innovators, designers, and builders behind every success story. Our people make the magic happen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.slice(0, 3).map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} visible={showCards} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member, index, visible }) => {
  return (
    <div
      className={`
        rounded-2xl p-8 h-full min-h-[360px]
        border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl text-center
        flex flex-col justify-start items-center transition-all duration-700 ease-out
        transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        delay-[${index * 100}ms]
        hover:scale-[1.03] hover:border-purple-500/30 hover:bg-white/10
      `}
    >
      <div className="mb-4">
        <Avatar name={member.name} size="64" round={true} />
      </div>
      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-purple-300 text-sm mb-6">{member.role}</p>
      <p className="text-zinc-300 text-[15px] leading-relaxed max-w-[90%]">
        {member.quote}
      </p>
    </div>
  );
};

export default TeamSection;