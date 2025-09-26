// Pages/ClientDashBoard.jsx
import React from "react";
import Hero from "../Hero/Components/Hero";
import FoodCarousel from "../FoodCrousel/Components/FoodCrousel";
import SpecialOffers from "../SpecialOffers/Components/SpecialOffers";
import Testimonials from "../Testimonials/Components/Testimonials";

const ClientDashBoard = ({ showOffers = false, showTestimonials = false }) => {
  return (
    <>
      <Hero />
      <FoodCarousel />
      <div id="offers" style={{ scrollMarginTop: "8rem" }}>
        <SpecialOffers />
      </div>
      <div id="testimonials" style={{ scrollMarginTop: "8rem" }}>
        <Testimonials />
      </div>
    </>
  );
};

export default ClientDashBoard;
