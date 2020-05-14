import React from 'react'
import './addTodo.css'


export const AddTodo = (props) =>{


    return(
        <div className = 'add'>

        <input type = 'text' value = {props.newTodo} onChange = {(event)=> props.newTodoHandler(event)}/>

        <button onClick = {()=> props.addTodoHandler(props.newTodo)} 
                disabled = {!props.disabled}
        >
            Добавить
        </button>

        </div>
    )
}