// Pages/ClientHelpCenterPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { FiSearch, FiPhone, FiMail } from "react-icons/fi";

const ClientHelpCenterPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-pink-100 pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-200 to-red-200 opacity-40 blur-2xl"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-10 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Help Center
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Find answers, get support, and resolve issues quickly.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex items-center bg-gray-100 rounded-lg px-4 py-2 shadow-sm">
          <FiSearch className="text-gray-500 text-lg mr-2" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full bg-transparent focus:outline-none text-sm"
          />
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Ordering & Payments</h3>
            <p className="text-gray-600 text-sm mt-2">
              Learn how to place an order, apply coupons, and manage payments securely.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Delivery</h3>
            <p className="text-gray-600 text-sm mt-2">
              Track your delivery, understand time estimates, and resolve delays.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Account</h3>
            <p className="text-gray-600 text-sm mt-2">
              Manage your profile, update passwords, and set preferences.
            </p>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} className="p-6 border rounded-xl shadow-sm bg-gray-50">
            <h3 className="text-lg font-semibold text-gray-900">Refunds & Support</h3>
            <p className="text-gray-600 text-sm mt-2">
              Request refunds, report issues, and contact customer support.
            </p>
          </motion.div>
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Still need help?</h3>
          <p className="text-gray-600 text-sm mt-1">Our team is here to assist you 24/7.</p>
          <div className="flex justify-center gap-6 mt-4">
            <motion.a
              href="mailto:support@hotdrop.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border bg-gray-50 text-gray-700 text-sm shadow-sm"
            >
              <FiMail /> Email Us
            </motion.a>
            <motion.a
              href="tel:+911234567890"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-5 py-2 rounded-lg border bg-gray-50 text-gray-700 text-sm shadow-sm"
            >
              <FiPhone /> Call Us
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientHelpCenterPage;
