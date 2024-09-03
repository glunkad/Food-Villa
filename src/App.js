import "./index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet} from "react-router-dom"
import {useState} from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux"
import store from "./utils/store"
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
        <Provider store={store}>
            <UserContext.Provider value={{user: user}}>

                <Header />
                <Outlet />
                <Footer />

            </UserContext.Provider>
        </Provider>

    )
}

export default AppLayout;