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
import ScrollToTop from "../components/ScrollTop";

const withScrollTop = (Component) => (
  <>
    <ScrollToTop />
    <Component />
  </>
);

const Router = createBrowserRouter([
  {
    path: "/",
    element: withScrollTop(App),
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: withScrollTop(About),
    errorElement: <ErrorPage />,
  },
  {
    path: "/contacts",
    element: withScrollTop(Contact),
    errorElement: <ErrorPage />,
  },
  {
    path: "/research",
    element: withScrollTop(Research),
    errorElement: <ErrorPage />,
  },
  {
    path: "/analysis",
    element: withScrollTop(Analysis),
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-policy",
    element: withScrollTop(Ppolicy),
    errorElement: <ErrorPage />,
  },
  {
    path: "/terms-conditions",
    element: withScrollTop(TC),
    errorElement: <ErrorPage />,
  },
]);

export default Router;
