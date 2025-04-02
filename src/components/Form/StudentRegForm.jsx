import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function StudentRegForm() {
  const [formData, setFormData] = useState({
    registrationNumber: "",
    email: "",
    phone: "",
    name: "",
    rollNumber: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    const fetchStudentData = async () => {
      if (/^\d{6}$/.test(formData.registrationNumber)) {
        setLoading(true);
        try {
          const res = await fetch(
            `https://node-service-dot-splirx.as.r.appspot.com/api/student/${formData.registrationNumber}`
          );
          if (res.ok) {
            const data = await res.json();
            setFormData((prev) => ({
              ...prev,
              name: data.name || "",
              rollNumber: data.roll_number || "",
            }));
            setError("");
          } else {
            setFormData((prev) => ({ ...prev, name: "", rollNumber: "" }));
            setError("Student not found.");
          }
        } catch (error) {
          setError("Failed to fetch student data.");
        }
        setLoading(false);
      }
    };

    const delayFetch = setTimeout(fetchStudentData, 1000);
    return () => clearTimeout(delayFetch);
  }, [formData.registrationNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key]) newErrors[key] = "This field is required";
    });
    if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    setFormError(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitLoading(true);
    setSubmitMessage("");
    try {
      const response = await fetch(
        "https://node-service-dot-splirx.as.r.appspot.com/api/student",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setSubmitMessage("Student data saved successfully!");
      } else {
        setSubmitMessage(data.message || "Failed to submit form.");
      }
    } catch (error) {
      setSubmitMessage("Error submitting form.");
    }
    setSubmitLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 sm:p-6 md:p-0">
      <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row w-full sm:max-w-[90%] md:w-[600px] lg:w-[800px] shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 pr-0 md:pr-6 flex flex-col"
        >
          <h2 className="text-3xl md:text-5xl text-black font-semibold mb-6 md:mb-8 mt-4 md:mt-6">
            Student Registration
          </h2>
          <div className="flex flex-col gap-6">
            {[
              { name: "registrationNumber", label: "Registration Number" },
              { name: "email", label: "Institute Email Id", type: "email" },
              { name: "phone", label: "Phone Number" },
              { name: "name", label: "Name", disabled: true },
              { name: "rollNumber", label: "Roll No.", disabled: true },
            ].map(({ name, label, type = "text", disabled = false }) => (
              <div key={name} className="relative">
                <label
                  htmlFor={name}
                  className="absolute text-gray-600 text-sm"
                >
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  id={name}
                  value={formData[name]}
                  onChange={handleChange}
                  disabled={disabled}
                  className={`mt-5 p-3 border rounded-2xl focus:outline-none text-black w-full focus:ring-2 focus:ring-black ${
                    formError[name] ? "border-red-500" : ""
                  }`}
                />
                {formError[name] && (
                  <p className="text-red-500 text-sm">{formError[name]}</p>
                )}
              </div>
            ))}
            {loading && (
              <p className="text-gray-500 text-sm">Fetching data...</p>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {submitMessage && (
              <p className="text-green-500 text-sm">{submitMessage}</p>
            )}
          </div>
          <div className="mt-5 flex justify-center ">
            <button
              type="submit"
              disabled={submitLoading}
              className="bg-black! text-white rounded-full p-4 md:p-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            >
              {submitLoading ? "Submitting..." : <ArrowRight size={24} />}
            </button>
          </div>
        </form>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 hidden md:block">
          <img
            src="/images/Form.png"
            alt="Form Illustration"
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
