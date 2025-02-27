import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Regis from "../pages/Regis"
import Login from "../pages/Login"
import UserDetail from "../pages/UserDetail";
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
  {
    path: "/userdetail",
    element: (
        <UserDetail />
    ),
  },
 
]);

export default function Route() {
  return <RouterProvider router={router} />;
}