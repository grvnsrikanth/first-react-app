import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
        <>
            <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse m-auto" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" a className="nav-link" >
              Home
            </NavLink>
          </li>
         
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/myteam" className="nav-link" >
              My Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" className="nav-link" >
            register
            </NavLink>
          </li>
          
        </ul>
      </div>
        </>
    )
}