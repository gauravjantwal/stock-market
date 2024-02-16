import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Menu = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `login`; 
    navigate(path);
  } 
  
  return (
    <div className="collapse navbar-collapse mt-3 w-90" id="collapsibleNavbar">
      <ul className="navbar-nav w-50">
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
      <div className="action-button w-50">
        <Button className="login-btn" onClick={routeChange}>Login</Button>
        {/* <button>Logout</button> */}
      </div>
    </div>
  );
};

export default Menu;
