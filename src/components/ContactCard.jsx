const ContactCard = ({ contact }) => {
  return (
    <div className="contact-card">
      <img src={contact.imgUrl} />
      <h3>{contact.name}</h3>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
    </div>
  );
};

export default ContactCard;

// import React from "react";
// import ToDoList from "./components/ToDoList";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import TimeOfDay from "./components/TimeOfDay";
// import ContactCard from "./components/ContactCard";
// import css from "./components/style.css";

// const App = () => {
//   return (
//     <div className="contacts">
//       <ContactCard
//         contact={{
//           name: "Mr.Whiskerson",
//           imgUrl: "https://placekitten.com/300/200",
//           phone: "(212)555-1234",
//           email: "mr.whiskaz@catsnap.meow",
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "Mr.Whiskerson",
//           imgUrl: "http://placekitten.com/400/200",
//           phone: "(212)555-1234",
//           email: "mr.whiskaz@catsnap.meow",
//         }}
//       />
//       <ContactCard
//         contact={{
//           name: "Mr.Whiskerson",
//           imgUrl: "https://placekitten.com/400/300",
//           phone: "(212)555-1234",
//           email: "mr.whiskaz@catsnap.meow",
//         }}
//       />{" "}
//       <ContactCard
//         contact={{
//           name: "Mr.Whiskerson",
//           imgUrl: "https://placekitten.com/200/138",
//           phone: "(212)555-1234",
//           email: "mr.whiskaz@catsnap.meow",
//         }}
//       />
//     </div>
//   );
// };

// export default App;

