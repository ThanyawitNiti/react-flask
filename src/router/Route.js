import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Regis from "../pages/Regis"
import Login from "../pages/Login"
const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/regis",
    element: (
        <Regis />
    ),
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
  },
 
]);

export default function Route() {
  return <RouterProvider router={router} />;
}