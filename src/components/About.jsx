import React from "react";
import Card from "./Card";
import "../css/About.css";
import { about } from "../constants/About";
import "../css/ReasonsToAttend.css";
import PageDivider from "./PageDivider";

const About = () => {
  return (
    <div className="min-h-[160vh]">
      <PageDivider />
      <div>
        <div className="w-full flex items-center justify-center translate-y-[-50%] ">
          <div className="container-reasons-title">
            <h1 className="reasons-title">About Us</h1>
          </div>
        </div>
        <div className="container-about-us xl:translate-y-[-10%] md:translate-y-5">
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
    </div>
  );
};

export default About;
