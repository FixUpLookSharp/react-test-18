import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import Games from "../pages/games/Games";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={ <HomePage /> } exact />
            <Route path='/games' element={ <Games /> } exact />
            <Route path='*' element={ <NotFound /> } exact />
        </Routes>
    );
};

export default AppRouter;