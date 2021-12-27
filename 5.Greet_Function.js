import React from "react";
// function Greet(){
//     return <h1>Hello Suneel</h1>
// }

const Greet = (props) =>{
const {name, heroName} = props
 return (
    <>
    {/* <h1>Hello {props.name+" "+props.heroName}</h1> */}
    <h1>Hello {name} a.k.a {heroName}</h1>
    {props.children}
    </>
 );
} 
export default Greet