import React from "react";
import "../css/Hero.css";
import { Navbar } from "./";
function Hero() {
  return (
    <>
      <Navbar />
      <div className="container-hero"></div>
      <div className="container-about">
        <h1 className="hero-header">
          Lighthouse Apus <br />
        </h1>
      </div>
    </>
  );
}

export default Hero;
