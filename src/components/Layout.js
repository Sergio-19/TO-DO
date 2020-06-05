import React from 'react'
import {Header} from './header/Header'
import { TodoList } from './todoList/TodoList';
import { Info } from './info/Info';
import './layout.css'


export const Layout = (props) =>{

    return(
        <div className = 'layout'>

            <Header />

            
            <TodoList  
                todo = {props.todo}
                newTodo = {props.newTodo}
                    disabled = {props.disabled}
                   addTodoHandler = {props.addTodoHandler}
                   newTodoHandler = {props.newTodoHandler} 
                   removeTodoHandler = {props.removeTodoHandler} 
            
            />
            
            <Info infoHandler = {props.infoHandler} info = {props.info}/>

        </div>
    )
}