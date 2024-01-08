import { useState } from "react";
import {RestaurantList} from "../Constants";
import RestaurantCard from "./RestaurantCard";



function filterData(searchText,restaurants){
return restaurants.filter((restaurant)=>restaurant.info.name.includes(searchText))

}

const Body=()=>{
    const [searchText,setSearchText]=useState();
    const [restaurants,setRestaurants]=useState(RestaurantList);
    return (
        <>
        <div className="search-container">
            <input className="search" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
            <button 
            onClick={()=>{
                const data=filterData(searchText,RestaurantList);
                setRestaurants(data);
            }
            }
            >search</button>
        </div>
        <div className="restaurant-list">
        {
            restaurants.map((restaurant)=>{
                console.log(restaurant);
                return <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />
            })
        }
        </div>
        </>
    )
  }
  export default Body;