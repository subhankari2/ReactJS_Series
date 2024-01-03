import { useState } from "react";
import {RestaurantList} from "../Constants";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    const [searchText,setSearchText]=useState("KFC");
    const [searchClicked,setSearchClicked]=useState("false");
    return (
        <>
        <div className="search-container">
            <input className="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button onClick={()=>{if(searchClicked==="true")setSearchClicked("false");else setSearchClicked("true")}}>search{searchClicked}</button>
        </div>
        <div className="restaurant-list">
        {
            RestaurantList.map((restaurant)=>{
                console.log(restaurant);
                return <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />
            })
        }
        </div>
        </>
    )
  }
  export default Body;