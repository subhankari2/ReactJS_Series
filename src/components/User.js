import React,{useState,useEffect} from 'react'


const User = (props) => {
    const [count]=useState(0);
    const [count2]=useState(0);
useEffect(()=>{
    //api call
},[])
  return (
    <div>
        <h3>{props.name}</h3>
        <h3>{props.location}</h3>
        <h6>{count}</h6>
        <h6>{count2}</h6>
    </div>
  )
}

export default User