import React from "react";
import "../styles/ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h2>Contact us</h2>
      <p>We’d love to hear from you</p>
      <p>Our friendly team is always here to chat.</p>
      <div className="contact-options">
        <div className="contact-option">
          <h3>Chat to sales</h3>
          <p>Speak to our sales team for inquiries and product info.</p>
        </div>
        <div className="contact-option">
          <h3>Chat to support</h3>
          <p>Need help? Our support team is here to assist you.</p>
        </div>
        <div className="contact-option">
          <h3>Visit us</h3>
          <p>We’re here to help at our office HQ.</p>
          <address>
            <p>
              100 Smith Street
              <br />
              Collingwood VIC 3066 AU
            </p>
            <p>Mon-Fri from 8am to 5pm</p>
          </address>
        </div>
        <div className="contact-option">
          <h3>Call us</h3>
          <p>Speak directly with our team</p>
          <p>+1 (555) 000-0000</p>
        </div>
      </div>
      <div className="contact-emails">
        <p>Email us:</p>
        <ul>
          <li>sales@GatherGram.com</li>
          <li>support@GatherGram.com</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactUs;
