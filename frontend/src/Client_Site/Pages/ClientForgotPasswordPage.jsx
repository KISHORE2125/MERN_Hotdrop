// Components/ClientForgotPasswordPage.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ClientForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  // Motion variants for typing effect
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
    console.log("Password reset requested for:", email);
    alert(`Password reset link sent to ${email} (simulated)`); // simulate success
    setEmail(""); // reset field
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
        className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-8 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Forgot Password?
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Enter your email to reset your password 🔑
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variants={typingVariants}
              animate={email ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
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
            Reset Password <FiArrowRight />
          </motion.button>
        </form>

        {/* Back to Sign In */}
        <p className="text-center text-gray-600 text-xs mt-4">
          Remembered your password?{" "}
          <Link to="/signin" className="text-red-500 hover:underline font-semibold">
            Sign In
          </Link>
        </p>
      </motion.div>
    </section>
  );
};

export default ClientForgotPasswordPage;
