import React, { useState } from "react";
import { Info, ChevronDown } from "lucide-react";

// Navbar menu items defined here (some with submenus)
const navItems = [
  { label: "Home", link: "#home" },
  { label: "Pricing", link: "#pricing" },
  { label: "Product", subItems: ["Overview", "Features", "Integrations"] },
  { label: "Solutions", subItems: ["For Teams", "For Individuals", "Enterprise", "Agencies"] },
  { label: "Company", subItems: ["About", "Careers", "Blog", "Press"] },
  { label: "Contact", link: "#contact" },
];

const Navbar = () => {
  // Controls whether the mobile menu is open or not
  const [mobileOpen, setMobileOpen] = useState(false);

  // Tracks which dropdown menu is active (for desktop hover and mobile toggle)
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Function to toggle dropdowns — opens if closed, closes if already open
  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <div
      className={`relative z-50 w-full bg-black text-white transition-all duration-300 ease-in-out ${
        mobileOpen ? "pb-8" : "pb-0"
      }`}
    >
      {/* Main navigation container */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand name */}
        <div className="text-2xl font-bold tracking-wide">
          Asra<span className="text-purple-600">UI</span>
        </div>

        {/* Desktop navigation items — visible only on medium+ screens */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium items-center">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="relative group cursor-pointer"
              // Show dropdown on hover if item has subItems
              onMouseEnter={() => item.subItems && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* If the item is a direct link */}
              {item.link ? (
                <a href={item.link} className="flex items-center gap-1 hover:text-purple-400 transition">
                  {item.label}
                </a>
              ) : (
                // If item has dropdown items
                <span className="flex items-center gap-1">
                  {item.label}
                  {item.subItems && <ChevronDown size={16} className="mt-1" />}
                </span>
              )}

              {/* Dropdown items (desktop only) */}
              {item.subItems && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-lg text-white rounded-md p-3 min-w-[160px] space-y-2 shadow-lg z-50">
                  {item.subItems.map((sub, index) => (
                    <a
                      key={index}
                      href="#"
                      className="block hover:text-purple-400 transition font-medium"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile icon button — shown on small screens only */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          <Info size={24} />
        </button>
      </nav>

      {/* Mobile menu content — visible when mobileOpen is true */}
      {mobileOpen && (
        <div className="md:hidden px-6 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.label}>
              {/* If it's a normal link */}
              {item.link ? (
                <a
                  href={item.link}
                  className="block py-2 font-semibold hover:text-purple-400 transition"
                >
                  {item.label}
                </a>
              ) : (
                // If it has dropdown items in mobile view
                <>
                  <div
                    className="flex justify-between items-center py-2 cursor-pointer font-semibold"
                    onClick={() => toggleDropdown(item.label)}
                  >
                    <span>{item.label}</span>
                    {item.subItems && <ChevronDown size={18} />}
                  </div>

                  {/* Mobile dropdown content shown only when active */}
                  {item.subItems && activeDropdown === item.label && (
                    <div className="pl-4 mt-1 space-y-1 text-sm text-gray-300">
                      {item.subItems.map((sub, index) => (
                        <div key={index} className="py-1">
                          {sub}
                        </div>
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
