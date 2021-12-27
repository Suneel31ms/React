// 6,9
import React,{Component} from "react";

class Welcome extends Component{
    render(){
        const {name,heroName} = this.props
        const {state1,state2} = this.state
        return (
            <div>
                <h1>Class {this.props.name}  a.k.a {this.props.heroName}</h1>
                <h1>Class {name}  a.k.a {heroName}</h1>
                <h1>Class {state1}  a.k.a {state2}</h1>
            {this.props.children}
            </div>
        );
    }
}
export default Welcome;