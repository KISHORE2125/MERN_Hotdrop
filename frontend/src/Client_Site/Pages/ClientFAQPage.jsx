// Pages/ClientFAQPage.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// ✅ Hardcoded FAQs (no database)
const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Browse our menu, select your favorite items, and proceed to checkout. You can pay online or choose cash on delivery.",
  },
  {
    question: "Do you offer free delivery?",
    answer:
      "Yes! We offer free delivery on all orders above ₹499. Delivery charges may apply for smaller orders.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Absolutely! Once your order is placed, you’ll receive a tracking link to see real-time updates until your food arrives.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept UPI, debit/credit cards, net banking, and popular wallets. Cash on delivery is also available.",
  },
  {
    question: "How do I use a promo code?",
    answer:
      "You can enter your promo code at checkout. The discount will be applied automatically before payment.",
  },
];

const ClientFAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.12)] p-6 md:p-10 z-10"
      >
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 drop-shadow-sm">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mt-1 text-sm">
          Find quick answers to common questions 📚
        </p>

        {/* FAQ Accordion */}
        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium hover:bg-gray-50 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <FiChevronUp className="text-red-500" />
                ) : (
                  <FiChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 pb-3 text-gray-600 text-sm leading-relaxed bg-gray-50"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ClientFAQPage;
