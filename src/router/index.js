import React from "react";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";
import {Navigate} from "react-router-dom";

export const privateRoutes = [
    // {path: '*', element: <NotFound/>},
    // {path: '/', element: <Navigate to="/posts" replace />},
    {path: '*', element: <Navigate to="/posts" replace />},
    {path: '/about', element: <About/>},
    {path: '/posts', element: <Posts/>},
    {path: '/posts/:id', element: <PostIdPage/>}
]

export const publicRoutes = [
    {path: '*', element: <Navigate to="/login" replace />},
    {path: '/login', element: <Login/>},
]