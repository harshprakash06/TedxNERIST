import React from "react";
import { reasons } from "../constants/Reasons";
import "../css/ReasonsToAttend.css";
import ReasonsCard from "./ReasonsCard";

const ReasonsToAttend = () => {
  return (
    <div className="min-h-[160vh]">
      <div>
        <div className="w-full flex items-center justify-center translate-y-[-50%]">
          <div className="container-reasons-title">
            <h1 className="reasons-title">Reasons to Attend</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-48">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <ReasonsCard
              key={reason.id}
              id={reason.id}
              title={reason.title}
              image={reason.image}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReasonsToAttend;
