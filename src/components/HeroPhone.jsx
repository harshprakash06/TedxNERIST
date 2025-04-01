import React, { useEffect, useRef, useState } from "react";
import "../css/HeroPhone.css";
import { Navbar } from "./";

function HeroPhone() {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const totalFrames = 60;
  const images = useRef(Array(totalFrames).fill(null));

  const [loadProgress, setLoadProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(true);
  const [text, setText] = useState("LIGHTHOUSE APUS");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollComplete, setIsScrollComplete] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false); // <-- Add the state

  // Device detection
  const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  // Function to get the appropriate frame src based on device type
  const getFrameSrc = (index) =>
    isMobile
      ? `/images/animation/phone/intro-phone${String(index).padStart(
          2,
          "0"
        )}.jpg`
      : `/images/animation/intro${String(index).padStart(2, "0")}.jpg`;

  // Smooth text transition function
  const changeTextWithTransition = (newText) => {
    // Prevent changing to the same text or during an ongoing transition
    if (text === newText || isTransitioning) return;

    setIsTransitioning(true);
    setTextOpacity(0); // Fade out current text

    // Wait for the opacity transition to finish before updating text
    setTimeout(() => {
      setText(newText); // Change text
      setTextOpacity(1); // Fade in new text

      // After the fade-in, reset the transition state
      setIsTransitioning(false);
    }, 300); // Match the duration of the opacity fade-out (300ms)
  };

  // Preload all images at component mount
  useEffect(() => {
    let isMounted = true;
    let loadedCount = 0;
    const tempImages = Array(totalFrames).fill(null);

    for (let i = 0; i < totalFrames; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        if (!isMounted) return;

        loadedCount++;
        tempImages[i] = img;

        if (isMounted) {
          setLoadProgress(Math.floor((loadedCount / totalFrames) * 100));
          if (loadedCount === totalFrames) {
            images.current = tempImages;
            setImagesLoaded(true);
          }
        }
      };
      img.onerror = () => {
        if (!isMounted) return;
        console.error(`Failed to load image: ${getFrameSrc(i)}`);
        loadedCount++;
        // Continue loading even if some images fail
        if (loadedCount === totalFrames && isMounted) {
          setImagesLoaded(true);
        }
      };
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // Hide loading overlay after images are loaded
  useEffect(() => {
    if (imagesLoaded) {
      const timer = setTimeout(() => setShowLoadingOverlay(false), 300);
      return () => clearTimeout(timer);
    }
  }, [imagesLoaded]);

  // Handle scroll animation
  useEffect(() => {
    if (!imagesLoaded) return;

    const img = imageRef.current;
    const section = sectionRef.current;

    if (!img || !section) return;

    let animationFrame = null;
    let lastScrollProgress = scrollProgress;

    const updateFrame = () => {
      // Calculate how far we've scrolled into the section
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      const newDistance = Math.max(0, scrollY - sectionTop);
      const newTotalScroll = sectionHeight - viewportHeight;
      let newScrollProgress =
        newTotalScroll <= 0 ? 0 : newDistance / newTotalScroll;
      newScrollProgress = Math.max(0, Math.min(newScrollProgress, 1));

      // Only update if there's a meaningful change to reduce unnecessary rerenders
      if (Math.abs(newScrollProgress - lastScrollProgress) > 0.001) {
        setScrollProgress(newScrollProgress);
        lastScrollProgress = newScrollProgress;

        // Check if we've reached the end of our animation sequence
        if (newScrollProgress >= 0.95 && !isScrollComplete) {
          setIsScrollComplete(true);
          changeTextWithTransition("FINAL TEXT");
        } else if (newScrollProgress < 0.95 && isScrollComplete) {
          setIsScrollComplete(false);
        }

        // Update frame image with smooth interpolation
        const frameIndexFloat = newScrollProgress * (totalFrames - 1);
        const frameIndex = Math.min(
          Math.floor(frameIndexFloat),
          totalFrames - 1
        );

        if (
          images.current[frameIndex] &&
          img.src !== images.current[frameIndex].src
        ) {
          img.src = images.current[frameIndex].src;
        }

        // Update text based on scroll progress
        if (!isScrollComplete && !isTransitioning) {
          if (newScrollProgress < 0.25) {
            changeTextWithTransition("LIGHTHOUSE APUS");
          } else if (newScrollProgress < 0.5) {
            changeTextWithTransition("SCROLL TO EXPLORE");
          } else if (newScrollProgress < 0.75) {
            changeTextWithTransition("ALMOST THERE");
          } else if (newScrollProgress < 0.95) {
            changeTextWithTransition("GETTING CLOSER");
          }
        }
      }

      animationFrame = requestAnimationFrame(updateFrame);
    };

    animationFrame = requestAnimationFrame(updateFrame);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [imagesLoaded, isScrollComplete, isTransitioning, scrollProgress]);

  return (
    <>
      <section className="vid" ref={sectionRef}>
        {!showLoadingOverlay && <Navbar />}
        <div className="holder">
          <img
            ref={imageRef}
            src={getFrameSrc(0)} // Initial frame based on device
            alt="Scroll Animation Frame"
            loading="eager"
          />
        </div>

        {/* Fixed centered text overlay */}
        <div
          className={`fixed-text-container ${
            isScrollComplete ? "final-state" : ""
          }`}
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <h1
            className="lighthouse-text visible"
            style={{
              opacity: textOpacity,
              transition:
                "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
            }}
          >
            {text}
          </h1>
        </div>
      </section>

      {showLoadingOverlay && (
        <div className="loading-overlay fixed inset-0 flex items-center justify-center z-50 miau">
          <span
            className="relative text-7xl"
            style={{ fontFamily: "Gilroy", color: "grey", opacity: "70%" }}
          >
            TEDxNERIST
            <span
              className="absolute top-0 left-0 loading-text overflow-hidden"
              style={{
                width: `${loadProgress}%`,
                transition: "width 0.5s ease",
              }}
            >
              TEDx<span style={{ color: "white" }}>NERIST</span>
            </span>
          </span>
        </div>
      )}
    </>
  );
}

export default HeroPhone;
