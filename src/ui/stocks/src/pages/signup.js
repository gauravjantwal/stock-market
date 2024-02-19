import React, { useEffect, useState  } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import {registerUser } from '../services/userService';
import store from '../store/store';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        const error = {
            code: 400,
            message: 'Invalid data submitted',
          };
     const status = await registerUser(username, email, password, store);
     if(status){
      navigate("/login");
     }
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error('Error registering user:', error);
        error = {
        code: 400,
        message: 'Invalid data submitted',
      };
      // Optionally, display an error message to the user
    }
  };

    return (
        <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <label>Username:&nbsp; </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <br />
        <label>Password: &nbsp;</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit" className="btn btn-success">Submit</button> 
      </form>
      <div>
        <p>Already a user? <NavLink to={`/login`}>Login</NavLink></p>
      </div>
    </div>
    );
};

export default Signup