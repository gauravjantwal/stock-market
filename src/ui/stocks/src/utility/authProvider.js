import React , { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeUser } from '../actions/authActions';
import { loadUserFromStorage } from '../services/userService';

 function AuthProvider({ children }) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect( () => {
        const fetchUser = async () => {
            try {
                // Load user from storage
                const user = await loadUserFromStorage();
                if(user) {
                    // If user exists, dispatch user to redux store
                    dispatch(storeUser(user));
                }
            }catch (error) {
                console.error('Error loading user:', error);
            } finally {
                // Set loading state to false after user loading is completed
                setIsLoading(false);
            }
        };
        fetchUser();
    },[dispatch]);

    // Reder childern once user loading is completed
    return <>{ children} </>;
  };

  export default AuthProvider;