import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultComponent from "./DefaultComponent";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import SmartAppliancesPage from "./SmartAppliancesPage";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));

const routers = createBrowserRouter([
  {
    path: "*",
    element: <DefaultComponent {...{ Component: HomePage }} />,
  },
  {
    path: "/services",
    element: <DefaultComponent {...{ Component: ServicesPage }} />,
  },
  {
    path: "/smartAppliances",
    element: <DefaultComponent {...{ Component: SmartAppliancesPage }} />,
  },
]);

root.render(<RouterProvider router={routers} />);

// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
