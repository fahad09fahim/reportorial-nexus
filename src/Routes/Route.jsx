import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Class from "../Pages/Classes/Class";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
     
      {
        path: "/class",
        element: <PrivateRoute><Class /></PrivateRoute>
      
      },
      {
        path:'login',
        element:<Login/>
      },
      {
        path:'register',
        element:<Registration/>
      }
    ],
  },
]);

export default router;
