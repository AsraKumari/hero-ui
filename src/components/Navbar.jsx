// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useScroll } from "../ScrollToSectionContext";

// ✅ Updated only this part ↓
const navItems = [
  { label: "Home", link: "/" },
  { label: "Pricing", link: "#pricing" },
  {
    label: "Product",
    subItems: [
      { label: "Overview", link: "/overview" }, // ✅ updated link here
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
      { label: "About", link: "/about" },
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
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { setSectionToScroll } = useScroll();

  const toggleDropdown = (label) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const toggleMobileDropdown = (label) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  const handleScrollToSection = (id) => {
    if (location.pathname !== "/") {
      setSectionToScroll(id);
      navigate("/");
    } else {
      const section = document.querySelector(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigate = (link) => {
    handleScrollToSection(link);
    setMobileOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`relative z-50 w-full bg-black text-white transition-all duration-300 ease-in-out ${
        mobileOpen ? "pb-8" : "pb-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold tracking-wide text-white whitespace-nowrap">
          Asra<span className="text-purple-600">UI</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center" ref={dropdownRef}>
          <ul className="flex gap-10 text-sm font-medium items-center">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative cursor-pointer"
                onClick={() => item.subItems && toggleDropdown(item.label)}
              >
                {item.link && !item.subItems ? (
                  item.link.startsWith("/") ? (
                    <Link
                      to={item.link}
                      className="hover:text-purple-400 transition"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span
                      onClick={() => handleScrollToSection(item.link)}
                      className="hover:text-purple-400 transition"
                    >
                      {item.label}
                    </span>
                  )
                ) : (
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.subItems && (
                      <ChevronDown
                        size={16}
                        className={`mt-1 transition-transform ${
                          activeDropdown === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </span>
                )}

                {/* Desktop Dropdown */}
                {item.subItems && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white/10 backdrop-blur-lg text-white rounded-md p-3 min-w-[160px] space-y-2 shadow-lg z-50">
                    {item.subItems.map((sub, index) =>
                      sub.link.startsWith("/") ? (
                        <Link
                          key={index}
                          to={sub.link}
                          className="block hover:text-purple-400 transition font-medium"
                        >
                          {sub.label}
                        </Link>
                      ) : (
                        <span
                          key={index}
                          onClick={() => handleScrollToSection(sub.link)}
                          className="block hover:text-purple-400 transition font-medium cursor-pointer"
                        >
                          {sub.label}
                        </span>
                      )
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Sign Up Button */}
        <div className="hidden md:block">
          <a
            href="#signup"
            onClick={() => handleScrollToSection("#signup")}
            className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold shadow-md border border-white/20 hover:bg-purple-600 hover:text-white transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.link && !item.subItems ? (
                item.link.startsWith("/") ? (
                  <Link
                    to={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 font-semibold hover:text-purple-400 transition"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    onClick={() => handleNavigate(item.link)}
                    className="block py-2 font-semibold hover:text-purple-400 transition cursor-pointer"
                  >
                    {item.label}
                  </span>
                )
              ) : (
                <>
                  <div
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="flex justify-between items-center py-2 font-semibold cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        activeMobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {item.subItems && activeMobileDropdown === item.label && (
                    <div className="pl-4 mt-1 space-y-1 text-sm text-gray-300">
                      {item.subItems.map((sub, index) =>
                        sub.link.startsWith("/") ? (
                          <Link
                            key={index}
                            to={sub.link}
                            onClick={() => setMobileOpen(false)}
                            className="block py-1 hover:text-purple-400 transition"
                          >
                            {sub.label}
                          </Link>
                        ) : (
                          <span
                            key={index}
                            onClick={() => handleNavigate(sub.link)}
                            className="block py-1 hover:text-purple-400 transition cursor-pointer"
                          >
                            {sub.label}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}

          {/* Mobile Sign Up */}
          <div className="pt-4">
            <span
              onClick={() => handleNavigate("#signup")}
              className="block w-full text-center py-2 bg-white/10 backdrop-blur-md text-white rounded-md font-semibold shadow-md border border-white/20 hover:bg-purple-600 transition cursor-pointer"
            >
              Sign Up
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
