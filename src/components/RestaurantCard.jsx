import {IMG_CDN_URL} from "../utils/config";


const RestaurantCard = ({name,cuisines,cloudinaryImageId, sla}) => {
    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-red-50">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt=""/>
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{sla.lastMileTravel} km</h4>
        </div>
    )
}

export default RestaurantCard;