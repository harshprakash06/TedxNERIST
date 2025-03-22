export default function Policies() {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white" style={{ font: "Cirka" }}>
      <h1 className="text-3xl font-bold text-center mb-6">Policies</h1>

      {/* Terms and Conditions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Terms and Conditions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            TEDxNERIST is an independently organized TEDx event. The schedule,
            speakers, and venue are subject to change.
          </li>
          <li>
            Tickets are sold online through Razorpay, and each ticket has a
            unique QR code for entry.
          </li>
          <li>
            Once a ticket is purchased, cancellations and refunds are{" "}
            <strong>not</strong> allowed.
          </li>
          <li>
            Attendees must present their QR code and a valid ID at the entry.
          </li>
          <li>
            The ticket is non-transferable and linked to the name and email
            provided during booking.
          </li>
          <li>
            We collect and store your{" "}
            <strong>name, email, and IP address</strong> for verification and
            event management.
          </li>
          <li>
            Attendees must adhere to event rules. Any misconduct may lead to
            expulsion without a refund.
          </li>
          <li>
            TEDxNERIST organizers are not responsible for any loss, theft, or
            injury during the event.
          </li>
        </ul>
      </section>

      {/* Privacy Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Privacy Policy</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            We collect your <strong>name, email, and IP address</strong> when
            purchasing tickets.
          </li>
          <li>
            This information is used for ticket verification, event
            communication, and security purposes.
          </li>
          <li>
            We do <strong>not</strong> share your personal data with third
            parties.
          </li>
          <li>
            Payments are securely processed via Razorpay. We do not store any
            card details.
          </li>
          <li>
            Your data is stored until the event concludes and then securely
            deleted, except as required by law.
          </li>
          <li>You may contact us to request details about your stored data.</li>
        </ul>
      </section>

      {/* Refund & Cancellation Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Refund & Cancellation Policy
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>No Cancellations:</strong> Once a ticket is purchased, it
            cannot be canceled.
          </li>
          <li>
            <strong>No Refunds:</strong> All tickets are non-refundable and
            non-transferable.
          </li>
          <li>
            If the event is postponed, your ticket remains valid for the
            rescheduled date.
          </li>
          <li>
            If TEDxNERIST cancels the event, a refund policy (if applicable)
            will be communicated.
          </li>
        </ul>
      </section>
    </div>
  );
}
