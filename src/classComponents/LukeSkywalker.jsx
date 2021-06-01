import React, { Component } from "react";

export default class LukeSkywalker extends Component {
  constructor() {
    super();
    this.state = {
      character: {},
      isLoading: false,
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        isLoading: true,
      };
    });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState(() => {
          return {
            character: data,
            isLoading: false,
          };
        });
      });
  }

  render() {
    return (
      <div>
        {/* <h1>Name: {this.state.character.name}</h1> */}
        {this.state.isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <h1>{this.state.character.name}</h1>
        )}
      </div>
    );
  }
}
