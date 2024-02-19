import { storeUserError, storeUser} from './../slices/authSlice';

const authConfig = {
    loginEndpoint: process.env.REACT_APP_LOGIN_ENDPOINT,
    registerEndpoint: process.env.REACT_APP_SIGNUP_ENDPOINT,
    // Add any other configuration properties you need
  };

  async function loadUserFromStorage(store) {
    try {
      if(store){
        const userData = JSON.parse(localStorage.getItem('userData'));
      if (!userData) {
        return store.dispatch(storeUserError());
      }
      store.dispatch(storeUser(userData));
      }
    } catch (error) {
      console.error(`Error loading user from storage: ${error}`);
      if(store){
        store.dispatch(storeUserError());
      }
      
    }
    
  }
  
  async function loginUser(email, password, store) {
    try {
      const response = await fetch(authConfig.loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const userData = await response.json();
      localStorage.setItem('userData', JSON.stringify(userData));
      store.dispatch(storeUser(userData));
      return true;
    } catch (error) {
      console.error(`Error logging in: ${error}`);
      store.dispatch(storeUserError());
    }
  }

  function logoutUser(store) {
    try {
      // Remove user data from localStorage
      localStorage.removeItem('userData');
  
      // Dispatch action to update Redux store
      store.dispatch(storeUserError());
    } catch (error) {
      console.error(`Error logging out: ${error}`);
      // Optionally handle error
    }
  }

  async function registerUser(name, email, password, store) {
    debugger
    try {
      const response = await fetch(authConfig.registerEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }else{
        return true;
      }
       
    } catch (error) {
      console.error(`Error logging in: ${error}`);
    }
  }
   
  
  export { loadUserFromStorage, loginUser, logoutUser, registerUser };
  