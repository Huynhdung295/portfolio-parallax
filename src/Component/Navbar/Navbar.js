import React from "react";
import "./Navbar.css";
function Navbar() {
  return (
    <nav className="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg hero-navbar">
      <div className="container">
        <a href="/#" className="navbar-brand">
          <span className="font-weight-bold ml-1 pt-3">Hồ Huỳnh Dũng</span>
        </a>
        <button
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link scroll-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link scroll-link">
                About me
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link scroll-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link scroll-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
