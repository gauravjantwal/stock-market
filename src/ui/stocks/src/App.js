import "./App.css";
import React from "react";
import {  Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import watchList from "./pages/watchList";
import IPO from "./pages/ipo";
import Menu from "./layout/menu";
import logo from './logo.webp';

function App() {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-sm">
          <div className="">
            <a className="navbar-brand float-left">
              {/* <strong>Stock Market</strong>
               */}
               <img className="logo" src={logo}></img>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Menu />
          </div>
        </nav>
      </div>
      <div className="container mt-3">
        <div>
          <Routes>
            <Route path="/" Component={Dashboard} />
            <Route path="/watchlist" Component={watchList} />
            <Route path="/ipo" Component={IPO} />
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
