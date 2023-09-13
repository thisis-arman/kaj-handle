import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import HomePage from "../Pages/HomePage/HomePage";
import RegisterPage from "../Pages/RegisterPage/RegisterPage";

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
]);

export default router;