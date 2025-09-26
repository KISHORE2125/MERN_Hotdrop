import React, { useEffect, useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Deliverylogo from "../NavbarAssets/Logo/Delivery_Riding.json";

const Navbar = ({ showAfterSplash = true }) => {
  // ✅ State merged from hook
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Handlers
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  // ✅ Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  // ✅ Motion Variants
  const variants = {
    linkItem: {
      hidden: { y: -20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } },
      hoverX: { scale: 1.2, rotateX: 15 },
      hoverY: { scale: 1.15, rotateY: 12 },
    },
    mobileMenu: {
      hidden: { y: "-100%", opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: { type: "tween", duration: 0.5, staggerChildren: 0.05 },
      },
      exit: { y: "-100%", opacity: 0, transition: { type: "tween", duration: 0.3 } },
    },
    container: { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } },
  };

  return (
    <AnimatePresence>
      {showAfterSplash && (
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: "tween", duration: 0.5 }}
          className={`fixed top-0 left-0 w-full backdrop-blur-lg z-50 transition-all duration-500 ${
            scrolled ? "bg-pink-100 shadow-lg h-20" : "bg-pink-100 shadow-md h-24"
          }`}
          style={{ perspective: "1500px" }}
        >
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-full">
              {/* ✅ Logo */}
              <motion.div
                variants={variants.linkItem}
                whileHover={{ rotateY: 15, scale: 1.1 }}
                className="flex items-center cursor-pointer drop-shadow-lg"
              >
                <div
                  className={`transition-all duration-500 ${
                    scrolled ? "w-14 h-14" : "w-20 h-20"
                  }`}
                >
                  <Lottie animationData={Deliverylogo} loop />
                </div>
                <span
                  className={`font-bold text-red-600 ml-2 drop-shadow-lg transition-all duration-500 ${
                    scrolled ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
                  }`}
                >
                  Hot Drop!
                </span>
              </motion.div>

              {/* ✅ Desktop Links */}
              <motion.div
                className="hidden md:flex flex-1 justify-center items-center space-x-8 text-black"
                variants={variants.container}
                initial="hidden"
                animate="visible"
              >
                <Link to="/" className="font-bold hover:text-red-500 transition-colors duration-300">
                  Home
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center gap-2 font-bold hover:text-red-500 transition-colors duration-300"
                >
                  Cart
                  <FiShoppingCart className="text-xl" />
                </Link>
                <Link
                  to="/#offers"
                  className="font-bold hover:text-red-500 transition-colors duration-300"
                >
                  Offers
                </Link>
                <Link
                  to="/contact"
                  className="font-bold hover:text-red-500 transition-colors duration-300"
                >
                  Contact
                </Link>
              </motion.div>

              {/* ✅ Desktop Buttons */}
              <motion.div className="hidden md:flex items-center space-x-6">
                <Link to="/signup">
                  <motion.button
                    className="px-7 py-3 border border-red-500 text-red-600 font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-red-500 hover:text-white text-lg"
                    variants={variants.linkItem}
                    whileHover={variants.linkItem.hoverY}
                  >
                    Sign Up
                  </motion.button>
                </Link>
                <Link to="/signin">
                  <motion.button
                    className="px-7 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:bg-red-600 text-lg"
                    variants={variants.linkItem}
                    whileHover={{ scale: 1.1, rotateY: -10 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
              </motion.div>

              {/* ✅ Mobile Hamburger */}
              <div className="md:hidden flex items-center">
                <button onClick={toggleMobileMenu} className="text-black text-4xl">
                  {mobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
              </div>
            </div>
          </div>

          {/* ✅ Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                variants={variants.mobileMenu}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="md:hidden bg-pink-100 backdrop-blur-lg fixed inset-0 z-50 flex flex-col min-h-screen"
              >
                <div className="flex justify-end p-4">
                  <button
                    onClick={toggleMobileMenu}
                    className="text-3xl text-red-600 hover:text-red-800"
                  >
                    <FiX />
                  </button>
                </div>

                {/* ✅ Fullscreen Mobile Links */}
                <div className="flex flex-col flex-grow space-y-8 text-black text-2xl bg-pink-100 px-6 py-12">
                  <Link
                    to="/"
                    onClick={toggleMobileMenu}
                    className="hover:text-red-500 font-bold transition-colors duration-300 drop-shadow-md"
                  >
                    Home
                  </Link>
                  <Link
                    to="/cart"
                    onClick={toggleMobileMenu}
                    className="flex items-center gap-3 hover:text-red-500 font-bold transition-colors duration-300 drop-shadow-md"
                  >
                    Cart <FiShoppingCart className="text-2xl" />
                  </Link>
                  <Link
                    to="/#offers"
                    onClick={toggleMobileMenu}
                    className="hover:text-red-500 font-bold transition-colors duration-300 drop-shadow-md"
                  >
                    Offers
                  </Link>
                  <Link
                    to="/contact"
                    onClick={toggleMobileMenu}
                    className="hover:text-red-500 font-bold transition-colors duration-300 drop-shadow-md"
                  >
                    Contact
                  </Link>

                  {/* ✅ Buttons */}
                  <Link to="/signup" onClick={toggleMobileMenu}>
                    <motion.button
                      className="px-8 py-3 border border-red-500 text-red-600 font-semibold rounded-lg hover:bg-red-500 hover:text-white"
                      variants={variants.linkItem}
                      whileHover={{ scale: 1.15, rotateY: 8 }}
                    >
                      Sign Up
                    </motion.button>
                  </Link>
                  <Link to="/signin" onClick={toggleMobileMenu}>
                    <motion.button
                      className="px-8 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
                      variants={variants.linkItem}
                      whileHover={{ scale: 1.15, rotateY: -8 }}
                    >
                      Sign In
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
