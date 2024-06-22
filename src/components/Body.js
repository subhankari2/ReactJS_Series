import React,{useState} from "react";
import RestaurantCard from "./RestaurantCard";
import {RESTAURANTS} from "../utils/MockData"
const Body=()=>{
    const [searchText,setSearchText]=useState();
const [restaurantList,setRestaurantList]=useState(RESTAURANTS);
// const searchText="KFC"
    return(
    
    <div className="body">
      
<div className="search">
  <input   className="searchInput" onChange={(event)=>setSearchText(event.target.value)} />
  <button onClick={()=>{
    let filteredList
    console.log(searchText);
    if(searchText =="" || searchText ==undefined || searchText =='undefined'|| searchText ==null){
      filteredList=RESTAURANTS;
    }
    else{
      filteredList= RESTAURANTS.filter((res)=>res.info.name==searchText)  
    console.log("else block",filteredList);

    }
    console.log(filteredList);
setRestaurantList(filteredList)
  }
  }>Search</button>
</div>

    <div className="restaurantContainer">
    {
      restaurantList.map((res)=><RestaurantCard restaurant={res} />)
    }
    </div>    
    
     
     
    </div>
    )}

    export default Body;