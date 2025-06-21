import React, { useState } from "react";
// Importing icons from lucide-react for menu, close, and dropdown arrow
import { Menu, X, ChevronDown } from "lucide-react";

// Navigation items with optional submenus
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
  // For toggling mobile menu
  const [mobileOpen, setMobileOpen] = useState(false);
  // For controlling which dropdown is open
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to open/close dropdown menus
  const toggleDropdown = (label) => {
    // If already open, close it; otherwise open the clicked one
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    // Main navbar wrapper
    <div
      className={`relative z-50 w-full bg-black text-white transition-all duration-300 ease-in-out ${
        mobileOpen ? "pb-8" : "pb-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left Side: Logo */}
        <div className="text-2xl font-bold tracking-wide text-white whitespace-nowrap">
          Asra<span className="text-purple-600">UI</span>
        </div>

        {/* Center: Navigation links for desktop */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex gap-10 text-sm font-medium items-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative cursor-pointer"
                onClick={() => item.subItems && toggleDropdown(item.label)}
              >
                {/* If it's a normal link, show anchor tag */}
                {item.link ? (
                  <a
                    href={item.link}
                    className="flex items-center gap-1 hover:text-purple-400 transition"
                  >
                    {item.label}
                  </a>
                ) : (
                  // If it has submenu, show label with arrow
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.subItems && <ChevronDown size={16} className="mt-1" />}
                  </span>
                )}

                {/* Dropdown menu for desktop */}
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
        </div>

        {/* Right Side: Sign Up button (only visible on desktop) */}
        <div className="hidden md:block">
          <a
            href="#signup"
            className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold shadow-md border border-white/20 hover:bg-purple-600 hover:text-white transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile menu button (hamburger or close icon) */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown when menu is open */}
      {mobileOpen && (
        <div className="md:hidden px-6 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.label}>
              {/* Show simple link if no submenu */}
              {item.link ? (
                <a
                  href={item.link}
                  className="block py-2 font-semibold hover:text-purple-400 transition"
                >
                  {item.label}
                </a>
              ) : (
                <>
                  {/* Heading with dropdown arrow (for mobile) */}
                  <div
                    className="flex justify-between items-center py-2 cursor-pointer font-semibold"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.subItems && <ChevronDown size={18} />}
                  </div>

                  {/* Show sub-items if dropdown is active */}
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

          {/* Sign Up button for mobile menu */}
          <div className="pt-4">
            <a
              href="#signup"
              className="block w-full text-center py-2 bg-white/10 backdrop-blur-md text-white rounded-md font-semibold shadow-md border border-white/20 hover:bg-purple-600 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
