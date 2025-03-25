import React, { useState, useEffect } from "react";
import "../css/TeamSection.css";
import { Team } from "../constants/Team.js";
import PageDivider from "./PageDivider.jsx";

const categories = [...new Set(Team.map((member) => member.category))];

const TeamSection = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="team-container pr-20  pl-20">
      {isPhone ? (
        <div className="w-full flex items-center justify-center translate-y-[-50%] team-heading-mobile">
          <div className=" inline-block relative">
            <h1 className="reasons-title text-xl font-bold whitespace-nowrap translate-y-[10px]">
              Meet our Team
            </h1>
          </div>
        </div>
      ) : (
        <div className="golugolu relative ml-4">
          {/* PageDivider Positioned Slightly Higher on Mobile */}
          <div className="relative -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-16">
            <PageDivider />
          </div>

          {/* Title Positioned for Overlap */}
          <div className="w-full flex items-center justify-center relative -mt-10 sm:-mt-12 md:-mt-16 lg:-mt-20">
            <div className="container-reasons-title">
              <h1 className="reasons-title team-golu">Meet our Team</h1>
            </div>
          </div>
        </div>
      )}
      {/* FLEX CONTAINER TO ALIGN PROFILES SIDE BY SIDE */}
      <div className="team-members-row">
        {Team.map((member, index) => (
          <div key={index} className="profile-card">
            <div className="img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="caption">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="social-links">
                {member.linkedin ? (
                  <a href={member.linkedin}>
                    <i className="fab fa-linkedin"></i>
                  </a>
                ) : (
                  <></>
                )}
                {member.instagram ? (
                  <a href="member.instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                ) : (
                  <></>
                )}
                {member.x ? (
                  <a href="member.x">
                    <i class="fa-brands fa-x-twitter"></i>
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
