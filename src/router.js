import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App";
import NotFound from "./app/NotFound";
import Detail from "./app/Detail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		errorElement: <NotFound />,
		children: [
			{
				path: "",
				element: <App />,
			},
			{
				path: "detail/:id",
				element: <Detail />,
			},
		],
	},
]);
