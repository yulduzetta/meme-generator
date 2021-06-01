export default function FormDumb(props) {
  return (
    <>
      <form onSubmit={props.handleFormSubmit}>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={props.firstName}
            onChange={props.handleChange}
          />{" "}
          First Name
        </label>
        <br />
        <label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={props.lastName}
            onChange={props.handleChange}
          />{" "}
          Last Name
        </label>
        <br />
        <label>
          <input
            type="text"
            name="age"
            placeholder="Age"
            value={props.age}
            onChange={props.handleChange}
          />{" "}
          Age
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={props.gender === "female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={props.gender === "male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="isVegan"
            checked={props.dietaryRestrictions.isVegan}
            onChange={props.handleChange}
          />
          Vegan
          <br />
        </label>
        <label>
          <input
            type="checkbox"
            name="isMuslim"
            checked={props.dietaryRestrictions.isMuslim}
            onChange={props.handleChange}
          />
          Is Muslim
        </label>
        <label>
          <input
            type="checkbox"
            name="isKosher"
            checked={props.dietaryRestrictions.isKosher}
            onChange={props.handleChange}
          />{" "}
          Is Kosher
        </label>
        <br />
        <select name="location" onChange={props.handleChange}>
          <option value="">--Select option--</option>
          <option value="tashkent">Tashkent</option>
          <option value="moscow">Moscow</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
      <div>
        <p>First name: {props.firstName}</p>
        <p>Last name: {props.lastName}</p>
        <p>Age: {props.age}</p>
        <p>Gender: {props.gender}</p>
        <p>Is Vegan? {props.dietaryRestrictions.isVegan ? "yes" : "no"}</p>
        <p>
          Is Muslim? {props.dietaryRestrictions.isMuslim ? "yes" : "no"}
        </p>
        <p>Is Kosher {props.dietaryRestrictions.isKosher ? "yes" : "no"}</p>
        <p>Location: {props.location}</p>
      </div>
    </>
  );
}
