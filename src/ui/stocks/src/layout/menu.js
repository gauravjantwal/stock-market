import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const Menu = () => {
  const user = useSelector(state => state.authInformation.user);
  debugger;
  return (
    <div className="collapse navbar-collapse mt-3" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/">
            Dashboard
          </NavLink>
        </li>
        {user ? 
        <li className="nav-item">
          <NavLink
            activeClassName="active"
            className="nav-link"
            to="/watchlist"
          >
            WatchList
          </NavLink>
        </li>
        : ""}
        
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
