import React,{useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body=()=>{
    const [searchText,setSearchText]=useState();
    const [restaurantList,setRestaurantList]=useState([]);
    const [filteredRestaurantList,setFilteredRestaurantList]=useState([]);
    const onlineStatus=useOnlineStatus();

useEffect(()=>{
    console.log("inside useEff");
    debugger;
    setRestaurantData();
},[])

const setRestaurantData=async()=>{
const restData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.445131&lng=78.447953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
debugger
const json= await restData.json();
// console.log(json)
 console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
setFilteredRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
console.log(restaurantList)
console.log(filteredRestaurantList)

}
if(onlineStatus==false)return <div className="onlineStatus">You are offline !!! Please check your internet connectivity.</div>

return restaurantList.length==0?<Shimmer/>:(

 <div className="body  ">
<div className="flex ml-6  ">
  <input   className="border-gray-500 border h-10 rounded-lg p-1 mr-2  " onChange={(event)=>setSearchText(event.target.value)} />
  <button className="p-2 text-white cursor-pointer h-10 bg-blue-600 rounded-lg" onClick={()=>{
    let filteredList;
    console.log(searchText);
    if(searchText =="" || searchText ==undefined || searchText =='undefined'|| searchText ==null){
      filteredList=restaurantList;
    }
    else{
      filteredList= restaurantList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))  
    console.log("else block",filteredList);

    }
    console.log(filteredList);
setFilteredRestaurantList(filteredList)
  }
  }>Search</button>
</div>

    <div className="flex flex-wrap m-1">
    {
      filteredRestaurantList.map((res)=><Link  key={res.info.id} to={"/menu/"+res.info.id}><RestaurantCard  restaurant={res} /></Link>)
    }
    </div>    
    
     
     
    </div> 
    )}

    export default Body;