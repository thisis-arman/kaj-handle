import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePage from "../Pages/HomePage/HomePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";
import Dashboard from "../Layout/Dashboard/Dashboard";
import Tasks from "../Layout/Dashboard/UserDashboardPages/Tasks/Tasks";
import Profile from "../Layout/Dashboard/UserDashboardPages/Profile/Profile";

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
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard/task',
                element: <Tasks />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    }
]);

export default router;