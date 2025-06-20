import React, { useState } from "react";
import { Info, ChevronDown } from "lucide-react";

// Navbar menu items defined here (some with submenus)
const navItems = [
  { label: "Home", link: "#home" },
  { label: "Pricing", link: "#pricing" },
  {
    label: "Product",
    subItems: [
      { label: "Overview", link: "#" },
      { label: "Feature", link: "#feature" }, 
      { label: "Integrations", link: "#" },
    ],
  },
  {
    label: "Solutions",
    subItems: [
      { label: "For Teams", link: "#" },
      { label: "For Individuals", link: "#" },
      { label: "Enterprise", link: "#" },
      { label: "Agencies", link: "#" },
    ],
  },
  {
    label: "Company",
    subItems: [
      { label: "About", link: "#" },
      { label: "Careers", link: "#" },
      { label: "Blog", link: "#" },
      { label: "Press", link: "#" },
    ],
  },
  { label: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <div
      className={`relative z-50 w-full bg-black text-white transition-all duration-300 ease-in-out ${
        mobileOpen ? "pb-8" : "pb-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-wide">
          Asra<span className="text-purple-600">UI</span>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group cursor-pointer"
              onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.link ? (
                <a href={item.link} className="flex items-center gap-1 hover:text-purple-400 transition">
                  {item.label}
                </a>
              ) : (
                <span className="flex items-center gap-1">
                  {item.label}
                  {item.subItems && <ChevronDown size={16} className="mt-1" />}
                </span>
              )}

              {item.subItems && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-lg text-white rounded-md p-3 min-w-[160px] space-y-2 shadow-lg z-50">
                  {item.subItems.map((sub, index) => (
                    <a
                      key={index}
                      href={sub.link}
                      className="block hover:text-purple-400 transition font-medium"
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <Info size={24} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden px-6 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.link ? (
                <a
                  href={item.link}
                  className="block py-2 font-semibold hover:text-purple-400 transition"
                >
                  {item.label}
                </a>
              ) : (
                <>
                  <div
                    className="flex justify-between items-center py-2 cursor-pointer font-semibold"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.subItems && <ChevronDown size={18} />}
                  </div>

                  {item.subItems && activeDropdown === item.label && (
                    <div className="pl-4 mt-1 space-y-1 text-sm text-gray-300">
                      {item.subItems.map((sub, index) => (
                        <a
                          key={index}
                          href={sub.link}
                          className="block py-1 hover:text-purple-400 transition"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
