import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import Order_Now from "../LoadingScreenAsset/OrderNow.json";

// 🔹 Custom hook (merged here)
const useLoadingTimeout = (callback, delay = 2000) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (callback) callback();
    }, delay);

    return () => clearTimeout(timer); // cleanup on unmount
  }, [callback, delay]);
};

const LoadingScreen = ({ onFinish, fade = true, duration = 3000 }) => {
  const animationRef = useRef(null);

  // Stop or pause the animation after `duration` milliseconds and call onFinish
  useEffect(() => {
    const timer = setTimeout(() => {
      // If lottie-react ref available, try to stop playback
      try {
        if (animationRef.current) {
          // lottie-react exposes a .pause() and .stop() depending on version
          if (typeof animationRef.current.pause === "function") {
            animationRef.current.pause();
          } else if (typeof animationRef.current.stop === "function") {
            animationRef.current.stop();
          }
        }
      } catch (e) {
        // ignore
      }

      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, type: "spring", stiffness: 120, damping: 12 },
    },
  };

  return (
    <AnimatePresence>
      {fade && (
        <motion.div
          className="relative h-screen w-screen flex items-center justify-center overflow-hidden animate-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          {/* Main Lottie Animation */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-[90%] max-h-[90%] z-10"
          >
            <Lottie animationData={Order_Now} loop={false} speed={2} lottieRef={animationRef} />
          </motion.div>

          {/* Gradient background animation */}
          <style>
            {`
              .animate-gradient {
                background-size: 400% 400%;
                animation: gradientBG 2s ease forwards;
              }

              @keyframes gradientBG {
                0% { background-position: 0% 50%; }
                100% { background-position: 100% 50%; }
              }
            `}
          </style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
