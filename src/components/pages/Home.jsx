import React from 'react';
import './home.css'; 
import {Link} from "react-router-dom";
export const Home = () => {
  return (
    <div className="home">
    <div className='container'>
    <h1 >You got the travel plans, we got the travel vans.</h1>
   

      <p className='sm-paragraph'>Add adventure to your life by joining the #vanlife movement.
    <br />Rent the perfect van to make your road trip perfect.
      </p>
     <button><a href="./Van/Clearfilters">Find your van</a></button>
    </div>
    </div>
  );
};

