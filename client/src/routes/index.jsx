import { lazy, Suspense } from "react";
import Loading from "../components/Loading";
import { Navigate, useRoutes } from "react-router-dom";
import Home from "../pages/Home";
import Conatact from "../pages/Conatact";
import Products from "../pages/Products";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Collection from "../pages/Collection";
import Collectiondetails from "../sections/Blog/Collectiondetails";
import Error from "../pages/Error";
import CardDetails from "../features/CardDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import CompleteOrder from "../features/Checkout/CompleteOrder";
import Profile from "../pages/Profile";

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
        { path: "collections", element: <Collection /> },
        { path: "collection/:id", element: <Collectiondetails /> },
        { path: "products", element: <Products /> },
        { path: "card-detail/:id", element: <CardDetails /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "cart", element: <Checkout /> },
        { path: "complete-order", element: <CompleteOrder /> },
        // Auth Routes
        { path: "auth/profile", element: <Profile /> },
        { path: "*", element: <Error /> },
      ],
    },
    // {
    //   path: "/auth/",
    //   element: <GeneralLayout />,
    //   children:[

    //   ]
    // },
  ]);
}

const GeneralLayout = Loadable(
  lazy(() => import("../layouts/general/generalLayout"))
);
