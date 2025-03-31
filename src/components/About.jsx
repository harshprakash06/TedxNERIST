import React from "react";
import Card from "./Card";
import "../css/About.css";
import { about } from "../constants/About";
import "../css/ReasonsToAttend.css";
import PageDivider from "./PageDivider";
const About = () => {
  return (
    <div id="about" className="min-h-screen relative">
      {/* PageDivider Positioned Slightly Higher on Mobile */}
      <div className="relative -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
        <PageDivider />
      </div>
      {/* Title Positioned for Overlap */}
      <div className="w-full flex items-center justify-center relative -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <div className="container-reasons-title">
          <h1 className="reasons-title">About Us</h1>
        </div>
      </div>
      {/* Cards Section (No Width Change) */}
      <div className="container-about-us">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {about.map((card, id) => (
            <Card
              key={id}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              subdescription={card.subdescription}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
