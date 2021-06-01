import React, { Component } from "react";

export class IsLoggedIn extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      };
    });
  }

  render() {
    return (
      <>
        <div>You are logged {this.state.isLoggedIn ? "in" : "out"}</div>
        <button onClick={() => this.handleClick()}>
          Click to log {this.state.isLoggedIn ? "out" : "in"}
        </button>
      </>
    );
  }
}

export default IsLoggedIn;
