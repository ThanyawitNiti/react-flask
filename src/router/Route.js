import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Regis from "../pages/Regis"
import Login from "../pages/Login"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        // <Home />
        <Login />
    ),
  },
  {
    path: "/regis",
    element: (
        <Regis />
    ),
  },
  {
    path: "/home",
    element: (
        // <Login />
        <Home />
    ),
  },
 
]);

export default function Route() {
  return <RouterProvider router={router} />;
}