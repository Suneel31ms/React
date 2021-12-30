import React, { Component } from 'react'
// Binding Event Handlers--4types
class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
       //3 this.changeMsg=this.changeMsg.bind(this)
    }
    // changeMsg() {
    //     this.setState({
    //         message: 'Good Bye'
    //     })
    //     console.log(this)
    // }
    
    //4
    changeMsg=() =>{
        this.setState({
            message:"Good Byee"
        }) 
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/*1  <button onClick={this.changeMsg.bind(this)}>Click Binding</button>  */}  
                {/*2  <button onClick={()=>{this.changeMsg()}}>Click Binding</button>  */}
                <button onClick={this.changeMsg}>Click Binding</button>
            </div>
        )
    }
}

export default EventBind
