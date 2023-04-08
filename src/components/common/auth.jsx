import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { routeNames } from './router';

const AuthenticationComponent = (props) => {
    const location = useLocation();
    const isLoggedIn = localStorage.getItem('token') && localStorage.getItem("refreshToken");
    return (
        isLoggedIn ? (location.pathname === routeNames?.BASE ? <Navigate to={routeNames.DASHBOARD} /> : <Outlet />) : <Navigate to={routeNames.LOGIN} />
    )
}

export default AuthenticationComponent;