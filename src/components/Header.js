import React from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Logo=()=> <img className="appLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5r4A5QPdNCibTUxtuqJc6HAcqb2pAjvyKg&s" alt="logo" />

const Header=()=>{

  const onlineStatus=useOnlineStatus();
  return( 

    <div className="header">
      <Logo/>
      <ul>
        <li>{onlineStatus==true?"online": "offline"}</li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/grocery">Grocery</Link></li>
        <li>more</li>
      </ul>
    </div>
  )
};

  export default Header;