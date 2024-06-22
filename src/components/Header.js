import React from "react";

const Logo=()=> <img className="appLogo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5r4A5QPdNCibTUxtuqJc6HAcqb2pAjvyKg&s" alt="logo" />
    

const Header=()=>( 
    <div className="header">
      <Logo/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        <li>more</li>
      </ul>
    </div>
  );

  export default Header;