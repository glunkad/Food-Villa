import {IMG_CDN_URL} from "../utils/config";

const FoodItem = ({dish, title}) => {

    const {imageId,defaultPrice,description} = dish?.info;

    return (
        <div className="w-52 p-2 m-2 shadow-lg bg-red-50">
            <img src={IMG_CDN_URL+imageId} alt="food-img"/>
            <h2 className="font-bold text-xl">{title}</h2>
            <h3>{defaultPrice / 100}</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default FoodItem;