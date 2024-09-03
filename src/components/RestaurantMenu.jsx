import {useParams,} from "react-router-dom"
import Shimmer from "./Shimmer";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import {IMG_CDN_URL} from "../utils/config";
import {addItem} from "../utils/cartSlice";
import {useDispatch} from "react-redux";

const RestaurantMenu = () => {

    const {resId}  = useParams();
    console.log(resId);

    const [restaurant,menu] = useRestaurantInfo(resId);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    };

    return (!restaurant) ? <Shimmer /> : (
        <div className="flex">
            <div>
                <h1>Restaurant id : {resId} </h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt="img"/>
                <h3>Area: {restaurant?.areaName}</h3>
                <h3>City: {restaurant?.city}</h3>
                <h3>Rating: {restaurant?.avgRating} stars</h3>
                <h3>Cost for 2: {restaurant?.costForTwoMessage}</h3>
            </div>
            <div className="p-5">
                <h2>Top picks</h2>
                <ul>
                    {menu?.map((item, index) => (
                        <li key={index}>
                            {item.title} - <button className="p-1 bg-green-50" onClick={() => addFoodItem(item)}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default RestaurantMenu;