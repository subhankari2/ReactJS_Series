import React from 'react'
import UserClass from './UserClass';
import User from './User';
import UserContext from '../utils/UserContext';
class About extends React.Component{

  constructor(){
    super();
    // console.log("parent const")
  }
  componentDidMount(){
    // console.log("parent componentdid mount ")
  }
  render(){
    // console.log("parent render")
    return (
      <div>
        <div>
        <UserContext.Consumer>
          {({loggedInUser})=><h1>User - {loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"Subhankari"} location={"Hyderabad"}/>
       
        <UserClass   name={"Subhankari"} location={"Hyderabad"}/>
        <UserClass  name={"abc"} location={"Hyderabad"}/>
      </div>
  
    )
  }
}

export default About