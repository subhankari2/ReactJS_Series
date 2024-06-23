import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error=useRouteError();
    console.log(error);
  return (
    <div>
    <div>Oopss!!!!!!!!!!!!!!</div>
    <h3>Something went wrong .........</h3>
    <p>{error.status}</p><p>{error.statusText}</p>
    </div>
  )
}

export default Error