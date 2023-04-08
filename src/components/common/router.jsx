import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginComponent from '../login/login';
import AuthenticationComponent from './auth';
import DashboardComponent from './dashboard';

export const routeNames = {
    BASE: "/",
    HOME: "/home",
    LOGIN: "/login",
    SIGNUP: "/signup",
    DASHBOARD: "/dashboard",
}

const RouterComponent = (props) => {
    return (
        <Routes>
            <Route path={routeNames.LOGIN} element={<LoginComponent />} />
            <Route path={""} element={<AuthenticationComponent />} >
                <Route element={<AuthenticationComponent />} />
                <Route path={routeNames.DASHBOARD} element={<DashboardComponent />} />
            </Route>
        </Routes>
    )
}

export default RouterComponent;