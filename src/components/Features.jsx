import React from "react";
import "../styles/Features.css";

const Features = () => {
  return (
    <section className="features">
      <h2>Our Features</h2>
      <p>
        “Easily create and manage your wedding events, from the ceremony to the
        reception.”
      </p>
      <div className="features-container">
        <div className="feature-card">
          <h3>Event Management</h3>
          <p>
            Increased conversion and expansion on new markets. Dynamic business
            development.
          </p>
        </div>
        <div className="feature-card guest-interaction">
          <h3>Guest Interaction</h3>
          <p>
            Execute pay outs & refunds straight to customer’s bank account via
            Finpay. Increase satisfaction and retention.
          </p>
        </div>
        <div className="feature-card">
          <h3>Donate & Contribute</h3>
          <p>
            No cards or payment details insertion, no additional registration or
            app download by your customers.
          </p>
        </div>
        <div className="feature-card">
          <h3>Custom Love Story Page</h3>
          <p>
            Personal information is encrypted and protected by industry standard
            banking security.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
