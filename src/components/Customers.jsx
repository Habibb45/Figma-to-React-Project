import React from "react";
import "../styles/Customers.css";

const Customers = () => {
  return (
    <section className="customers">
      <h2>Don’t just take our word for it</h2>
      <p>Our customers</p>
      <p>Create account</p>
      <p>Hear from some of our amazing customers who are building faster.</p>
      <div className="customer-quotes">
        <div className="quote">
          <img
            src="/images/alisa.jpg"
            alt="Alisa Hester"
            className="customer-img"
          />
          <p>"We’ve really sped up our workflow using GatherGram."</p>
          <h4>Alisa Hester</h4>
          <p>PM, Hourglass</p>
        </div>
        <div className="quote">
          <img
            src="/images/rich.jpg"
            alt="Rich Wilson"
            className="customer-img"
          />
          <p>"GatherGram has been a game-changer for our business."</p>
          <h4>Rich Wilson</h4>
          <p>COO, Command+R</p>
        </div>
        <div className="quote">
          <img
            src="/images/annie.jpg"
            alt="Annie Stanley"
            className="customer-img"
          />
          <p>"A fantastic tool to help streamline our processes."</p>
          <h4>Annie Stanley</h4>
          <p>Designer, Catalog</p>
        </div>
        <div className="quote">
          <img
            src="/images/johnny.jpg"
            alt="Johnny Bell"
            className="customer-img"
          />
          <p>"GatherGram has simplified our workflow like never before."</p>
          <h4>Johnny Bell</h4>
          <p>PM, Sisyphus</p>
        </div>
        <div className="quote">
          <img src="/images/mia.jpg" alt="Mia Ward" className="customer-img" />
          <p>
            "Our team's productivity has increased tenfold thanks to
            GatherGram."
          </p>
          <h4>Mia Ward</h4>
          <p>Fullstack Dev, Quotient</p>
        </div>
        <div className="quote">
          <img
            src="/images/archie.jpg"
            alt="Archie Young"
            className="customer-img"
          />
          <p>
            "We've seen amazing results and faster development cycles with
            GatherGram."
          </p>
          <h4>Archie Young</h4>
          <p>Marketing, Layers</p>
        </div>
      </div>
      <div className="industries">
        <h3>Our customers work in diverse industries:</h3>
        <ul>
          <li>Web Design Agency</li>
          <li>Web Development Agency</li>
          <li>UX Agency</li>
          <li>Machine Learning</li>
          <li>Performance Marketing</li>
          <li>Machine Learning</li>
        </ul>
      </div>
    </section>
  );
};

export default Customers;
