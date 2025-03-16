import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Website Coming Soon";
  }, []);

  return (
    <BrowserRouter>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
        {/* Logo */}
        <motion.img
          src="/logo.svg" // Ensure this file is in the public folder
          alt="TEDxNERIST Logo"
          className="w-60 mb-6" // Increased size
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/logo_wl.webp" // Ensure this file is in the public folder
          alt="TEDxNERIST Logo"
          className="w-60 mb-6" // Increased size
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h2
          className="text-3xl mt-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Lighthouse Apus
        </motion.h2>
        <motion.p
          className="text-lg mt-2 italic"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          "The Indomitable Spirit"
        </motion.p>
        <motion.p
          className="text-lg mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Stay Tuned!
        </motion.p>
      </div>
    </BrowserRouter>
  );
}

export default App;
