import React from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import {useContext} from "react";
import UserContext from "../utils/UserContext";
const Logo=()=> <img className="w-16 m-1 items-center pl-1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5r4A5QPdNCibTUxtuqJc6HAcqb2pAjvyKg&s" alt="logo" />

const Header=()=>{
  const {loggedInUser}=useContext(UserContext)
  const onlineStatus=useOnlineStatus();
  return( 

    <div className="flex justify-between m-2 shadow-md rounded-lg" >
      <Logo/>
      <ul className="flex items-center">
        <li className="px-4">{onlineStatus==true?"online": "offline"}</li>
        <li className="px-4"><Link to="/">Home</Link></li>
        <li className="px-4"><Link to="/about">About</Link></li>
        <li className="px-4"><Link to="/contact">Contact</Link></li>
        <li className="px-4"><Link to="/grocery">Grocery</Link></li>
        <li className="px-4">more</li>
        <li className="px-4 font-bold">{loggedInUser}</li>
      </ul>
    </div>
  )
};

  export default Header;