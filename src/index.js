import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultComponent from "./DefaultComponent";
import HomePage from "./HomePage";
import Services from "./Services";
import SmartAppliances from "./SmartAppliances";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routers = createBrowserRouter([
  {
    path: "*",
    element: <DefaultComponent {...{ Component: HomePage }} />,
  },
  {
    path: "/services",
    element: <DefaultComponent {...{ Component: Services }} />,
  },
  {
    path: "/smartappliances",
    element: <DefaultComponent {...{ Component: SmartAppliances }} />,
  },
]);

root.render(
  <ParallaxProvider>
    <RouterProvider router={routers} />
  </ParallaxProvider>,
);

// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
