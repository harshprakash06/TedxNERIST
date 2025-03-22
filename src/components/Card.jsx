import React from "react";

const Card = ({ title, subtitle, description, subdescription }) => {
  return (
    <div className="container-card ">
      <img />
      <h1 className="text-3xl font-bold card-title ">
        {title}
        <span className="text-black">{subtitle}</span>
      </h1>
      <div className="card-description">
        <p>{description}</p>
        <p>{subdescription}</p>
      </div>
    </div>
  );
};

export default Card;
