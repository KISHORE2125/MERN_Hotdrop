// Components/Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";   
import Burger_Video from "../HeroAssets/Burger.mp4";

// ✅ Motion Variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
};

const childVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = React.memo(() => {
  const navigate = useNavigate();

  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/assets/Header_Video/BurgerPoster.jpg"
        aria-hidden="true"
      >
        <source src={Burger_Video} type="video/mp4" />
        <source src="/assets/Header_Video/Burger.webm" type="video/webm" />
      </video>

      {/* 🔹 Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black"
      />

      {/* 🔹 Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6"
      >
        {/* Title */}
        <motion.h1
          variants={childVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-snug"
        >
          Craving Something Special?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={childVariants}
          className="mt-3 sm:mt-4 text-base sm:text-lg md:text-2xl text-gray-200 max-w-md sm:max-w-xl"
        >
          Hot meals delivered to your doorstep — fresh, fast, and full of flavor.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          variants={childVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/menu")}
          aria-label="Explore our menu"
          className="mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-red-500 hover:bg-red-600 
                     text-sm sm:text-lg text-white rounded-full shadow-lg 
                     focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Explore Menu 🚀
        </motion.button>
      </motion.div>
    </header>
  );
});

export default Hero;
