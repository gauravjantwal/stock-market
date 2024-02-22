import axios from "axios";
import { storeUserError, storeUser, userSignedout } from './../slices/authSlice';
import config from "../config/config.json";

const authConfig = {
  loginEndpoint: config.REACT_APP_LOGIN_ENDPOINT,
  registerEndpoint: config.REACT_APP_SIGNUP_ENDPOINT,
  logOutEndpoint: config.REACT_APP_LOGOUT_ENDPOINT
  // Add any other configuration properties you need
};

async function loadUserFromStorage(store) {
  try {
    if (store) {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return store.dispatch(storeUserError());
      }
      store.dispatch(storeUser(userData));
    }
  } catch (error) {
    console.error(`Error loading user from storage: ${error}`);
    if (store) {
      store.dispatch(storeUserError());
    }

  }

}

async function loginUser(email, password, store) {
  try {

    const response = await axios({
      url: authConfig.loginEndpoint,
      method: 'POST',
      data: { email, password },
      withCredentials: true
    });

    if (!response.status === 200) {
      throw new Error('Login failed');
    }
    const userData = await response.data;
    localStorage.setItem('userData', JSON.stringify(userData));
    store.dispatch(storeUser(userData));
    return true;
  } catch (error) {
    console.error(`Error logging in: ${error}`);
    store.dispatch(storeUserError());
  }
}

async function logoutUser(store) {
  try {    
    const response = await axios({
      url: authConfig.logOutEndpoint,
      method: 'GET',
      withCredentials: true
    });
    if (response.status === 204) {
            // Remove user data from localStorage
          localStorage.removeItem('userData');
          store.dispatch(userSignedout(null));
          return true;
    }else{
      // Dispatch action to update Redux store    
      store.dispatch(storeUserError());
    }

    return false;
    
  } catch (error) {
    console.error(`Error logging out: ${error}`);
    // Optionally handle error
    return false;
  }
}

async function registerUser(name, email, password, store) {
  debugger
  try {

    const response = await axios({
      url: authConfig.registerEndpoint,
      method: 'POST',
      data: { name, email, password },
      withCredentials: true
    });

    if (!response.status === 200) {
      throw new Error('Login failed');
    } else {
      return true;
    }

  } catch (error) {
    console.error(`Error logging in: ${error}`);
  }
}


export { loadUserFromStorage, loginUser, logoutUser, registerUser };
