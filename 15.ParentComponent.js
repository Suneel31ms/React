import React, { Component } from 'react'
import ChildComponent from './15a.ChildComponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parentName:'Parent'
         }
         this.greetParent = this.greetParent.bind(this)
     }
     greetParent(child,surname){
         alert(`Hello ${this.state.parentName} from ${child} from ${surname}`)
     }
    render() {
        return (
            <div>
               <ChildComponent greetHandler={this.greetParent}/> 
            </div>
        )
    }
}

export default ParentComponent


















