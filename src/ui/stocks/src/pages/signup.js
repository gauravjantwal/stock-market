import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
import store from "../store/store";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const error = {
        code: 400,
        message: "Invalid data submitted",
      };
      const status = await registerUser(username, email, password, store);
      if (status) {
        navigate("/login");
      }
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Error registering user:", error);
      error = {
        code: 400,
        message: "Invalid data submitted",
      };
      // Optionally, display an error message to the user
    }
  };

  return (
    <div>
      <div className="main container login">
        <h1 className="text-center text-color-green">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              for="exampleInputuser"
              className="form-label gray-text-color"
            >
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputuser"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleInputemail"
              className="form-label gray-text-color"
            >
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputemail"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label gray-text-color"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn bg-color-green text-white">
              Submit
            </button>
          </div>
          <div className="text-center mt-2">
            <p>
              Already a user?
              <a className="ml-2" onClick={() => props.setLoginPage(true)}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
