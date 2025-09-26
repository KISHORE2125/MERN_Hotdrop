// Pages/ClientDashBoard.jsx
import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Components/Navbar";
import Hero from "../Hero/Components/Hero";
import FoodCarousel from "../FoodCrousel/Components/FoodCrousel";
import SpecialOffers from "../SpecialOffers/Components/SpecialOffers";
import Testimonials from "../Testimonials/Components/Testimonials";
import Footer from "../Footer/Components/Footer";

const ClientDashBoard = ({ showOffers = false, showTestimonials = false }) => {
  const offersRef = useRef(null);
  const testimonialsRef = useRef(null);

  const location = useLocation();

  // Scroll when routed with prop (e.g. /offers -> showOffers)
  useEffect(() => {
    if (showOffers && offersRef.current) {
      const scrollToOffers = () => {
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.offsetHeight : 80;
        const rect = offersRef.current.getBoundingClientRect();
  const top = rect.top + window.pageYOffset - navHeight - 24; // increased gap (24px)
        window.scrollTo({ top, behavior: "smooth" });
      };

      // allow a short delay to ensure the section is mounted and layout settled
      setTimeout(scrollToOffers, 80);
    }
  }, [showOffers]);

  // Scroll when URL contains a hash like /#offers (clicking nav/footer links)
  useEffect(() => {
    if (location && location.hash === "#offers" && offersRef.current) {
      const scrollToOffersHash = () => {
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.offsetHeight : 80;
        const rect = offersRef.current.getBoundingClientRect();
  const top = rect.top + window.pageYOffset - navHeight - 24;
        window.scrollTo({ top, behavior: "smooth" });
      };

      setTimeout(scrollToOffersHash, 80);
    }
    // scroll for testimonials hash
    if (location && location.hash === "#testimonials" && testimonialsRef.current) {
      const scrollToTestimonialsHash = () => {
        const nav = document.querySelector("nav");
        const navHeight = nav ? nav.offsetHeight : 80;
        const rect = testimonialsRef.current.getBoundingClientRect();
  const top = rect.top + window.pageYOffset - navHeight - 24;
        window.scrollTo({ top, behavior: "smooth" });
      };

      setTimeout(scrollToTestimonialsHash, 80);
    }
  }, [location.hash]);

  return (
    <>
    
      <Hero />
      <FoodCarousel />
      <div id="offers" ref={offersRef} style={{ scrollMarginTop: "8rem" }}>
        <SpecialOffers />
      </div>
      <div id="testimonials" ref={testimonialsRef} style={{ scrollMarginTop: "8rem" }}>
        <Testimonials />
      </div>
    </>
  );
};

export default ClientDashBoard;
