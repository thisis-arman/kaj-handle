import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePage from "../Pages/HomePage/HomePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import Dashboard from "../Layout/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/register',
                element: <RegisterPage />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    }
]);

export default router;