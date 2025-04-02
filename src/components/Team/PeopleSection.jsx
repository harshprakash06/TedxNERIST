"use client";
import { TeamMemberCard } from "./TeamMemberCard";
import { SectionHeader } from "./SectionHeader";
import { Members } from "../../constants/Team.js";
const PeopleSection = () => {
  return (
    <>
      <section className="p-10 mx-auto max-w-none min-h-screen  flex items-start gap-10 max-md:flex-col">
        {/* Left Section (30%) */}
        <div className="w-1/3 max-md:w-full">
          <SectionHeader
            title="People"
            subtitle="The great minds behind our event."
          />
        </div>

        {/* Right Section (70%) */}
        <div className="w-2/3 bg-neutral-800 p-10 rounded-[35px] grid gap-10 grid-cols-[repeat(3,1fr)] max-md:w-full max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr] max-md:p-8 max-sm:p-5">
          {Members.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default PeopleSection;
