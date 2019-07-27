import React from 'react'

function Todo(props){
    const MySty = {
        display: "inline-block",
        padding: "1vw"
    }
    return (
        <div>
            <input type="checkbox"></input>
            <h4 style ={MySty}>{props.desc}</h4>
        </div>
    )
}

export default Todo