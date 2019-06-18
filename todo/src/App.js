import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/todolist';
import ToDoForm from './components/todoform';
import './index.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Redux ToDo App</h1>
        <ToDoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;