import React from "react";
import "./About.css"

export const About = () =>{
  return (
    <div className="abt-div">
<div className="abt-img">

</div>
<div className="abt-btm-div">
<div className="abt-text">
<h1 className="bg-scrn-heading">Don't squeeze in a sedan when you can relax in a van.</h1>
<div className="sm-text-div">
  <h1 className="sm-scrn-heading">Don't squeeze in a sedan when <br />you can relax in a van.</h1>
 </div>
  <p className="bg-scrn-para">Our mission is to enliven your road trip with the perfect travel van rental.Our vans are
     recertified before <br />each trip to ensure tha your travel plans go off without a hitch. <span>Hitch costs extra 😉
     Our team is full of <br />vanlife enthusiasts who know first the magic of touring the world on 4 wheels.</span></p>
 <div className="sm-text-div">
 <p className="sm-scrn-para">Our mission is to enliven your road trip with the perfect travel <br />van rental.Our vans are
     recertified before each trip to ensure that <br />your travel plans go off without a hitch.</p>
     <p className="sm-scrn-para">Hitch costs extra 😉</p>
     <p className="sm-scrn-para">Our team is full of vanlife enthusiasts who know first the <br />magic of touring the world on 4 wheels.</p>

 </div>
</div>

<div className="box">
  <div className="box-text">
  <h3 className="sm">Your destination is waiting <br />Your van is ready.</h3>
  <h3 className="bg">Your destination is waiting .Your van is ready.</h3>
  <a href="./Van/Clearfilters"><button>Explore our vans</button></a>
  </div>
</div>
</div>
    </div>
  );
};