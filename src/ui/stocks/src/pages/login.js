import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { loginUser } from "../services/userService";
import store from "../store/store";
import ErrorAlert from "../helpers/alert";

const Login = (props) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState({
    hasError: false,
    code: 400,
    message: "Invalid data submitted",
  });

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const status = await loginUser(email, password, store);
      if (status) {
        setError({
          hasError: false,
          code: 0,
          message: "",
        });
        navigate("/");
      } else {
        setError({
          hasError: true,
          code: 400,
          message: "Invalid credentials",
        });
      }
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error("Error registering user:", error);
      setError({
        hasError: true,
        code: 500,
        message: "Internal Server Error",
      });
    }
  };
  return (
    <>
      <div className="main container login">
        <h1 className="text-center text-color-green">Login</h1>
        <form onSubmit={handleSubmit}>
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
              <p>
                New user?
                <a className="ml-2" onClick={() => props.setLoginPage(false)}>
                  Signup
                </a>
              </p>
            </p>
          </div>
          <div>
            {error.hasError && (
              <ErrorAlert errorCode={error.code} errorMessage={error.message} />
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
