import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/App";
import Login from "./pages/login";
import Register from "./pages/register";
import ForgotPassword from "./pages/ForgotPassword";
import Products from "./pages/products";
import Profile from "./pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: "",
  },
  {
    path: "/products",
    element: <Products />,
    // errorElement: "",
  },
  {
    path: "/login",
    element: <Login />,
    // errorElement: "",
  },
  {
    path: "/register",
    element: <Register />,
    // errorElement: "",
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    // errorElement: "",
  },
  {
    path: "/profile",
    element: <Profile />,
    // errorElement: "",
  },
  // {
  //   path: "/checkout",
  //   element: <Checkout />,
  //   // errorElement: "",
  // },
  // {
  //   path: "/history",
  //   element: <History />,
  //   // errorElement: "",
  // },
  // {
  //   path: "/detailorder",
  //   element: <DetailOrder />,
  //   // errorElement: "",
  // },
  // {
  //   path: "/detailproduct",
  //   element: <DetailProduct />,
  //   // errorElement: "",
  // },
]);

export default router;
