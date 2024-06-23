import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useResMenuDetails from '../utils/useResMenuDetails'; 
const RestaurantMenu = () => {
    const {id} = useParams();
    const resMenuDetails=useResMenuDetails(id);
    // const [resMenuDetails,setResMenuDetails]=useState();


 if(resMenuDetails == undefined || resMenuDetails===null )return<Shimmer/>
const {name,avgRating,costForTwoMessage,cuisines,areaName,sla}=resMenuDetails?.cards[2]?.card?.card?.info;
const {itemCards}=resMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log("Items",itemCards)
  return (
    <div className="res-menu">
<h3>{name}</h3>
 <h6>{avgRating} , {costForTwoMessage}</h6>
<h5>{cuisines}</h5>
 <h5>Outlet {areaName}</h5>
 <p>{sla.minDeliveryTime}-{sla.maxDeliveryTime}mins</p>  


{
    itemCards.map((res) => {
        const name = res?.card?.info?.name || "No name available";
        return (
            <p key={res?.card?.info?.id}>{name}</p>
        );
    })
}

    </div>
  )
}

export default RestaurantMenu