import React from 'react';
import baker from './mvp.jpeg'
import baker3 from './mayfield.jpg'
import Todo from './Todo';
import todoData from './todoData';

import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      todos: todoData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id){
    console.log(`clicking ${id}`)
    this.setState(prevState=>{
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }

  render(){

    const todos = this.state.todos.map(todo=>{
      return (
        <Todo handleClick={this.handleClick} desc = {todo.desc} key = {todo.id} id = {todo.id} completed = {todo.completed} />
      )
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1>Baker Mayfield</h1>
          <img src={baker} alt="baker" />
        </header>
        <main>
          <h2>Todo List</h2>
          {todos}
          <img src={baker3} alt="mayfield" className="widify"></img>
        </main>
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
      </div>
    );
  }
  
}

export default App;
