import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./pages/App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { UserProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
