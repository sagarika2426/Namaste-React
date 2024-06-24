import { clearCart } from "../utils/cartSlice.js";

import { useDispatch, useSelector } from "react-redux";
import MenuItemLists from "./MenuItemLists";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () =>{
        //Dispatch action 
        dispatch(clearCart());

    }


    return(
        <div>
            <h1 className="lg:text-4xl  text-xl font-bold text-center mt-4">Cart 🛒</h1>
            <div className="flex justify-between mx-4">
                <div></div>
                <button 
                    className="px-4 py-2 bg-black text-white rounded-lg text-center"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>

            {cartItems.length === 0 && <h1 className="text-center font-semibold lg:text-xl mt-6">Cart is Empty! Add Your Favourite Food to the Cart!🍔</h1>}

            <div className="lg:w-6/12 m-auto p-2">
                <MenuItemLists items={cartItems} showRemoveButton={true} />
            </div>
        </div>
    )
}

export default Cart;