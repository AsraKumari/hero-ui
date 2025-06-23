// src/ScrollToSectionContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// We create a context to store which section we want to scroll to (like #pricing or #feature)
const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [sectionToScroll, setSectionToScroll] = useState(null);
  const location = useLocation();

  // When route changes to "/", scroll to the target section if set
  useEffect(() => {
    if (sectionToScroll && location.pathname === "/") {
      const section = document.querySelector(sectionToScroll);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      setSectionToScroll(null); // Clear scroll state after scrolling
    }
  }, [location, sectionToScroll]);

  return (
    <ScrollContext.Provider value={{ setSectionToScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

// Custom hook to use this scroll context
export const useScroll = () => useContext(ScrollContext);
