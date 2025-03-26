import React, { useEffect, useRef, useState } from "react";
import "../css/Hero.css";
import { Navbar } from "./";

function Hero() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const totalFrames = 70;
  const images = useRef([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const getFrameSrc = (index) =>
    `/images/animation/intro${String(index).padStart(2, "0")}.jpg`;

  useEffect(() => {
    let loadedCount = 0;

    // Preload images
    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === totalFrames) {
          setImagesLoaded(true);
        }
      };
      images.current[i] = img;
    }
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return; // Only start animation once images are loaded

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
      img.src = images.current[frameIndex]?.src || img.src;

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
  }, [imagesLoaded]); // Only run when images are loaded

  return (
    <>
      <Navbar />
      {imagesLoaded ? (
        <section className="vid" ref={sectionRef}>
          <div className="holder">
            <img
              ref={imageRef}
              src={getFrameSrc(0)} // Start with the first frame
              alt="Scroll Animation Frame"
            />
          </div>
        </section>
      ) : (
        <div className="loading">Loading animation...</div>
      )}
    </>
  );
}

export default Hero;
