import "./App.css";
import React, { useEffect } from "react";
import { Provider } from 'react-redux';
import store from './store/store';
import ProtectedRoute from './utility/protectedRoute';
import { loadUserFromStorage } from './services/userService';
import {Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import About from "./pages/about";
import watchList from "./pages/watchList";
import Menu from "./layout/menu";
import logo from './logo.webp';
import Login from "./pages/login";
import AuthProvider from "./utility/authProvider";
import WatchListDetailsPage from "./pages/watchlist-details-page";
import Signup from "./pages/signup";
import WatchList from "./pages/watchList";

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
            <Route path="/signup" Component={Signup} />
            <Route path="/login" Component={Login} />
            <Route path="/" Component={Dashboard} />
            <Route element={<ProtectedRoute/>}>
              <Route path='/watchlist' element={<WatchList/>} />
              <Route path="/details" element={<WatchListDetailsPage />}>
              <Route path=":id" element={<WatchListDetailsPage />} />
              <Route path=":name" element={<WatchListDetailsPage />} />
            </Route>           
            </Route>
            <Route path="/about" Component={About} />            
          </Routes>
        </div>
      </div>
      </AuthProvider>
    </Provider>
  );
}

export default App;
