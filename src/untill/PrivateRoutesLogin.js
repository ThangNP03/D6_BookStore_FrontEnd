import { Outlet, Navigate } from "react-router-dom";
import React from 'react'

const PrivateRoutesLogin = () =>{
    const token = sessionStorage.getItem('token');

    if (token == null) {
        return <Outlet />;
    } else {
        return <Navigate to={"/err"}/>
    }
}
export default PrivateRoutesLogin;
