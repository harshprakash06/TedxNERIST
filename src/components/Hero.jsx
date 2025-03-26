import React, { useEffect, useRef } from "react";
import "../css/Hero.css";
import { Navbar } from "./";

function Hero() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const totalFrames = 79; // Adjust this to your actual frame count

  const getFrameSrc = (index) => {
    const paddedIndex = String(index).padStart(2, "0"); // e.g., 0 becomes "00", 1 becomes "01"
    return `/images/animation/intro${paddedIndex}.png`;
  };

  useEffect(() => {
    const img = imageRef.current;
    const section = sectionRef.current;
    if (!img || !section) return;

    let animationFrame;

    const updateFrame = () => {
      const distance = window.scrollY - section.offsetTop;
      const totalScroll = section.clientHeight - window.innerHeight;
      let scrollProgress = distance / totalScroll;
      scrollProgress = Math.max(0, Math.min(scrollProgress, 1));

      const frameIndex = Math.floor(scrollProgress * (totalFrames - 1));
      const newSrc = getFrameSrc(frameIndex);

      if (img.src.indexOf(newSrc) === -1) {
        img.src = newSrc;
      }
      animationFrame = requestAnimationFrame(updateFrame);
    };

    const handleScroll = () => {
      if (!animationFrame) {
        animationFrame = requestAnimationFrame(updateFrame);
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateFrame();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      <Navbar />
      <section className="vid" ref={sectionRef}>
        <div className="holder">
          <img
            ref={imageRef}
            src="/img/frames/intro00.png" // starting frame
            alt="Scroll Animation Frame"
          />
        </div>
      </section>
    </>
  );
}

export default Hero;
