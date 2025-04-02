import React from "react";

const ProfileCard = ({ name, role, image }) => {
  let anothername = "";

  if (name === "Dr. Nabam Teyi") {
    const nameParts = name.split(" ");
    anothername = nameParts.pop(); // Extract last part (Teyi)
    name = nameParts.join(" "); // Rejoin the remaining name
  }

  return (
    <article className="flex flex-col items-center">
      <img
        src={image}
        alt={`${name}'s profile`}
        className="flex shrink-0 rounded-full h-[70px] w-[70px] object-cover"
        loading="lazy"
      />
      <h3 className="mt-3 text-lg font-bold truncate max-w-full profile-name">
        {name} <br /> {anothername}
      </h3>
      <p className="mt-2 text-xs px-2 whitespace-normal profile-role">{role}</p>
    </article>
  );
};

export default ProfileCard;
