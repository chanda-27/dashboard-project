import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Home from "../components/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        Component: Cart,
      },
      {
        path: "/wishlist",
        Component: Wishlist,
      },
    ],
  },
]);

export default Router;
