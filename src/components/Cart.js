import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const cartItem=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
        dispatch(clearCart())
    }

    return (
        <div  className=" text-center m-4 p-4">
            <h1 className="font-bold">Cart</h1>
            <div className="w-6/12 m-auto">
            <button className="bg-white border p-1 border-gray-800 rounded-md" onClick={handleClearCart}>clear cart</button>
      {cartItem.length ===0 && (<h1>Cart is empty . Add some items to the cart </h1>) }
                <ItemList items={cartItem}/>
            </div>
        </div>
    )
}
export default Cart;