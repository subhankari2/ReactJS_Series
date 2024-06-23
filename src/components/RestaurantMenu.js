import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { MENU_URL } from '../utils/Constants';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {
    const {id} = useParams();
    const [resMenuDetails,setResMenuDetails]=useState();
    const [menuItems,setMenuItems]=useState();

useEffect(()=>{
    fetchData();
},[])
 const fetchData=async ()=>{
    const response=await fetch(MENU_URL+id);
    const res=await response.json();
    setResMenuDetails(res?.data?.cards[2]?.card?.card?.info);
    setMenuItems(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards)
 }

 if(resMenuDetails == undefined || resMenuDetails===null || menuItems == undefined)return<Shimmer/>

  return (
    <div className="res-menu">
<h3>{resMenuDetails.name}</h3>
<h6>{resMenuDetails.avgRating} , {resMenuDetails.costForTwoMessage}</h6>
<h5>{resMenuDetails.cuisines}</h5>
 <h5>Outlet {resMenuDetails.areaName}</h5>
 <p>{resMenuDetails.sla.minDeliveryTime}-{resMenuDetails.sla.maxDeliveryTime}mins</p> 


{
    menuItems.map((res) => {
        const name = res?.card?.info?.name || "No name available";
        return (
            <p>{name}</p>
        );
    })
}

    </div>
  )
}

export default RestaurantMenu