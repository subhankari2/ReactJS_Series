import { IMAGE_URL } from "../utils/MockData";

const ItemList=({items})=>{
    return (
        <div>
             {items.map((item)=>{
                return(
                    <div key={item?.card?.info?.id} className=" flex justify-between  border-b-2 my-3">
                        <div className="text-left w-9/12 my-1">
                            <h1 className="font-semibold">{item?.card?.info?.name}</h1>
                            <div className="my-1"> ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</div>
                            <div className="text-xs">{item?.card?.info?.description}</div>

                        </div> 
                        <div className="my-1  text-right  w-3/12 ">
                        <div className="absolute mx-12">
                            <button className="bg-white p-1 rounded-md border ">Add +</button>
                            </div>
                            <img  className="w-36 h-20 rounded-md" src={IMAGE_URL+item?.card?.info?.imageId} />
                           
                        </div>
                    </div>
                )
            })
            } 
        </div>
    )
}
export default ItemList;