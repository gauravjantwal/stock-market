import { storeUserError, storeUser} from './../slices/authSlice';

const authConfig = {
    loginEndpoint: process.env.REACT_APP_LOGIN_ENDPOINT,
    logoutEndpoint: process.env.REACT_APP_LOGOUT_ENDPOINT,
    // Add any other configuration properties you need
  };

  async function loadUserFromStorage(store) {
    try {
      const userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return store.dispatch(storeUserError());
      }
      store.dispatch(storeUser(userData));
    } catch (error) {
      console.error(`Error loading user from storage: ${error}`);
      store.dispatch(storeUserError());
    }
  }
  
  async function loginUser(username, password, store) {
    try {
      const response = await fetch(authConfig.loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const userData = await response.json();
      localStorage.setItem('userData', JSON.stringify(userData));
      store.dispatch(storeUser(userData));
    } catch (error) {
      console.error(`Error logging in: ${error}`);
      store.dispatch(storeUserError());
    }
  }
  
  function logoutUser(store) {
    localStorage.removeItem('userData');
    store.dispatch(storeUserError());
  }
  
  export { loadUserFromStorage, loginUser, logoutUser };
  