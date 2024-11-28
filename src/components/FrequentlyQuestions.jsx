import React from "react";
import "../styles/FrequentlyQuestions.css";

const FrequentlyQuestions = () => {
  return (
    <section className="frequently-questions">
      <h2>Frequently Asked Questions</h2>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq">
        <div className="faq-item">
          <h3>Is there a free trial available?</h3>
          <p>
            Yes, you can try us for free for 30 days. Our friendly team will
            work with you to get you up and running as soon as possible.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can I change my plan later?</h3>
          <p>
            Of course. Our pricing scales with your company. Chat to our
            friendly team to find a solution that works for you.
          </p>
        </div>
        <div className="faq-item">
          <h3>What is your cancellation policy?</h3>
          <p>
            We understand that things change. You can cancel your plan at any
            time and we’ll refund you the difference already paid.
          </p>
        </div>
        <div className="faq-item">
          <h3>Can other info be added to an invoice?</h3>
          <p>
            At the moment, the only way to add additional information to
            invoices is to add the information to the workspace's name.
          </p>
        </div>
        <div className="faq-item">
          <h3>How does billing work?</h3>
          <p>
            Plans are per workspace, not per account. You can upgrade one
            workspace, and still have any number of free workspaces.
          </p>
        </div>
        <div className="faq-item">
          <h3>How do I change my account email?</h3>
          <p>
            You can change the email address associated with your account by
            going to untitled.com/account from a laptop or desktop.
          </p>
        </div>
      </div>
      <div className="contact">
        <h3>Still have questions?</h3>
        <p>
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button>Get in touch</button>
      </div>
    </section>
  );
};

export default FrequentlyQuestions;
