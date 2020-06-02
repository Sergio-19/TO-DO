import React from 'react'
import {Header} from './header/Header'
import { TodoList } from './todoList/TodoList';
import { Info } from './info/Info';


export const Layout = (props) =>{

    return(
        <div style = {{width: '80%', background: '#20232A', margin: '0 auto', height: '100%'}}>

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