import React from "react";
import { speakers } from "";

const Speaker = ({ speaker }) => {
  return (
    <div className="relative w-56 h-56 flex flex-col items-center bg-white shadow-lg rounded-full p-6 transition-all duration-500 hover:rounded-xl hover:h-64">
      <div className="relative w-32 h-32 rounded-full overflow-hidden transition-all duration-500 hover:translate-y-[-40px]">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center opacity-0 transition-opacity duration-500 hover:opacity-100 -mt-8">
        <h3 className="text-lg font-semibold">{speaker.name}</h3>
        <p className="text-sm text-blue-600">{speaker.work}</p>
        <div className="flex justify-center space-x-3 mt-2">
          {speaker.socialLinks.linkedin && (
            <a
              href={speaker.socialLinks.linkedin}
              className="text-gray-700 hover:text-blue-600"
            >
              <img
                src="/assets/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
          )}
          {speaker.socialLinks.twitter && (
            <a
              href={speaker.socialLinks.twitter}
              className="text-gray-700 hover:text-blue-600"
            >
              <img
                src="/assets/icons/twitter.svg"
                alt="Twitter"
                className="w-5 h-5"
              />
            </a>
          )}
          {speaker.socialLinks.website && (
            <a
              href={speaker.socialLinks.website}
              className="text-gray-700 hover:text-blue-600"
            >
              <img
                src="/assets/icons/website.svg"
                alt="Website"
                className="w-5 h-5"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const SpeakersList = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {speakers.map((speaker) => (
        <Speaker key={speaker.id} speaker={speaker} />
      ))}
    </div>
  );
};

export default SpeakersList;
