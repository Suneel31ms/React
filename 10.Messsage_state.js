import React, { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state ={
            message:' Message to Vistors...'
        }
    }
    changeMessage(){
        this.setState({
            message:'Thank You For subscribe'
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </>
        );
    }
}
export default Message;