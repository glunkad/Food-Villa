import {useEffect, useState} from "react";
import {MENU_API} from "./config";

const useRestaurantInfo = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null)

    useEffect(() => {
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo() {
        const data = await fetch(MENU_API+resId)
        const json = await data.json();
        const restaurantInfoCard = json.data.cards.find(card => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")
        setRestaurant(restaurantInfoCard?.card?.card?.info)

        const groupedCard = json.data.cards.find(card => card.groupedCard);
        const menuCard = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(card => card.card.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel")
        setMenu(menuCard?.card?.card?.carousel)
    }

    return [restaurant,menu];
}

export default useRestaurantInfo;