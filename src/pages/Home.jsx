import React from "react";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Feature from "../components/Feature";
import OurValuesSection from "../components/OurValuesSection";
import { valuesData } from "../data/valuesData";

const Home = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <Feature />
      
    </div>
  );
};

export default Home;
