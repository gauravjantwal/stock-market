import React, { useState } from 'react';
import { NavLink , useNavigate} from 'react-router-dom';
import { loginUser } from '../services/userService';
import store from '../store/store';
import ErrorAlert  from '../helpers/alert';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState({
    hasError: false,
    code: 400,
    message: 'Invalid data submitted',
  });

  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {        
      const status = await loginUser(email, password, store)
      if(status){        
        setError({
          hasError: false,
          code: 0,
          message: '',
        }); 
        navigate("/");
      }else{
        setError({
            hasError: true,
            code: 400,
            message: 'Invalid credentials',
          });
      }
      // Optionally, redirect or show a success message
    } catch (error) {
      console.error('Error registering user:', error);
      setError({
        hasError: true,
        code: 500,
        message: 'Internal Server Error',
      });
      };     
  };
    return (
        <div>
            <h4>Login</h4>
            <form onSubmit={handleSubmit}>
            <label>Username:&nbsp; </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
            <br></br>
            <label>Password: &nbsp;</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <br></br>
            <button type="submit" className="btn btn-success">Submit</button>
            </form>
            <div>
                <p>New user? <NavLink to={`/signup`}>Signup</NavLink></p>
            </div>
            {error.hasError && <ErrorAlert errorCode={error.code} errorMessage={error.message} />}
        </div>
    );
}

export default Login;
