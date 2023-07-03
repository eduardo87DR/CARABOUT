import { createBrowserRouter } from "react-router-dom";
import Acercade from "../acercade";
import App from "../App";
import Navbar from "../components/navbar";

export const routes = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            children: [
                {
                    path: "/",
                    element: <App />
                },
                {
                    path: "/acercade",
                    element: <Acercade />
                }
            ]
        },
])