import {useDispatch, useSelector} from "react-redux";
import FoodItem from "./FoodItem";
import {clearCart} from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        console.log("clear cart")
        dispatch(clearCart());
    }

    return (
        <div>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
            <button className="bg-green-600 p-2 m-5" onClick={() => handleClearCart()}>Clear cart</button>
            <div className="flex">
                {
                    cartItems.map((item) => <FoodItem key={item?.dish?.info?.id} {...item}/>)
                }
            </div>
        </div>
    )
}

export default Cart;