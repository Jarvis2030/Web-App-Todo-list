import React from "react"

export default function Show(props){
    return(
        <button type="button" 
        className="btn toggle-btn" 
        aria-pressed={props.pressed} 
        onClick = {()=>props.setFilter(props.name)}
        >
          <span className="visually-hidden">Show </span>
          <span>{props.name}</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    );
}