import {createRoot} from "react-dom/client";
import AppLayout from "./App";
import About from "./components/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import {lazy,Suspense} from "react";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"))

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    }
                ]
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/instamart",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                )
            },
            {
                path: "/cart",
                element: <Cart />
            },
        ]
    },

])

createRoot(document.getElementById('root') || document.body).render(
    <RouterProvider router={appRouter} />
);