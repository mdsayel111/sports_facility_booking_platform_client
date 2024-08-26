import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import route from "../route";
import { getReactRouterRoute } from "../utils/route";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: getReactRouterRoute(route)
    },
]);

export default router