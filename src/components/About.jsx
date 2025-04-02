import React from "react";
import Card from "./Card";
import "../css/About.css";
import { about } from "../constants/About";
import "../css/ReasonsToAttend.css";
import PageDivider from "./PageDivider";
import { motion } from "framer-motion"; // Import Framer Motion

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
      {/* Cards Section with Delayed Animation */}
      <div className="container-about-us">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8">
          {about.map((card, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }} // Start off-screen
              animate={{ opacity: 1, y: 0 }} // Animate to normal position
              transition={{
                duration: 0.5, // Animation duration
                delay: id * 0.75, // Delay each card by 0.3s
                ease: "easeOut",
              }}
            >
              <Card
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                subdescription={card.subdescription}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
