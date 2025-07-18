import React, { useEffect } from "react";
import { useNavigate, useLocation, Link as RouterLink } from "react-router-dom";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo;
    if (scrollTarget && location.pathname === "/") {
      const el = document.querySelector(scrollTarget);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 200);
    }
  }, [location]);

  return (
    <footer className="bg-black text-white pt-24 pb-16 px-6">
      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-white/10 pb-12">
        {/* Brand + Newsletter */}
        <div className="space-y-5">
          <h3 className="text-3xl font-extrabold tracking-wide">
            Hexora<span className="text-purple-400">UI</span>
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering modern developers with beautifully crafted UI and seamless experiences.
          </p>
          <form className="flex mt-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-l-md bg-white/10 text-white placeholder:text-gray-400 text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-md text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Pages</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <button onClick={() => scrollToSection("#home")} className="hover:text-purple-400 transition text-left">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("#pricing")} className="hover:text-purple-400 transition text-left">
                Pricing
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection("#feature")} className="hover:text-purple-400 transition text-left">
                Feature
              </button>
            </li>
            <li>
              <RouterLink to="/about" className="hover:text-purple-400 transition">
                About
              </RouterLink>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-5 text-2xl text-purple-400">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-purple-400 transition">Sitemap</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-500 mt-10">
        © {new Date().getFullYear()} <span className="text-white font-semibold">AsraUI</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
