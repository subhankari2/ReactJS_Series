import {useEffect,useState} from "react";
import { MENU_URL } from "./Constants";
const useResMenuDetails=(id)=>{
    const [menuDetails,setResMenuDetails]=useState();
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const response=await fetch(MENU_URL+id);
        const res=await response.json();
        setResMenuDetails(res?.data);//.cards[2]?.card?.card?.info
        
    }
   return menuDetails;
}
export default useResMenuDetails;