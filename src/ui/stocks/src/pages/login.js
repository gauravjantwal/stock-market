import React from 'react';

const Login = () => {
    return (
        <div>
            <h4>Login</h4>
            <form>
            <label>Username:&nbsp; </label>
            <input type="text"></input>
            <br></br>
            <label>Password: &nbsp;</label>
            <input type="password"></input>
            <br></br>
            <button className="btn btn-success">Submit</button>
            </form>
        </div>
    );
}

export default Login;
