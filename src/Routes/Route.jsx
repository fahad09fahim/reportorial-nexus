import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Class from "../Pages/Classes/Class";


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
        element: <Class />
      
      },
    ],
  },
]);

export default router;
