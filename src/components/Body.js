import React,{useContext, useEffect, useState} from "react";
import RestaurantCard,{withLabelRestaurant} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{

  const {loggedInUser,setUserName}=useContext(UserContext);
    const [searchText,setSearchText]=useState();
    const [restaurantList,setRestaurantList]=useState([]);
    const [filteredRestaurantList,setFilteredRestaurantList]=useState([]);
    const onlineStatus=useOnlineStatus();
const OpenedRestaurant=withLabelRestaurant(RestaurantCard);
useEffect(()=>{
    
    
    setRestaurantData();
},[])

const setRestaurantData=async()=>{
const restData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.445131&lng=78.447953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

const json= await restData.json();


setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);


}
if(onlineStatus==false)return <div className="onlineStatus">You are offline !!! Please check your internet connectivity.</div>

return restaurantList.length==0?<Shimmer/>:(

 <div className="body  ">
  <div className="flex">
<div className=" ml-6 w-3/12 ">
  <input   className="border-gray-500 border h-10 rounded-lg p-1 mr-2  " onChange={(event)=>setSearchText(event.target.value)} />
  <button className="p-2 text-white cursor-pointer h-10 bg-blue-600 rounded-lg" onClick={()=>{
    let filteredList;

    if(searchText =="" || searchText ==undefined || searchText =='undefined'|| searchText ==null){
      filteredList=restaurantList;
    }
    else{
      filteredList= restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))  
    

    }

setFilteredRestaurantList(filteredList)
  }
  }>Search</button>
  </div>
  <div className="ml-1">UserName: <input className="border-black p-2 ml-1"  value={loggedInUser} onChange={(e)=>setUserName(e.target.value)} />
</div>
</div>
    <div className="flex flex-wrap m-1">
    {
      filteredRestaurantList.map((res)=><Link  key={res.info.id} to={"/menu/"+res.info.id}>
        { res.info.isOpen ?<OpenedRestaurant restaurant={res} /> :<RestaurantCard  restaurant={res} />}  
        </Link>)
    }
    </div>    
    
     
     
    </div> 
    )}

    export default Body;