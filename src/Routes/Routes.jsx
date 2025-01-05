import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/menu',
                element: <Menu />
            },
            {
                path: 'order/:category',
                element: <Order />
            },
            {
                path: '/login',
                element: <LogIn />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/secret',
                element: <PrivateRoute>
                    <Secret />
                </PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute>
            <Dashboard />
        </PrivateRoute>,
        children: [
            {
                path: 'cart',
                element: <Cart />,
            },

            // admin routes
            {
                path: 'users',
                element: <AllUsers/>
            }
        ]
    }
])