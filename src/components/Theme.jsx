import React from "react";

const Theme = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center p-8 text-white mx-0 relative w-full">
      {/* Left Side - Image (Small & Top Left Corner, aligned with text) */}
      <div className="w-full md:w-[30%] md:absolute top-6 flex flex-col justify-start left-0">
        <img
          src="/images/theme2025.svg"
          alt="Theme 2025"
          className="w-[60%] h-auto rounded-lg shadow-lg"
        />
        <img src="/logo.svg" className="w-[60%] h-auto rounded-lg shadow-lg" />
      </div>

      {/* Right Side - Text (Full Width, No Margin) */}
      <div className="w-full text-left px-0 md:ml-[20%] mt-[1%] flex flex-col gap-12">
        <p className="mt-3 text-2xl md:text-4xl mr-0 theme-text justify-around md:leading-14">
          ❝<span className="italic ">Lighthouse Apus</span> embodies a radiant
          beacon, illuminating pathways toward imaginative discovery and guiding
          explorers through uncharted realms with clarity and purpose. Inspired
          by the awe-inspiring constellation Apus—an elegant, vibrant
          bird-of-paradise soaring gracefully across the southern heavens—it
          symbolizes boundless curiosity, unbridled ambition, and the courageous
          desire to venture into unexplored horizons. Seamlessly merging the
          innovative spirit of technology's Accelerated Processing Unit (APU)
          with a mosaic of diverse talents, perspectives, and creative visions,
          Lighthouse Apus accelerates ingenuity, propelling groundbreaking ideas
          forward. Ultimately, Lighthouse Apus shines a dazzling light upon
          daring innovation, fostering collaborative creativity, and uniting
          unique abilities in an inspired journey toward boundless
          possibilities.❞
        </p>
        <div className="h-[400px] w-full bg-gray-400 rounded-4xl"></div>
      </div>
    </div>
  );
};

export default Theme;
