import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import ErrorPage from "../components/ErrorPage";
import App from "../App";
import Contact from "../pages/Contact";
import Research from "../pages/Research";
import Analysis from "../pages/Analysis";
import TC from "../pages/TC";
import Ppolicy from "../pages/Ppolicy.jsx";

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
  {
    path: "/privacy-policy",
    element: <Ppolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/terms-conditions",
    element: <TC />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
