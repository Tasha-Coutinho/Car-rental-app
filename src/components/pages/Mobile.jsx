import React from 'react';
import './mobile.css'; 
import { Link } from "react-router-dom";
import './font awesome/font-awesome-4.7.0/css/font-awesome.min.css';

export const Mobile = () => {
  return (
    <div class="van-details">
    <div class="van-details-main">
      <div class="top-van-info">
        <div class="prev-van-links">
          
          <a href="./van/clearfilters"><i class="fa fa-arrow-left"></i> Back to all vans </a>
        </div>
        <div class="van1 van"></div>
      </div>
      <div class="van-text">
        <div class="Products-info">
          <div class="carname-btn">
            <p>Modest Explorer</p>
            <a href="" class="sm-scrnbtn"
              ><button class="Rugged-btn">Simple</button></a
            >
          </div>
          <p class="links links2">$60<span>/day</span></p>
        </div>
        <p class="main-text">
          The Modest Explorer is a van designed to get you out of the house
          and into nature. This beauty is equipped with solar panels, a
          composting toilet, a water tank and kitchenette. The idea is that
          you can pack up your home and escape for a weekend or even longer!
        </p>

        <div class="bg-scrnbtns">
          <a href="" class="bg-scrnbtn"
            ><button class="Rugged-btn">Simple</button></a
          >
          <a href="" class="bg-scrnbtn"
            ><button class="Rent-btn">Rent Van</button></a
          >
        </div>
      </div>
    </div>
  </div>
  );
};
