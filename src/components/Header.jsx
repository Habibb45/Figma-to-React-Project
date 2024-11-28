import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <h1>GatherGram</h1>
      <p>“Plan, Share, and Celebrate Your Big Day in One Place”</p>
      <p>
        “Create unforgettable memories with a personalized wedding platform for
        you and your guests.”
      </p>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How it Works</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="button-group">
        {/* Use Link to navigate to the Login and Register pages */}
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/register">
          <button className="register-button">Register</button>
        </Link>
      </div>
      <div className="email-section">
        <input type="email" placeholder="Enter your email address" />
      </div>
      <div className="join-stats">
        <p>+2K People Joined!</p>
      </div>
      <div className="testimonial">
        <p>
          "Powerful tool to manage your wedding, engage guests, and celebrate
          together effortlessly."
        </p>
        <p>Connect with your guests</p>
        <p>Easy event management</p>
      </div>
    </header>
  );
};

export default Header;
