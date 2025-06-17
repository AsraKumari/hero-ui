import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-black text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">AsraDev</div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="inline-block border-b-2 border-blue-500 pb-1">Home</li>
          <li className="inline-block hover:border-b-2 hover:border-blue-500 pb-1">About</li>
          <li className="inline-block hover:border-b-2 hover:border-blue-500 pb-1">Contact</li>
        </ul>
      </div>

      {/* Mobile Nav (conditionally rendered to avoid empty space) */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 text-lg pt-2 transition-all duration-300">
          <li className="inline-block border-b-2 border-blue-500 pb-1">Home</li>
          <li className="inline-block hover:border-b-2 hover:border-blue-500 pb-1">About</li>
          <li className="inline-block hover:border-b-2 hover:border-blue-500 pb-1">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
