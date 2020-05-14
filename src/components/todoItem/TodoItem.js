import React from 'react'
import './todoItem.css'


export const TodoItem = (props) =>{


    return(
        <li>
            <span style = {{display: 'flex', justifyContent: 'space-between'}}>

                <span>{props.todo}</span>

                <button onClick = {() => props.click(props.arg)} >
                    <i className = 'fa fa-times'/>
                </button>

            </span>

        </li>
    )
}