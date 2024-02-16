import React from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from '../pages/login';

function ProtectedRoute({ element: Element, ...rest }) {
    const user = useSelector(state => state.authInformation.user);

    return user ? <Route {...rest} element={<Element />} /> : <Login/>;
}

export default ProtectedRoute;
