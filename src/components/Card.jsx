import React, { useState, useEffect } from "react";

const Card = ({ title, subtitle, description, subdescription }) => {
  const [isPhone, setIsPhone] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsPhone(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const imageSrc = isPhone
    ? "/images/cards/Card-phone.png"
    : "/images/cards/Card.png";

  return (
    <div className="relative inline-block">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt="Description of image"
        className="w-full h-auto"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-opacity-50 flex flex-col justify-start p-6 card-title">
        {/* Title & Subtitle */}
        <h1 className="text-3xl">
          {title}
          <span className="text-black">{subtitle}</span>
        </h1>

        {/* Description Content */}
        <div className="mt-4 text-white card-description">
          <p>{description}</p>
          <p>{subdescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
