import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { logoutUser } from '../services/userService';
import store from '../store/store';

const Menu = () => {
  const user = useSelector(state => state.authInformation.user);
  function logout(){
    logoutUser(store);
  }
  return (
    <div className="collapse navbar-collapse mt-3" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink activeclassName="active" className="nav-link" to="/">
            Dashboard
          </NavLink>
        </li>
        {user ? 
        <li className="nav-item">
          <NavLink
            activeclassName="active"
            className="nav-link"
            to="/watchlist">
            WatchList
          </NavLink>
        </li>
        : ""}
        
        <li className="nav-item">
          <NavLink activeclassName="active" className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        {!user ? (
          <>
            <li className="nav-item">
              <NavLink activeclassName="active" className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeclassName="active" className="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </>
        ) : (
          <li className="nav-item">
            <button className="btn btn-link nav-link" onClick={logout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
