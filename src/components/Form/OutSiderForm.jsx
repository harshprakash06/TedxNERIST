import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Import the image
import formImage from "/images/Form.png"; // Adjust the path as needed

export default function OutSiderForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    agreeToPolicy: false,
  });
  const [formError, setFormError] = useState({});
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!formData.agreeToPolicy) {
      newErrors.agreeToPolicy = "You must agree to the Privacy & Policy";
    }

    setFormError(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSubmitLoading(true);
    setSubmitMessage("");

    // Simulate form submission (replace with your actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      console.log("Form Data Submitted:", formData);
      setSubmitMessage("Ticket purchase successful!");
      // Optionally redirect the user: navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitMessage("Failed to purchase ticket. Please try again.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6 md:p-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row w-full sm:max-w-[90%] md:w-[700px] lg:w-[900px] shadow-lg"
      >
        <div className="w-full md:w-1/2 pr-0 md:pr-6 flex flex-col justify-center">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-3xl md:text-4xl text-gray-800 font-semibold mb-6"
          >
            Buy Ticket
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, delay: 0.3 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-gray-600 mb-4"
          >
            Book your TEDx Nerist ticket now!
          </motion.p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            >
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formError.name ? "border-red-500" : ""
                }`}
              />
              <AnimatePresence>
                {formError.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs italic"
                  >
                    {formError.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formError.email ? "border-red-500" : ""
                }`}
              />
              <AnimatePresence>
                {formError.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs italic"
                  >
                    {formError.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <label
                htmlFor="phone"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formError.phone ? "border-red-500" : ""
                }`}
              />
              <AnimatePresence>
                {formError.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs italic"
                  >
                    {formError.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex items-center mb-4"
            >
              <input
                id="agreeToPolicy"
                name="agreeToPolicy"
                type="checkbox"
                className={`w-4 h-4 text-black rounded focus:ring-black focus:ring-2 ${
                  formError.agreeToPolicy ? "border-red-500" : "border-gray-300"
                }`}
                checked={formData.agreeToPolicy}
                onChange={handleChange}
              />
              <label
                htmlFor="agreeToPolicy"
                className="ml-2 text-sm text-gray-600"
              >
                I agree to the Privacy & Policy
              </label>
              <AnimatePresence>
                {formError.agreeToPolicy && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-red-500 text-xs italic ml-4"
                  >
                    {formError.agreeToPolicy}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="flex justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={submitLoading}
                className="bg-black text-white rounded-full px-6 py-3 flex items-center justify-center cursor-pointer transition-transform duration-200"
              >
                {submitLoading ? (
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-current"
                      d="M12 4V1m0 18v3M4 12H1m18 0h3M5.636 5.636l-2.122-2.121M18.364 18.364l2.121 2.122M5.636 18.364l-2.121 2.122M18.364 5.636l2.122-2.121"
                    />
                  </svg>
                ) : (
                  <ArrowRight className="mr-2" />
                )}
                {submitLoading ? "Purchasing..." : "Buy Ticket"}
              </motion.button>
            </motion.div>

            <AnimatePresence>
              {submitMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`text-sm ${
                    submitMessage.includes("successful")
                      ? "text-green-500"
                      : "text-red-500"
                  } mt-3`}
                >
                  {submitMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="w-full md:w-1/2 mt-6 md:mt-0 flex items-center justify-center"
        >
          {/* Display the image */}
          <img
            src={formImage}
            alt="Buy Ticket Illustration"
            className="rounded-lg object-cover max-w-full max-h-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
