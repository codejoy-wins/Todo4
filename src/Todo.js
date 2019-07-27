import React from 'react'

function Todo(props){
    const MySty = {
        display: "inline-block",
        padding: "1vw"
    }
    const Grayed = {
        display: "inline-block",
        padding: "1vw",
        color: "gray",
        textDecoration: "line-through",
        fontStyle: "italic"
    }
    return (
        <div>
            <input checked={props.completed} onChange={()=>props.handleClick(props.id)} type="checkbox"></input>
            <h4 style ={props.completed ? Grayed : MySty}>{props.desc}</h4>
        </div>
    )
}

export default Todo