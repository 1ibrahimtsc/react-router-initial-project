import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Errorpage from "../pages/Error/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/dhaka",
        element: <div>Dhaka, Bangladesh !</div>,
      },
    ],
  },
]);

export default router;
