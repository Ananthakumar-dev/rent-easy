import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import UserLayout from "../layout/UserLayout";
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/signin/Signin";
import Profile from "../pages/profile/Profile";
import Lendings from "../pages/lendings/Lendings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "search",
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
      {
        path: "users",
        element: <UserLayout />,
        children: [
          {
            path: "/users",
            element: <Profile />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "lendings",
            element: <Lendings />,
          },
        ],
      },
    ],
  },
]);

export default router;
