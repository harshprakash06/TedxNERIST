import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";

import {
  TicketPurchase,
  TicketDownload,
  Hero,
  Navbar,
  Theme,
  About,
  ReasonsToAttend,
  Footer,
  PageDivider,
  Sponsors,
  PrivacyPolicy,
  NoRefundPolicy,
  TermsAndConditions,
} from "./components/index";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Website Coming Soon";
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
        <Route path="/buyticket" element={<TicketPurchase />} />
        <Route path="/ticket/:id" element={<TicketDownload />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<NoRefundPolicy />} />
        <Route path="/term" element={<TermsAndConditions />} />

        <Route
          path="/home"
          element={
            <>
              <Navbar />
              <div className="page-container">
                <div className=" theme-section">
                  <Theme />
                </div>
                <div className=" about-section">
                  <About />
                </div>
                <PageDivider /> <PageDivider /> <PageDivider />
                <ReasonsToAttend />
              </div>
              <Sponsors />

              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

const ComingSoon = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
    {/* Logo */}
    <motion.img
      src="/logo.svg"
      alt="TEDxNERIST Logo"
      className="w-60 mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    />
    <motion.img
      src="/logo_wl.webp"
      alt="TEDxNERIST Logo"
      className="w-60 mb-6"
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
);

export default App;
