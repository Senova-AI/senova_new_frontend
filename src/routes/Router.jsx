import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../components/ErrorPage";
import App from "../App";
import Contact from "../pages/Contact";
import Research from "../pages/Research";
import Analysis from "../pages/Analysis";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/research",
    element: <Research />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/analysis",
    element: <Analysis />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
