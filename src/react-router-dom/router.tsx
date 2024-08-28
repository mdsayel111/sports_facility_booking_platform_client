import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import route from "../route";
import { getReactRouterRoute } from "../utils";
import Error from "../pages/error/Error";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <Error />,
        element: <App />,
        children: getReactRouterRoute(route)
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
]);

export default router