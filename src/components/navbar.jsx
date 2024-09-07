import React,{useState} from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./navbar.css";

export const Navbar = () =>{
  const [menuOpen,setMenuOpen] =useState(false)
  return (
    <nav>
       <Link to="/" className="title">#CarRental</Link>
      <ul className={menuOpen ? "open" :""}>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/van/clearfilters">Van</NavLink>
        </li>
      </ul>
    </nav>
  );
};