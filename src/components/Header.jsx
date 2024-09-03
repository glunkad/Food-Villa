import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/logo.svg"
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
    // API call to check authentication
    return true;
}


// SPA - single page application

const Title = () => {
    return (
        <a href="/">
            <img
                className="h-20 px-5"
                src={Logo}
                alt="logo"/>
        </a>
    )
}

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const { user } = useContext(UserContext);

    return (
        <div className="flex justify-between bg-red-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <li key={"home"} className="px-2"><Link to="/">Home</Link></li>
                    <li key={"about"} className="px-2"><Link to="/about">About</Link></li>
                    <li key={"contact"} className="px-2"><Link to="/contact">Contact</Link></li>
                    <li key={"cart"} className="px-2"><Link to="/cart">Cart</Link></li>
                    <li key={"instamart"} className="px-2"><Link to="/instamart">Instamart</Link></li>
                </ul>
            </div>
            <span className="p-10 font-bold text-red-900">{user.name}</span>
            {
                isLoggedIn ?
                    (
                        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
                    ) :(
                        <button onClick={() => setIsLoggedIn(true)}>Login</button>
                    )
            }
        </div>
    )
}
export default Header;