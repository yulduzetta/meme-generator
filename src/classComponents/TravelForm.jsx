import { Component } from "react";

export default class TravelForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      location: "Tashkent",
      dietaryRestrictions: {
        isVegan: false,
        isKosher: false,
        isMuslim: false,
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState((prevState) => {
          return {
            dietaryRestrictions: {
              ...prevState.dietaryRestrictions,
              [name]: checked,
            },
          };
        })
      : this.setState({ [name]: value });
  }

  handleSubmit() {
    const { firstName, lastName, age, gender, location, dietaryRestrictions } =
      this.state;
    alert(
      `Here are your details: 
      First Name: ${firstName} 
      Last Name: ${lastName}
      Age: ${age}
      Gender: ${gender}
      Location: ${location}
       `
    );
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
            value={this.state.firstName}
          ></input>
          <br />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
            value={this.state.lastName}
          ></input>
          <br />
          <input
            type="text"
            name="age"
            placeholder="Age"
            onChange={this.handleChange}
            value={this.state.age}
          ></input>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.handleChange}
            />
            Male
            <br />
          </label>
          <label>
            <input
              type="checkbox"
              name="isKosher"
              checked={this.state.dietaryRestrictions.isKosher}
              onChange={this.handleChange}
            />
            Kosher
          </label>
          <label>
            <input
              type="checkbox"
              name="isMuslim"
              checked={this.state.dietaryRestrictions.isMuslim}
              onChange={this.handleChange}
            />
            Muslim
          </label>
          <label>
            <input
              type="checkbox"
              name="isVegan"
              checked={this.state.dietaryRestrictions.isVegan}
              onChange={this.handleChange}
            />
            Vegan
            <br />
          </label>
          <label>
            <select
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            >
              <option value="">--Please select your location--</option>
              <option value="tashkent">Tashkent</option>
              <option value="moscow">Moscow</option>
              <option value="austin">Austin</option>
            </select>{" "}
            Location
          </label>
          <button>Submit</button>
        </form>
        <h4>
          FN {this.state.firstName} LN {this.state.lastName} AGE{" "}
          {this.state.age} GENDER {this.state.gender} LOCATION:{" "}
          {this.state.location} IS_VEGAN? {this.state.vegan && "yes"}
        </h4>
      </>
    );
  }
}
