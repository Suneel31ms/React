import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.greetHandler("Suneel",'Chauhan')}>Greet Parent</button>
        </div> 
    )
}

export default ChildComponent
