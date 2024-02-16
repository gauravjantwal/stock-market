import React from 'react';
import { NavLink } from 'react-router-dom';

const signup = () => {  
    return (
        <div>
            <h3>Signup</h3>
            <form>
            <label>Username:&nbsp; </label>
            <input type="text"></input>
            <br></br>
            <label>Password: &nbsp;</label>
            <input type="password"></input>
            <br></br>
            <label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <input type="email"></input>
            <br></br>
            <button className="btn btn-success">Submit</button>
            </form>
            <div>
                <p>Already a user? <NavLink to={`/login`}>Login</NavLink></p>
            </div>
        </div>
    );
};

export default signup