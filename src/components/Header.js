import React from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Logo=()=> <img className="w-16 m-1 items-center pl-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5r4A5QPdNCibTUxtuqJc6HAcqb2pAjvyKg&s" alt="logo" />

const Header=()=>{
  const {loggedInUser}=useContext(UserContext)
  const onlineStatus=useOnlineStatus();
  //subscribing to the store using selector 
  const cartItem = useSelector((store)=>store.cart.items);
  console.log("cartItem",cartItem);
  return( 

    <div className="flex justify-between m-2 shadow-md rounded-lg" >
      <Logo/>
      <ul className="flex items-center">
        <li className="px-4">{onlineStatus==true?"online": "offline"}</li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About</Link></li>
        <li className="px-4"><Link to="/contact">Contact</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4 font-bold"><Link to="/cart">cart ({ cartItem.length} items)</Link></li>
        <li className="px-4 ">login {loggedInUser}</li>
      </ul>
    </div>
  )
};

  export default Header;