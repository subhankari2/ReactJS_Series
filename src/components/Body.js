import {RestaurantList} from "../Constants";
import RestaurantCard from "./RestaurantCard";

const Body=()=>{
    return (
      <div className="restaurant-list">
        {
          RestaurantList.map((restaurant)=>{
            console.log(restaurant);
           return <RestaurantCard {...restaurant.info}  key={restaurant.info.id} />
          })
        }
      </div>
    )
  }
  export default Body;