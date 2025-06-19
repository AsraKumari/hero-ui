import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Pricing />
    </div>
  );
};

export default App;
