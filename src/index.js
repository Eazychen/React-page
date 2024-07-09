import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultComponent from "./DefaultComponent";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import SmartAppliancesPage from "./SmartAppliancesPage";
import "./index.css";
import ContactPage from "./ContactPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routers = createBrowserRouter([
  {
    path: "/homepage",
    element: <DefaultComponent {...{ Component: HomePage }} />,
  },
  {
    path: "/services",
    element: <DefaultComponent {...{ Component: ServicesPage }} />,
  },
  {
    path: "/smart-home",
    element: <DefaultComponent {...{ Component: SmartAppliancesPage }} />,
  },
  {
    path: "/contact",
    element: <DefaultComponent {...{ Component: ContactPage }} />,
  },
  {
    path: "*",
    element: <DefaultComponent {...{ Component: HomePage }} />,
  },
]);

root.render(<RouterProvider router={routers} />);


