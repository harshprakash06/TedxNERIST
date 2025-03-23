import React from "react";
import Card from "./Card";
import "../css/About.css";
import { about } from "../constants/About";
import PageDivider from "./PageDivider";

const About = () => {
  return (
    <>
      <div className="container-about-us xl:translate-y-[-10%]">
        <div>
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
      <PageDivider />
    </>
  );
};

export default About;
