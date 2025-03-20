import React, { useState } from "react";

const Hero = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ backgroundColor: "#1b1b1b" }}>
      {/* Hero Section */}
      <section className="relative pt-12 overflow-hidden sm:pt-16">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-normal tracking-widest ">
              <div className="flex flex-col items-center text-center">
                <img
                  src="/logo.svg"
                  alt="TEDxNERIST Logo"
                  className="h-26 w-auto mb-4"
                />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl">
                  TEDxNERIST
                </span>
              </div>
            </p>
            <h1 className="mt-8 font-normal text-white !text-5xl sm:!text-6xl md:!text-7xl lg:!text-8xl xl:!text-9xl">
              Lighthouse <br /> Apus
            </h1>

            <div className="flex flex-col items-center justify-center px-8 mt-12 space-y-5 sm:space-y-0 sm:px-0 sm:space-x-5 sm:flex-row">
              <div className="relative inline-flex items-center justify-center w-full sm:w-auto group">
                <a
                  href="/buyticket"
                  className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white border border-transparent rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:shadow-lg hover:shadow-cyan-500/50 sm:w-auto"
                  role="button"
                >
                  Book Your Tickets
                </a>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-8 py-3 text-base font-normal text-white transition-all duration-200 border border-gray-600 rounded-full sm:w-auto hover:border-white"
                role="button"
              >
                Know Event
              </a>
            </div>
          </div>

          <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
            {/* <img
              className="relative w-full max-w-5xl mx-auto"
              src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png"
              alt=""
            /> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
