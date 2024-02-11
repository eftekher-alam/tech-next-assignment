import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children: [
            {
                path: "/",
                element: <div>This is child</div>
            }
        ]
    }
])