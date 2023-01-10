import React from 'react';
import {Navigate, Route, Routes} from "react-router";
import Home from "../pages/Home";
import Login from "../pages/Login";
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth);
    return (
        <Routes>
        {isAuth ? (
            <>
                <Route path="/" element={<Home />} />
                <Route path='*' element={<Navigate to="/" replace />} />
            </>
        ) : (
            <>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path='*' element={<Navigate to="/login" replace />} />
            </>
        )}
        </Routes>
    );
};

export default AppRouter;
