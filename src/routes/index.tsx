import React from "react";
import PrivateRoute from "./PrivateRoute";
import { Home, Error, Dashboard, Login } from "../pages";

const protectedRoutes = [
	{
		path: "/dashboard",
		component: <Dashboard name="Akshat Mittal" />,
	},
];

const nonProtectedRoutes = [
	{
		path: "/",
		component: <Home />,
	},
	{
		path: "/login",
		component: <Login />,
	},
	{
		path: "*",
		component: (
			<Error
				title="Oops! 404"
				description="Sorry we couldn't find this page"
				button={{
					label: "Let's get you home",
					action: () => {
						alert("Get me home");
					},
				}}
			/>
		),
	},
];

const routes = protectedRoutes
	.map((route) => ({
		...route,
		component: <PrivateRoute>{route.component}</PrivateRoute>,
	}))
	.concat(nonProtectedRoutes);

export default routes;
