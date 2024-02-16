import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {  
    return (
        <div>
            <h3>Login</h3>
            <form>
            <label>Username: </label>
            <input type="text"></input>
            <br></br>
            <label>Password: </label>
            <input type="password"></input>
            <br></br>
            <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
};

export default Login