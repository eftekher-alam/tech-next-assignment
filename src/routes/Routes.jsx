import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Users from './../pages/users/Users';
import UserDetails from "../pages/user_details/UserDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <Users></Users>
            },
            {
                path: "/user-details/:id",
                element: <UserDetails></UserDetails>
            }

        ]
    }
])