// src/components/Footer.jsx
import React, { useState } from "react";
import "../styles/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Join our newsletter</h2>
        <p>Stay up to date</p>
        <form onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        <p className="hint-text">
          We’ll send you a nice letter once per week. No spam.
        </p>
      </div>
      <div className="footer-info">
        <div className="footer-left">
          <p className="company-name">GatherGram</p>
          <ul className="footer-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <p className="support-title">Support Us</p>
          <ul className="footer-links">
            <li>
              <a href="#">Partner</a>
            </li>
            <li>
              <a href="#">
                Medfysio provides clear and easy-to-understand health-related
                information resource or services.
              </a>
            </li>
          </ul>
          <div className="contact-info">
            <p>
              Email:{" "}
              <a href="mailto:GatherGram@business.com">
                GatherGram@business.com
              </a>
            </p>
            <p>
              Phone: <a href="tel:+61770106803">+61 7 7010 6803</a>
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GatherGram, We love our users!</p>
        <p>Copyright &copy; 2024 all rights reserved</p>
        <ul className="footer-bottom-links">
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Sitemap</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
