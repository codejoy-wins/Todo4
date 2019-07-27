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
  }



  render(){

    const todos = this.state.todos.map(todo=>{
      return (
        <Todo desc = {todo.desc} key = {todo.id} id = {todo.id} completed = {todo.id} />
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
          <img src={baker3} className="widify"></img>
        </main>
        <footer>
          <a href="https://maxjann.com">Jann Software</a>
        </footer>
      </div>
    );
  }
  
}

export default App;
