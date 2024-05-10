import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultComponent from "./DefaultComponent";
import HomePage from "./HomePage";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

const routers = createBrowserRouter([
	{
		path: "*",
		element: <DefaultComponent {...{ Component: HomePage }} />,
	},
	// {
	// 	path: "/order-check",
	// 	element: <DefaultComponent {...{ Component: CheckOrder }} />,
	// },
]);

root.render(<RouterProvider router={routers}/>);

// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
