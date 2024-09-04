import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {

    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const isOnline = useOnline();

    if(!isOnline){
        return <p>Offline !, please check your internet connection</p>
    }

    // not render component early
    if(!allRestaurants) return null;

    // if(!filteredRestaurants?.length === false){
    //     return <h1>No Restaurant match your filter!!!</h1>;
    // }

    return (allRestaurants.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container p-5 bg-red-50 my-5">
                <input
                    type="text"
                    className="focus:bg-green-400 m-2 p-2"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                    className="search-btn p-2 m-2 bg-purple-500 hover:bg-amber-400 text-white rounded-md"
                    onClick={() => {
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="flex flex-wrap">
            {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
                        </Link>
                    ))
            }
            </div>
        </>
    );
};

export default Body;
