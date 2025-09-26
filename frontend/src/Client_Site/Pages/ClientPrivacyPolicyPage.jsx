// Pages/ClientPrivacyPolicyPage.jsx
import React from "react";
import { motion } from "framer-motion";

const ClientPrivacyPolicyPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-20 bg-pink-100 pt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-pink-200 to-red-200 opacity-40 blur-2xl"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-10 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Privacy Policy
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Last updated: September 2025
        </p>

        {/* Content */}
        <div className="mt-8 space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            At <span className="font-semibold text-red-600">HotDrop</span>, your privacy is very
            important to us. This Privacy Policy explains how we collect, use,
            and protect your information when you use our services.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">1. Information We Collect</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Personal information such as name, email, phone number, and address.</li>
            <li>Payment details for processing your transactions.</li>
            <li>Usage data including pages visited, preferences, and interactions.</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900">2. How We Use Your Information</h3>
          <p>
            We use your data to process orders, improve our services, send
            promotional offers, and ensure a seamless user experience.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">3. Sharing of Information</h3>
          <p>
            We do not sell or rent your personal information. However, we may
            share data with trusted partners (like payment gateways and delivery
            providers) to complete your orders.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">4. Data Security</h3>
          <p>
            We implement industry-standard security measures to protect your
            data. However, no method of transmission over the internet is
            100% secure.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">5. Your Rights</h3>
          <p>
            You have the right to access, update, or request deletion of your
            personal information. Please contact us at{" "}
            <span className="font-medium text-red-500">support@hotdrop.com</span> for assistance.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">6. Updates to this Policy</h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the revised date.
          </p>

          <p className="text-sm text-gray-600 mt-6">
            By using our services, you agree to the terms of this Privacy
            Policy.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientPrivacyPolicyPage;
