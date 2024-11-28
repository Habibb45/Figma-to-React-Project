import React from "react";
import "../styles/WeddingPlan.css";

const WeddingPlan = () => {
  return (
    <div className="container">
      <div className="card">
        <h2>Ready to Plan Your Wedding?</h2>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat."
        </p>
        <button className="cta-button">Create Your Event for Free →</button>
        <div className="image-placeholder"></div>
      </div>
    </div>
  );
};

export default WeddingPlan;
