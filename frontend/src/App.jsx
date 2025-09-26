import React, { useState } from "react";
import LoadingScreen from "./LoadingScreen/Components/LoadingScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
  const [loadingFinished, setLoadingFinished] = useState(false);

  if (!loadingFinished) {
    return (
      <LoadingScreen
        duration={3000}
        onFinish={() => setLoadingFinished(true)}
      />
    );
  }

  return (
              <div className="relative min-h-screen bg-gray-50 bg-pink-100">

    <BrowserRouter>
      <Navbar />

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
