import { HeroSection } from "@components/pages/about/HeroSection";
import { OurStory } from "@components/pages/about/OurStory";
import { Team } from "@components/pages/about/Team";
import { WhatMakesUsDiff } from "@components/pages/about/WhatMakesUsDiff";
import React from "react";

const About = () => {
  return (
    <div className="h-auto">
      <HeroSection />
      <OurStory />
      <WhatMakesUsDiff/>
      <Team/>
    </div>
  );
};

export default About;
