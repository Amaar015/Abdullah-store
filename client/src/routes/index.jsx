import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Conatact from "../pages/Conatact";
import Blog from "../pages/Blog";
import Blogdetails from "../sections/Blog/Blogdetails";
import Products from "../pages/Products";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <GeneralLayout />,
      children: [
        { element: <Navigate to={"home"} replace />, index: true },
        { path: "home", element: <Home /> },
        { path: "contact", element: <Conatact /> },
        { path: "blogs", element: <Blog /> },
        { path: "blogs/:id", element: <Blogdetails /> },
        { path: "products", element: <Products /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);
}

const GeneralLayout = Loadable(
  lazy(() => import("../layouts/general/generalLayout"))
);
