import {IMG_CDN_URL} from "../Constants";

const RestaurantCard=({name,cloudinaryImageId,avgRating,cuisines,locality})=>{
    console.log(name,cloudinaryImageId,avgRating,cuisines,locality)
        return(
          <div className="card">
            <img src={IMG_CDN_URL+ cloudinaryImageId} alt="restaurant" />
              <h2>{name}</h2>
              <h3>{avgRating} star</h3>
              <h4>{cuisines.join(", ")}</h4>
              <p>{locality}</p>
          </div>
        )
      }

    export default RestaurantCard;