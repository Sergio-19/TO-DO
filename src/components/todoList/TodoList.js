import React from 'react'
import './todoList.css'
import { AddTodo } from '../addTodo/AddTodo';
import { TodoItem } from '../todoItem/TodoItem';


export const TodoList = (props) =>{


    return(
        <div className = 'list'>

            <div className = 'listContainer'>

            <AddTodo 
                addTodoHandler = {props.addTodoHandler}
                newTodoHandler = {props.newTodoHandler}
                newTodo = {props.newTodo} 
                disabled = {props.disabled}
            
            />
            
            {props.todo.length < 1 ? <h2>Список заметок пуст</h2> : <ul>

                {props.todo.map((item, i) =>{

                    return(
                        <TodoItem 
                        key = {i}
                        click = {props.removeTodoHandler}
                        arg = {item}
                        todo = {item}/>
                    )
                })}


            </ul>}
            
            
            </div> 
        
        </div>
    )
}