import { createSlice } from '@reduxjs/toolkit'

// initial state of authentication object
const initialState = {
    user: null,
    isLoadingUser: false
  };

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        storeUser :(state, action) => {
            state.isLoadingUser = true;
            state.user = action.payload;
        },
        storeUserError : (state,action) => {
            state.isLoadingUser = false;
            state.user = null;
        },
        userSignedout : (state,action) => {
            state.isLoadingUser = false;
            state.user = null;
        },
        userExpired : (state,action) => {
            state.isLoadingUser = false;
            state.user = null;
        },
        loadingUser : (state,action) => {
            state.isLoadingUser = true;
            state.user = null;
        }
    }
})

export const { storeUser, storeUserError, userSignedout, userExpired, loadingUser } = authSlice.actions
export default authSlice.reducer