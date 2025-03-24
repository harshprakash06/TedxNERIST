import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl text-red-800">
      <h1 className="text-3xl font-bold text-center mb-6">
        Terms & Conditions
      </h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By registering for TEDxNERIST, you agree to abide by these terms and
          conditions.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">2. Code of Conduct</h2>
        <p className="text-gray-700">
          Participants must respect all attendees, speakers, and organizers. Any
          form of harassment or disruptive behavior will not be tolerated.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">3. Intellectual Property</h2>
        <p className="text-gray-700">
          All TEDxNERIST content is copyrighted. Recording or distributing event
          materials without permission is strictly prohibited.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">4. Liability</h2>
        <p className="text-gray-700">
          TEDxNERIST is not responsible for any personal loss, injury, or damage
          occurring at the event.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold">5. Changes to Terms</h2>
        <p className="text-gray-700">
          TEDxNERIST reserves the right to modify these terms at any time.
          Changes will be communicated to registered participants.
        </p>
      </section>

      <p className="text-gray-600 text-center mt-6">
        For any queries, contact us at{" "}
        <a href="mailto://support@tedxnerist.com">
          <span className="font-semibold">support@tedxnerist.com</span>
        </a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
