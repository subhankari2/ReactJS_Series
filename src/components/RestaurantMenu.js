import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import Shimmer from './Shimmer';
import useResMenuDetails from '../utils/useResMenuDetails'; 
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {
    const [showIndex,setShowIndex]=useState(null);
    const {id} = useParams();
    
    const resMenuDetails=useResMenuDetails(id);
    // const [resMenuDetails,setResMenuDetails]=useState();


 if(resMenuDetails == undefined || resMenuDetails===null )return<Shimmer/>
const {name,avgRating,costForTwoMessage,cuisines,areaName,sla}=resMenuDetails?.cards[2]?.card?.card?.info;
const {itemCards}=resMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
const categories=resMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c.card.card["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
})
// console.log("categories",resMenuDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  return (
    <div className=" text-center  shadow-md mx-5 rounded-md my-5 min-h-80 py-5">
<div className='font-bold  text-2xl my-3'>{name}</div>
<div className='text-lg '>
    {cuisines.join(',')}
</div>
{categories.map((category,index)=>{
    // console.log("category",category)
return <RestaurantCategory key={category?.card?.card?.title}   data={category?.card?.card} showItems={index===showIndex? true : false} setShowIndex={()=>setShowIndex(index)} />
})
}
    </div>
  )
}

export default RestaurantMenu