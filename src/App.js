import React from 'react';
import './App.css';
import {Layout} from './components/Layout'



class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
       todo: [],
       newTodo: '',
       disabled: false
    }

  }



addTodoHandler = async (todoItem) =>{
  const todo = [...this.state.todo]
  todo.push(todoItem)
  await this.setState({todo, newTodo: '', disabled: false})

  localStorage.todo = this.state.todo

}


removeTodoHandler = async (value) =>{
  const oldTodo = [...this.state.todo]
  const todo = [];
  for(let i = 0; i < oldTodo.length; i++){
    if(oldTodo[i] !== value ){
      todo.push(oldTodo[i])
    }
  }
  await this.setState({todo})
  localStorage.todo = this.state.todo
}

newTodoHandler = (event) =>{

  this.setState({newTodo: event.target.value, disabled: true})

}



componentDidMount(){
  let todo = [];

  if(localStorage.todo){
    todo = localStorage.todo.split(',')

  }
  this.setState({todo})
}




  render(){

    return(
      <div className = 'app'>

      <Layout  
      
      todo = {this.state.todo}
      newTodo = {this.state.newTodo}
      disabled = {this.state.disabled}
      addTodoHandler = {this.addTodoHandler}
      removeTodoHandler = {this.removeTodoHandler}
      newTodoHandler = {this.newTodoHandler}
      
      />




      </div>
    )

  }
}

export default App
