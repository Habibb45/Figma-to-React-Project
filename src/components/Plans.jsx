import React from "react";
import "../styles/Plans.css";

const Plans = () => {
  return (
    <section className="plans">
      <h2>Pricing</h2>
      <p>Plans that fit your scale</p>
      <p>
        Simple, transparent pricing that grows with you. Try any plan free for
        30 days.
      </p>
      <div className="billing">
        <button>Monthly billing</button>
        <button>Annual billing</button>
        <span>Save 20%</span>
      </div>
      <div className="plans-container">
        <div className="plan-card">
          <h3>Basic plan</h3>
          <p>$0</p>
          <p>per month</p>
          <div className="features">
            <p>Everything in our free plan</p>
            <p>Access to basic features</p>
            <p>Attend events</p>
            <p>200+ integrations</p>
          </div>
          <button>Get started</button>
        </div>
        <div className="plan-card popular">
          <h3>Business plan</h3>
          <p>$20</p>
          <p>per month</p>
          <p className="popular-tag">Popular</p>
          <div className="features">
            <p>Everything in our free plan</p>
            <p>Advanced custom fields</p>
            <p>Basic reporting + analytics</p>
            <p>Automatic updates</p>
          </div>
          <button>Get started</button>
        </div>
        <div className="plan-card">
          <h3>Advanced plan</h3>
          <p>$40</p>
          <p>per month</p>
          <div className="features">
            <p>Everything in our business plan</p>
            <p>Advanced reporting</p>
            <p>Audit log and data history</p>
            <p>Up to 10 individual users</p>
            <p>Backup your account</p>
          </div>
          <button>Get started</button>
        </div>
      </div>
    </section>
  );
};

export default Plans;
