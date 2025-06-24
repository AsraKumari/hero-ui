import React from "react";
import { team } from "@/data/teamData";

const TeamSection = () => {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-14">Meet Our Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.slice(0, 3).map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamCard = ({ member }) => {
  return (
    <div className="rounded-2xl p-8 h-full min-h-[340px] border border-white/10 backdrop-blur-xl bg-white/5 shadow-xl text-center flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-purple-300 text-sm mb-6">{member.role}</p>
      <p className="text-zinc-300 text-[15px] leading-relaxed max-w-[90%]">
        {member.quote}
      </p>
    </div>
  );
};

export default TeamSection;
