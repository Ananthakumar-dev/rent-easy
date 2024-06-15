import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
