import React from "react";

const Card = ({ title, subtitle, description, subdescription }) => {
  return (

    <div className="container-card">
      <img />
      <h1 className="text-3xl font-bold card-title">
        {title}
        <span className="text-black">{subtitle}</span>
      </h1>
      <div className="card-description">

    <div className="container-card clip-curve p-4 relative">
      {/* Star Image placed exactly over the mask-image area */}

      <div className="flex items-center justify-between card-title">
        <h1 className="text-3xl font-bold flex items-center">
          {title} <span className="text-black ml-2">{subtitle}</span>
        </h1>
      </div>

      <div className="card-description mt-2">

        <p>{description}</p>
        <p>{subdescription}</p>
      </div>
    </div>
  );
};

export default Card;
