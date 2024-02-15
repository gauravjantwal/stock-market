import "./App.css";
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import {  Routes, Route, Link } from "react-router-dom";
import ProtectedRoute from './utility/protectedRoute';
import { loadUserFromStorage } from './services/userService';
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import watchList from "./pages/watchList";
import Menu from "./layout/menu";
import logo from './logo.webp';
import Login from "./pages/login";
import AuthProvider from "./utility/authProvider";

function App() {

  useEffect(() => {
    // fetch current user from cookies   
    loadUserFromStorage(store)

  }, []);
 
  return (
    <Provider store={store}>
      <AuthProvider>
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
            <Route path="/login" component={Login} />
            <Route path="/" Component={Dashboard} />
            <Route path="/watchlist" element={<ProtectedRoute element={watchList} />} />
            <Route path="/about" Component={About} />
          </Routes>
        </div>
      </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
