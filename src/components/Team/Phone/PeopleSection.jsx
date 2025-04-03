"use client";
import React from "react";
import ProfileGrid from "./ProfileGrid";

const PeopleSectionPhone = () => {
  return (
    <main className="flex overflow-hidden flex-col items-start pt-14 pl-9 mx-auto w-full leading-none text-white bg-zinc-900 max-w-[480px]">
      <header>
        <h1
          className="             font-bold  "
          style={{ fontFamily: "Cirka", fontSize: "4rem" }}
        >
          People.{" "}
        </h1>
        <p
          className="mt-2 text-base tracking-wider leading-6 text-gray-200"
          style={{ fontFamily: "Gilroy-Regular", fontSize: "1.3rem" }}
        >
          The great minds <br /> behind our event.
        </p>
      </header>
      <ProfileGrid />
    </main>
  );
};

export default PeopleSectionPhone;
