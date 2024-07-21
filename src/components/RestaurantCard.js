import React from "react";
import {IMAGE_URL} from "../utils/MockData"
const RestaurantCard=(props)=>{

    const name=props.restaurant.info.name;
    const cuisines=props.restaurant.info.cuisines;
    const Img_id=props.restaurant.info.cloudinaryImageId;
  return  <div className=" w-[205px] shadow-lg rounded-lg h-[300px] mx-1 my-3 hover:bg-gray-100 px-2 cursor-pointer  ">
            <img src={IMAGE_URL+Img_id} className="w-40 mx-2 rounded-3xl h-40 max-w-full"/>
            <h3 className="font-bold mx-1">{name}</h3>
            <p className=" break-words  mx-1 line-clamp-2 overflow-hidden text-ellipsis py-1   ">{cuisines.join(",")}</p>
            <h6 className="mx-1">avgRating</h6>
            </div>
  }


export const withLabelRestaurant=(RestaurantCard)=>{
  return (res)=>{
    return(
      <div >
        <label className=" absolute p-1 bg-red-500 text-gray-200 rounded-md  mt-1">Open Now</label>
          <RestaurantCard  {...res}/>
      </div>
    )
  }
} 

  export default RestaurantCard;