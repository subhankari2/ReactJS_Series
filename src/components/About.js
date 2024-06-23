import React from 'react'
import UserClass from './UserClass';
import User from './User';

class About extends React.Component{
  constructor(){
    super();
    console.log("parent const")
  }
  componentDidMount(){
    console.log("parent componentdid mount ")
  }
  render(){
    console.log("parent render")
    return (
      <div>
        <User name={"Subhankari"} location={"Hyderabad"}/>
        <UserClass   name={"Subhankari"} location={"Hyderabad"}/>
        <UserClass  name={"abc"} location={"Hyderabad"}/>
      </div>
  
    )
  }
}

export default About