import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between gap-8 md:gap-6 items-start pb-6 border-b border-borderColor">
        {/* Logo & Description */}
        <div>
          <img src={assets.logo} alt="logo" className="h-8 md:h-9" />

          <p className="max-w-80 mt-3">
            Rent your dream car with us and experience the thrill of the open
            road. Our platform offers a wide selection of luxury vehicles for
            every occasion, ensuring unforgettable journeys and unforgettable
            memories.
          </p>

          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <img
                src={assets.instagram_logo}
                alt="Instagram"
                className="h-5 w-5"
              />
            </a>

            <a href="#">
              <img
                src={assets.facebook_logo}
                alt="Facebook"
                className="h-5 w-5"
              />
            </a>

            <a href="#">
              <img
                src={assets.twitter_logo}
                alt="Twitter"
                className="h-5 w-5"
              />
            </a>

            <a href="#">
              <img src={assets.gmail_logo} alt="Gmail" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Quick Links
          </h2>

          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Home</a>
            </li>

            <li>
              <a href="#">Browse Cars</a>
            </li>

            <li>
              <a href="#">List Your Car</a>
            </li>

            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Resources
          </h2>

          <ul className="mt-3 flex flex-col gap-1.5">
            <li>
              <a href="#">Help Center</a>
            </li>

            <li>
              <a href="#">Terms of Service</a>
            </li>

            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Contact Us</a>
            </li>

            <li>
              <a href="#">Insurance</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-base font-medium text-gray-800 uppercase">
            Contact
          </h2>

          <ul className="mt-3 flex flex-col gap-1.5">
            <li>1234 Road Drive</li>
            <li>Kathmandu, Nepal 44600</li>
            <li>+977 9800000000</li>
            <li>rentalcar@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>
          © {new Date().getFullYear()} Nepal Car Rental. All rights reserved.
        </p>

        <ul className="flex items-center gap-4">
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>|</li>
          <li>
            <a href="#">Cookies</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
