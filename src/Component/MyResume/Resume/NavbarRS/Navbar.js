import React from "react";
import "./Navbar.css";
import dataNavbar from "./DataNavbar";
function Navbar() {
  const toggleMenu = () => {
    const nav = document.getElementById("nav-menu");
    nav.classList.toggle("show-menu");
  };
  const data = dataNavbar.map((data) => {
    return (
      <li key={data.navIcon} className="nav__item">
        <a
          href={data.navHref}
          onClick={() => {
            const nav = document.getElementById("nav-menu");
            nav.classList.remove("show-menu");
          }}
          className="nav__link"
        >
          <i className={data.navIcon} /> {data.navTitle}
        </a>
      </li>
    );
  });

  return (
    <header className="l-header" id="header">
      <div className="nav bd-container">
        <a href="/#" className="nav__logo">
          Huỳnh Dũng
        </a>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">{data}</ul>
        </div>
        <div className="nav__toggle" onClick={toggleMenu}>
          <i className="bx bx-grid-alt nav__icon" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
