import React from "react";
import { Component } from "react";
class Props2 extends Component{
    render(){
        return(
            <>
            <h1>name is {this.props.name}</h1>
            <h2>age is {this.props.age}</h2>
            </>
        )
    }
}
export default Props2