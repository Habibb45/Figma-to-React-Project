import React from "react";
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Scale your workload without waiting for the engineering team.</p>
      <div className="how-it-works-cards">
        <div className="how-it-card">
          <h3>Sign Up</h3>
          <p>Create your free account and get started in minutes.</p>
        </div>
        <div className="how-it-card">
          <h3>Positive Reviews</h3>
          <p>See what our users are saying about GatherGram.</p>
        </div>
        <div className="how-it-card">
          <h3>Regular Users</h3>
          <p>Join thousands of regular users who trust GatherGram.</p>
        </div>
        <div className="how-it-card">
          <h3>Team Members</h3>
          <p>
            Work collaboratively with your team to create successful events.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
