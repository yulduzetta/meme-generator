import React, { Component } from "react";

export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
    console.log("Incremented!");
  }
  handleDecrement() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
    console.log("Decremented!");
  }

  render() {
    const mainStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

    return (
      <div style={mainStyle}>
        <h1>Test click increments and decrements</h1>
        <h2>Current count: {this.state.count}</h2>
        <div>
          <button
            style={{ margin: 20, padding: 20, backgroundColor: "lightgreen" }}
            onClick={() => this.handleIncrement()}
          >
            Click to increment
          </button>
          <button
            style={{ margin: 20, padding: 20, backgroundColor: "lightcoral" }}
            onClick={() => this.handleDecrement()}
          >
            Click to decrement
          </button>
        </div>
      </div>
    );
  }
}


// import React, { Component } from "react";
// import styles from "./style.css";
// import Count from './classComponents/Count'

// export default class App extends Component {
//   render() {
//     return <Count />;
//   }
// }
