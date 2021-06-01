import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import todosData from "../data/todos";

export class ToDoList extends Component {
  constructor() {
    super();
    this.state = {
      todo: todosData,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(id) {
    this.setState((prevState) => {
      // Creates a new array copied from prevState with flipped 'completed' boolean of the matching todo
      const updatedState = prevState.todo.map((item) => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todo: updatedState,
      };
    });
  }

  generateTodos() {
    const data = this.state.todo.map((data) => {
      return (
        <ToDoItem
          key={data.id}
          data={data}
          handleChange={this.handleOnChange}
        />
      );
    });
    return data;
  }

  render() {
    return (
      <>
        <h3>Here is your TODO list</h3>
        <div className="todo-list">{this.generateTodos()}</div>
      </>
    );
  }
}

export default ToDoList;

// import React, { Component } from "react";
// import ToDoList from "./classComponents/ToDoList";
// import styles from './style.css'

// export default class App extends Component {

//   render() {
//     return <ToDoList />;
//   }
// }
