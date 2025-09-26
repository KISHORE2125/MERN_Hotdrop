// Components/Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-28 relative z-10">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-14 grid md:grid-cols-4 gap-12">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400 mb-4">Hot Drop!</h2>
          <p className="text-gray-400 leading-relaxed">
            Delicious bites, delivered fast. Grab your favorites with unbeatable offers every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/menu" className="hover:text-yellow-400 transition">Menu</Link></li>
            <li><Link to="/#offers" className="hover:text-yellow-400 transition">Special Offers</Link></li>
            <li><Link to="/#testimonials" className="hover:text-yellow-400 transition">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-yellow-400 transition">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:text-yellow-400 transition">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-yellow-400 transition">Terms & Conditions</Link></li>
            <li><Link to="/help" className="hover:text-yellow-400 transition">Help Center</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="w-10 h-10 flex items-center justify-center rounded-full 
                         bg-yellow-400 text-black hover:bg-yellow-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} HotDrop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
