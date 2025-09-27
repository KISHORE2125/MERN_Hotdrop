import React, { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen/Components/LoadingScreen";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Client_Site/Navbar/Components/Navbar";
import ClientDashBoard from "./Client_Site/Pages/ClientDashBoard";
import ClientCartPage from "./Client_Site/Pages/ClientCartPage";
import SpecialOffers from "./Client_Site/SpecialOffers/Components/SpecialOffers";
import ClientContactPage from "./Client_Site/Pages/ClientContactPage";
import SignIn from "./Auth/SignIn";
import SignUp from "./Auth/SignUp";
import ClientFoodItemsPage from "./Client_Site/Pages/ClientFoodItemsPage";
import Testimonials from "./Client_Site/Testimonials/Components/Testimonials";
import ClientFAQPage from "./Client_Site/Pages/ClientFAQPage";
import ClientPrivacyPolicyPage from "./Client_Site/Pages/ClientPrivacyPolicyPage";
import ClientTermsAndConditionsPage from "./Client_Site/Pages/ClientTermsAndConditionsPage";
import ClientHelpCenterPage from "./Client_Site/Pages/ClientHelpCenterPage";
import Footer from "./Client_Site/Footer/Components/Footer";

function App() {
  // Show the loading splash only once per browser session
  const [loadingFinished, setLoadingFinished] = useState(() => {
    try {
      return sessionStorage.getItem('hotdrop_splash_shown') === '1';
    } catch (e) {
      return false;
    }
  });

  // A small component inside the Router so useLocation works.
  const ScrollToTopAndHash = () => {
    const location = useLocation();

    useEffect(() => {
      // Immediately jump to top on route change
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      // Determine id to scroll to: prefer hash, otherwise map certain paths
      let id = null;
      if (location && location.hash) {
        id = location.hash.replace("#", "");
      } else if (location.pathname === "/offers") {
        id = "offers";
      } else if (location.pathname === "/testimonials") {
        id = "testimonials";
      }

      if (id) {
        // wait a short moment for the target component to mount/layout
        const t = setTimeout(() => {
          const el = document.getElementById(id);
          if (!el) return;
          const nav = document.querySelector("nav");
          const navHeight = nav ? nav.offsetHeight : 80;
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.pageYOffset - navHeight - 24;
          window.scrollTo({ top, behavior: "smooth" });
        }, 90);
        return () => clearTimeout(t);
      }
      return undefined;
    }, [location.pathname, location.hash]);

    return null;
  };

  if (!loadingFinished) {
    return (
      <LoadingScreen
        duration={3000}
        onFinish={() => {
          try {
            sessionStorage.setItem('hotdrop_splash_shown', '1');
          } catch (e) {}
          setLoadingFinished(true);
        }}
      />
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-50 bg-pink-100">

      <BrowserRouter>
        <Navbar />
        <ScrollToTopAndHash />

        <Routes>
          <Route path="/" element={<ClientDashBoard />} />
          <Route path="/home" element={<ClientDashBoard />} />
          <Route path="/cart" element={<ClientCartPage />} />
          <Route path="/offers" element={<ClientDashBoard showOffers={true} />} />
          <Route path="/contact" element={<ClientContactPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu" element={<ClientFoodItemsPage />} />
          <Route path="/testimonials" element={<ClientDashBoard showTestimonials={true} />} />
          <Route path="/faq" element={<ClientFAQPage />} />
          <Route path="/privacy" element={<ClientPrivacyPolicyPage />} />
          <Route path="/terms" element={<ClientTermsAndConditionsPage />} />
          <Route path="/help" element={<ClientHelpCenterPage />} />
        </Routes>
        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
