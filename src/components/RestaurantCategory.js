import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

    const handleClick=()=>{
        // setShowItems(!showItems);
        setShowIndex();
    }
return (
    <div className="w-6/12 mx-auto shadow-md my-5 p-3 rounded-md">
        <div className="flex  justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold">{data.title}</span>
            <span>⬇️</span>
            </div>               
             {showItems && <ItemList  items={data.itemCards}/>      }      
    </div>
)
}
export default RestaurantCategory;