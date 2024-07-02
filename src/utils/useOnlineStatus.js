import React,{ useState,useEffect } from "react";

const useOnlineStatus=()=>{
const [onlineStatus,setOnlineStatus]=useState(true)

useEffect(()=>{
    console.log("useOnlineStatus")
window.addEventListener("online",()=>{
    console.log("online");
    setOnlineStatus(true);
})
window.addEventListener("offline",()=>{
    console.log("false");
setOnlineStatus(false);
})

},[])


return onlineStatus;

}
export default useOnlineStatus;