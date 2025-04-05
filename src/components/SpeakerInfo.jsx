"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import speakers from "../constants/Speakers";

export default function SpeakerInfo({ speakerId, onClose }) {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  useEffect(() => {
    if (speakerId) {
      const speaker = speakers.find((s) => s.id === speakerId);
      setSelectedSpeaker(speaker || null);
    }
  }, [speakerId]);

  if (!selectedSpeaker) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      style={{ fontFamily: "Gilroy-Regular" }}
    >
      <div
        className="bg-zinc-900 rounded-2xl shadow-lg p-6 sm:p-10 w-full max-w-5xl max-h-[90vh] sm:max-h-[90vh] overflow-y-auto relative
        max-sm:h-[95vh] max-sm:rounded-none"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-4xl font-bold w-10 h-10 flex items-center justify-center"
        >
          ×
        </button>

        {/* Content */}
        <main className="flex gap-20 items-start max-md:flex-col max-md:gap-10">
          {/* Speaker Profile Section */}
          <section className="flex flex-col gap-6 items-center flex-shrink-0 max-md:items-center max-md:text-center">
            <div className="rounded-full overflow-hidden w-[200px] h-[200px] relative">
              {selectedSpeaker.image ? (
                <img
                  src={selectedSpeaker.image}
                  alt={`${selectedSpeaker.name} profile`}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-600 flex items-center justify-center text-gray-300 text-4xl">
                  {selectedSpeaker.name.charAt(0)}
                </div>
              )}
            </div>
            <h1
              className="text-4xl font-bold text-gray-200"
              style={{ fontFamily: "Cirka" }}
            >
              {selectedSpeaker.name}
            </h1>
            <p className="text-base text-gray-400 font-medium">
              {selectedSpeaker.description || "No description available."}
            </p>
          </section>

          {/* Speaker Bio Section */}
          <article className="text-base text-gray-200 leading-relaxed max-w-2xl">
            {selectedSpeaker.bio ? (
              <p>{selectedSpeaker.bio}</p>
            ) : (
              <>
                <p className="mb-4">
                  {selectedSpeaker.name} is a renowned speaker with expertise in
                  their field. They have contributed significantly to various
                  projects and initiatives.
                </p>
                <p className="mb-4">
                  With years of experience, {selectedSpeaker.name} brings
                  valuable insights and perspectives to every discussion. Their
                  approach combines theoretical knowledge with practical
                  applications.
                </p>
                <p>
                  Audiences appreciate their engaging presentation style and
                  ability to communicate complex ideas in accessible ways. They
                  continue to inspire many through their work and public
                  speaking engagements.
                </p>
              </>
            )}
          </article>
        </main>
      </div>
    </div>
  );
}
