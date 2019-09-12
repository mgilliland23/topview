import React from "react";
//import "./style.css";

function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img
          src={require("./topview_color.svg")}
          width="100"
          height="40"
          alt="logo"
          className="ml-5"
        />
      </a>
      <span class="navbar-text">Rent a bike</span>
    </nav>
  );
}

export default Navbar;
