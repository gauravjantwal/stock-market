import React from "react";
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="collapse navbar-collapse mt-3" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/">
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/watchlist"
          >
            WatchList
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/ipo">
            IPO
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
