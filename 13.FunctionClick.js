import React from 'react'
//rfce
function FunctionClick() {

    function clickHandler(){
        console.log("Function Clicked")
    }
    return (
        <div>
           <button onClick={clickHandler}>Click</button> 
        </div>
    )
}

export default FunctionClick
