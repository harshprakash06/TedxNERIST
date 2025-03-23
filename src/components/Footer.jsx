"use client";
import * as React from "react";

function Footer() {
  return (
    <div className="px-6 py-6 w-full text-white bg-black text-sm">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        <div className="flex flex-wrap justify-between gap-6">
          <div className="max-w-xs">
            <div className="flex items-center gap-2">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
              <img src="/logo_wl.webp" alt="TEDx NERIST" className="w-36 h-8" />
            </div>
            <p className="mt-4 text-xs leading-5">
              An independently organized event showcasing transformative ideas,
              inspiring performances, and vibrant community dialogue. Licensed
              by TED.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 text-xs">
            <div>
              <h3 className="font-semibold mb-2">Follow TEDxNERIST</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="/icons/facebook.svg"
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </div>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="/icons/linkedin.svg"
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </div>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="/icons/instagram.svg"
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </div>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <img
                      src="/icons/twitter.svg"
                      alt="Facebook"
                      className="w-4 h-4"
                    />
                  </div>
                </a>
              </div>
              <p className="mt-4 font-semibold">Call us</p>
              <p>+91 88220 78464</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Programs</h3>
              <ul className="space-y-1">
                <li>TEDx</li>
                <li>TED Fellows</li>
                <li>TED Ed</li>
                <li>TED translators</li>
                <li>TED Institute</li>
                <li>TED Speakers Bureau</li>
                <li>The Audacious Project</li>
                <li>TED Courses</li>
                <li>TED@work</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <ul className="space-y-1">
                <li>TED Speakers</li>
                <li>TED Organizers</li>
                <li>TED Translators</li>
                <li>TED Speakers</li>
                <li>TED Community</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white pt-4 text-xs text-center">
          <p>
            © TEDxNERIST. This independently organized TEDx event operates under
            a license granted by TED.
          </p>
          <div className="flex justify-center gap-4 mt-2">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Legal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
