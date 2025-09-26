// Pages/ClientContactPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

const ClientContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const typingVariants = {
    idle: { scale: 1, boxShadow: "0 0 0px rgba(239,68,68,0)" },
    typing: {
      scale: 1.02,
      boxShadow: "0 0 12px rgba(239,68,68,0.4)",
      transition: { duration: 0.2 },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ✅ No backend, just console log
    setFormData({ name: "", email: "", message: "" }); // Reset form after submit
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-pink-100 pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-200 to-red-200 opacity-40 blur-2xl"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 15px 35px rgba(239,68,68,0.25)",
        }}
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-8 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Have questions? Send us a message 📩
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.name ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.email ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Message */}
          <div className="relative">
            <FiMessageSquare className="absolute left-3 top-4 text-gray-500 text-lg" />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.message ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm min-h-[120px] resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239,68,68,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg 
                       bg-red-500 hover:bg-red-600 text-white font-semibold text-base 
                       shadow-md transition-all"
          >
            Send Message <FiSend />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default ClientContactPage;
