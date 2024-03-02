import React from 'react'
import '../css/NavBAr.css'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="bg2">
      <div className="page">
        <div className="text">
          <NavLink className="hello" to="/">
            Home
          </NavLink>
          <NavLink className="hello" to="/services">
            Services
          </NavLink>
          <NavLink className="hello" to="/contactus">
            Contact Us
          </NavLink>
          <NavLink className="hello" to="/workwithus">
            Work With Us
          </NavLink>
        </div>
      </div>
    </div>
  );
}
