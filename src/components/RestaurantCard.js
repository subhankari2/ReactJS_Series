import React from "react";
import {IMAGE_URL} from "../utils/MockData"
const RestaurantCard=(props)=>{
    // const name =props.resname;
    // const cuisines =props.cuisines;
    console.log(typeof(props),"restaurant");
    const name=props.restaurant.info.name;
    const cuisines=props.restaurant.info.cuisines;
    const Img_id=props.restaurant.info.cloudinaryImageId;
  return  <div className="restaurantCard">
            <img src={IMAGE_URL+Img_id} className="res-img"/>
            <h3>{name}</h3>
            <h5 >{cuisines.join(",")}</h5>
            <h6>avgRating</h6>
            </div>
  }
  export default RestaurantCard;