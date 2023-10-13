import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Routes/Route";
// import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <AuthProvider>
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  // </AuthProvider>
);
