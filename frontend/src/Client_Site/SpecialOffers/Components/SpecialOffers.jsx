// Components/Special_Offers_Section.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import OfferImage from "../../../GlobalAssets/FoodItemPng/Chicken_Burger.png"; // ✅ Offer Image

const SpecialOffers = () => {
  // ✅ Inline countdown (2 hours from now)
  const [timeLeft, setTimeLeft] = useState({ hrs: 2, mins: 0, secs: 0 });

  useEffect(() => {
    const targetTime = Date.now() + 2 * 60 * 60 * 1000; // 2 hours

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hrs: 0, mins: 0, secs: 0 });
      } else {
        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        setTimeLeft({ hrs, mins, secs });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="offers"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mt-28 px-6 md:px-20 relative z-10 rounded-3xl"
    >
      <div
        className="relative flex flex-col md:flex-row items-center overflow-hidden 
                   bg-gradient-to-r from-gray-900/95 to-black/95
                   border border-yellow-600/50 backdrop-blur-xl 
                   shadow-[0_0_40px_rgba(250,204,21,0.15)] 
                   rounded-3xl p-10 md:p-14 gap-10 z-10"
      >
        {/* Left Side - Promo Image */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex justify-center md:w-1/2"
        >
          <img
            src={OfferImage}
            alt="Special Offer"
            className="w-64 h-64 md:w-72 md:h-72 object-contain 
                       drop-shadow-[0_0_35px_rgba(250,204,21,0.4)]"
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-6">
          {/* Subtitle */}
          <span className="uppercase tracking-widest text-xl font-semibold text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.5)]">
            ⏰ Offer Closes Soon !
          </span>

          {/* Title */}
          <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Indulge in <span className="text-yellow-400">25% OFF</span> Today
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-300 max-w-md leading-relaxed">
            Experience gourmet flavors with a classic twist. Secure your discount before the clock hits zero!
          </p>

          {/* Countdown Timer */}
          <div className="flex gap-4">
            {[timeLeft.hrs, timeLeft.mins, timeLeft.secs].map((unit, i) => (
              <motion.div
                key={i}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: [0, 180, 360] }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 59,
                }}
                className="relative px-5 py-4 rounded-lg bg-gradient-to-b from-yellow-400 to-yellow-600 
                           text-black font-extrabold text-2xl shadow-[inset_0_2px_4px_rgba(255,255,255,0.3),0_4px_15px_rgba(250,204,21,0.4)]
                           min-w-[75px] text-center border border-yellow-700/60 perspective-1000 overflow-hidden"
              >
                {unit.toString().padStart(2, "0")}
                <motion.span
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(250,204,21,0.8)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
            className="relative mt-6 flex items-center gap-2 px-8 py-3 rounded-xl 
                       bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
                       text-black font-bold text-lg 
                       shadow-[0_0_20px_rgba(250,204,21,0.5)] hover:shadow-[0_0_40px_rgba(250,204,21,0.7)] 
                       transition-all overflow-hidden"
          >
            Order Now <FiArrowRight className="text-xl" />
            <motion.span
              initial={{ x: "-150%" }}
              animate={{ x: "150%" }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default SpecialOffers;
