import React from "react";
import Card from "./Card";
import "../css/About.css";
import { about } from "../constants/About";
import PageDivider from "./PageDivider";

const About = () => {
  return (
    <>
      <div className="container-about-us">
        <div>
          <h1 className="about-title">About Us</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
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
