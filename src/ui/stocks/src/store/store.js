import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slices/authSlice';


const store = configureStore({
    reducer: {
        authInformation : authReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({ serializebleCheck : false})
})

export default store