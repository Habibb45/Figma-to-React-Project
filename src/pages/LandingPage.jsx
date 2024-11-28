import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Plans from "../components/Plans";
import Customers from "../components/Customers";
import FrequentlyQuestions from "../components/FrequentlyQuestions";
import WeddingPlan from "../components/WeddingPlan";
import ContactUs from "../components/ContactUS";
import Footer from "../components/Footer";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <section className="intro">
        <h2>Welcome to GatherGram</h2>
        <p>Your go-to platform for seamless connections.</p>
        <div className="cta"></div>
      </section>
      <Features />
      <HowItWorks />
      <Plans />
      <Customers />
      <FrequentlyQuestions />
      <WeddingPlan />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default LandingPage;
