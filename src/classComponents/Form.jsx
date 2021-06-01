import React, { Component } from "react";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "red",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;

    type === "checkbox"
      ? this.setState({
          [name]: checked,
        })
      : this.setState({
          [name]: value,
        });
  }

  handleFormSubmit() {
    alert('YAY')
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          onChange={this.handleChange}
          type="text"
          name="firstName"
          id="first-name"
          value={this.state.firstName}
          placeholder="Type your name"
        />
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          name="lastName"
          id="last-name"
          value={this.state.lastName}
          placeholder="Type your last name"
        />
        <br />
        <textarea
          onChange={this.handleChange}
          id="text-area"
          value="Default value goes here"
        />
        <br />
        <label>
          <input
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange}
          />{" "}
          Is Friendly?
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange}
          />{" "}
          Male
        </label>
        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange}
          />{" "}
          Female
        </label>
        <br />

        <label>
          <select 
          name="favColor" 
          onChange={this.handleChange}
          value={this.state.favColor}>
            <option value="red">Red</option>
            <option value="white">White</option>
            <option value="blue">Blue</option>
          </select>
          Favorite Color
        </label>

        <button>Submit</button>
        <p>Your color is: {this.state.favColor}</p>
      </form>
    );
  }
}
