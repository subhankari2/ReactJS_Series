 import React from "react"
 class UserClass extends React.Component{

constructor(props){
    // console.log("child constructor")
    super(props)

    this.state={
        count:0,
        count2:0
    }
}

componentDidMount()
{

    // console.log(this.props.name+"child componentDidMount")
}

render(){
// console.log("child render")
    return(
        <div>
        <h3>{this.props.name}</h3>
        <h3>{this.props.location}</h3>
        <h3>{this.state.count}</h3>
        <h3>{this.state.count2}</h3>
        <button onClick={()=>{
            this.setState({
                count:this.state.count+1
            })
        }}> change count</button>
    </div>
    )
}

 }
export default UserClass;