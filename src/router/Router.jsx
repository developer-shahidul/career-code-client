//

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import Resister from "../pages/Resister/Resister";
import SignIn from "../pages/SignIn/SignIn";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/resister",
        Component: Resister,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ],
  },
]);

export default Router;
