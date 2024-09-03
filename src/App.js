import "./index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Contact from "./components/Contact";
import {useState} from "react";
import UserContext from "./utils/UserContext";
/*
Header
Body
    - Search Bar
    - RestaurantList
        - RestaurantCard
            - Image
            - Name
            - Rating
            - Cuisines
 Footer
    - links
    - Copyright
*/

const AppLayout = () => {

    const [user, setUser] = useState({
        name:"Gunjan Lunkad",
        email:"gunjan.lunkad@gmail.com"
    });

    return (
        <UserContext.Provider value={{user: user}}>

            <Header />
            <Outlet />
            <Footer />

        </UserContext.Provider>
    )
}

export default AppLayout;