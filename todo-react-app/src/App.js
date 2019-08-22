import React, {Component} from 'react';
//import './App.css';

class App extends Component {

  constructor(){
      super()
      this.state={
          todos: []
      }

      this.todoInput=""
  }

  addTodo(){
      let todoValue=this.todoInput.value
      let newTodos=this.state.todos
      newTodos.push(todoValue)

      
      this.setState({
        todos: newTodos
      })

      //reset 
      this.todoInput.value=""

      //set focus to input
      this.todoInput.focus()
      

  }
  render(){
    return (
      <div>
        <h1>React ToDo</h1>
        <p>Todo Count : {this.state.todos.length}</p>
        <ul>
            {this.state.todos.map((todo,index) => {
              return (<li key={index}>{todo}</li>)
            }) }
        </ul>
        <input type="text" placehold="Enter todo" ref={(input) => this.todoInput=input}/>
        <button onClick={this.addTodo.bind(this)}>Add</button>
      </div>
    );
  }
}

export default App;
