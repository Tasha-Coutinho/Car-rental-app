import React from "react";
import "./van1.css";

const Van1 = () => {
  return (
    <div className="van1-container">
      <div className="van1-details">
        <h2 className="van1-title">Van Name: Modest Explorer</h2>
        <div className="van1-image"></div>
        <p className="van1-description">
          This van is equipped with solar panels, a composting toilet, a water tank, and a kitchenette. Perfect for weekend escapes into nature!
        </p>
        <div className="van1-price">
          <p>$60/day</p>
        </div>
        <button className="van1-book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default Van1;
