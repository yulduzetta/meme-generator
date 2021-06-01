import React, { Component } from "react";

class ToDoItem extends Component {
  render() {
    const completedItemStyle = {
      font: 40,
      backgroundColor: "lightcoral",
      textDecoration: "line-through",
    };

    const activeItemStyle = {
      font: 10,
    };

    return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={this.props.data.completed}
          onChange={() => this.props.handleChange(this.props.data.id)}
        />
        <p
          style={
            this.props.data.completed ? completedItemStyle : activeItemStyle
          }
        >
          {this.props.data.todo}
        </p>
      </div>
    );
  }
}

export default ToDoItem;
