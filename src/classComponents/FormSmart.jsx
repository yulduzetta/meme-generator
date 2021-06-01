import React, { Component } from "react";
import FormDumb from "./FormDumb";

export default class FormSmart extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "",
      dietaryRestrictions: {
        isVegan: false,
        isMuslim: false,
        isKosher: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    const { type, name, value, checked } = event.target;

    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({
          [name]: value,
        });
  }

  handleFormSubmit() {
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <FormDumb
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    );
  }
}
