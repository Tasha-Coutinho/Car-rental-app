import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./van.css";

export default function Van() {
  return (
    <div>
      <div className="van-nav">
        <ul>
          <li className="simple btn">
            <NavLink to="simple" className={({ isActive }) => (isActive ? 'active' : '')}>
              Simple
            </NavLink>
          </li>
          <li className="luxury btn"> 
            <NavLink to="luxury" className={({ isActive }) => (isActive ? 'active' : '')}>
              Luxury
            </NavLink>
          </li>
          <li className="rugged btn"> 
            <NavLink to="rugged" className={({ isActive }) => (isActive ? 'active' : '')}>
              Rugged
            </NavLink>
          </li>
          <li className="clear-filters"> 
            <NavLink to="clearfilters">
              Clear filters
            </NavLink>
          </li>

      

        </ul>
      </div>
      <Outlet />
    </div>
  );
}