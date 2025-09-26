// Pages/ClientTermsAndConditionsPage.jsx
import React from "react";
import { motion } from "framer-motion";

const ClientTermsAndConditionsPage = () => {
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
          Terms & Conditions
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Last updated: September 2025
        </p>

        {/* Content */}
        <div className="mt-8 space-y-6 text-gray-700 text-sm leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-red-600">HotDrop</span>! 
            By accessing or using our services, you agree to be bound by these Terms & Conditions. 
            Please read them carefully.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">1. Use of Services</h3>
          <p>
            You agree to use our services only for lawful purposes and in accordance with these terms. 
            Misuse of our platform may result in termination of your account.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">2. Accounts & Registration</h3>
          <p>
            You must provide accurate information when creating an account. 
            You are responsible for maintaining the confidentiality of your login details.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">3. Orders & Payments</h3>
          <p>
            All orders are subject to availability. Prices may change without notice. 
            Payments must be made using our approved methods.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">4. Delivery</h3>
          <p>
            We aim to deliver your orders promptly, but we are not responsible for delays 
            caused by unforeseen circumstances.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">5. Cancellations & Refunds</h3>
          <p>
            Cancellation requests must be made before order processing. Refunds are issued 
            in accordance with our refund policy.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">6. Intellectual Property</h3>
          <p>
            All content on our platform, including logos, text, and images, is owned by HotDrop 
            and may not be used without permission.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">7. Limitation of Liability</h3>
          <p>
            HotDrop is not liable for any indirect, incidental, or consequential damages 
            arising from the use of our services.
          </p>

          <h3 className="text-lg font-semibold text-gray-900">8. Changes to Terms</h3>
          <p>
            We may update these Terms & Conditions at any time. Continued use of our services 
            means you accept the updated terms.
          </p>

          <p className="text-sm text-gray-600 mt-6">
            If you have any questions regarding these Terms & Conditions, please contact us at{" "}
            <span className="font-medium text-red-500">support@hotdrop.com</span>.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default ClientTermsAndConditionsPage;
