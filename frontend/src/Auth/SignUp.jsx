import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleChange = (e) => {
    const next = { ...formData, [e.target.name]: e.target.value };
    setFormData(next);
    if (e.target.name === 'email') {
      const v = (e.target.value || '').trim().toLowerCase();
      const isGmail = /^[^@\s]+@gmail\.com$/i.test(v);
      setEmailError(v === '' || isGmail ? '' : 'Please use a Gmail address (example@gmail.com)');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirm) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    (async () => {
      try {
        const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5001';
        const res = await fetch(`${apiBase}/api/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
          body: JSON.stringify({ name: formData.name, email: formData.email, password: formData.password })
        });
        const data = await res.json();
        if (!res.ok) {
          setError(data && data.message ? data.message : 'Signup failed');
          setLoading(false);
          return;
        }
        // Success: you may redirect to dashboard or show success
        setLoading(false);
        window.location.href = '/';
      } catch (err) {
        console.error('Signup request error', err);
        setError('Network error. Please try again.');
        setLoading(false);
      }
    })();
  };

  const handleGoogleSignIn = () => {
    setGoogleLoading(true);
    // Redirect to backend OAuth start (if implemented) using Vite env variable
    const apiBase = import.meta.env.VITE_API_URL || '';
    window.location.href = `${apiBase}/auth/google`;
  };

  const typingVariants = {
    idle: { scale: 1, boxShadow: "0 0 0px rgba(239,68,68,0)" },
    typing: {
      scale: 1.02,
      boxShadow: "0 0 12px rgba(239,68,68,0.4)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-pink-100 pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-200 to-red-200 opacity-40 blur-2xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0 15px 35px rgba(239,68,68,0.25)" }}
        className="relative w-full max-w-md bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-8 z-10"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Create Account
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Sign up to start ordering your favorite meals 🍔🍟
        </p>

        {error && <p className="text-red-500 text-center text-sm mt-2">{error}</p>}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="text"
              name="name"
              placeholder="Full Name"
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
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.email ? "typing" : "idle"}
              className={`w-full pl-10 pr-3 py-2.5 rounded-lg focus:outline-none text-sm ${emailError ? 'border border-red-500' : 'border border-gray-300'}`}
              required
            />
          </div>

          {emailError && (
            <p className="text-red-500 text-xs mt-1">{emailError}</p>
          )}

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.password ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
            <motion.input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              value={formData.confirm}
              onChange={handleChange}
              variants={typingVariants}
              animate={formData.confirm ? "typing" : "idle"}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none text-sm"
              required
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(239,68,68,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg 
                       bg-red-500 hover:bg-red-600 text-white font-semibold text-base 
                       shadow-md transition-all disabled:opacity-50"
          >
            {loading ? "Signing Up..." : "Sign Up"} <FiArrowRight />
          </motion.button>
        </form>

        {/* Google Sign-In */}
        <motion.button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full flex items-center justify-center gap-2 mt-4 px-5 py-2.5 rounded-lg 
                     bg-white border border-gray-300 text-gray-700 font-semibold text-base shadow-md
                     hover:bg-gray-50 transition-all disabled:opacity-50"
        >
          <FcGoogle size={20} /> {googleLoading ? "Signing in..." : "Sign up with Google"}
        </motion.button>

        <p className="text-center text-gray-600 text-xs mt-4">
          Already have an account?{" "}
          <button className="text-red-500 hover:underline font-semibold">Sign In</button>
        </p>
      </motion.div>
    </section>
  );
};

export default SignUp;