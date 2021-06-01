import React from "react";

const Joke = ({ jokeProps }) => {
  const handleOnclick = (details) => {
    alert(`Details: ${details}`);
  };

  return (
    <div>
      {jokeProps.question && <h1>Question: {jokeProps.question} </h1>}
      <h3>Answer: {jokeProps.punchLine}</h3>
      <button onClick={() => handleOnclick(jokeProps.details)}>Details</button>
    </div>
  );
};

export default Joke;


// import React from "react";
// import Joke from "./components/Joke";
// import jokesData from "./data/jokes";

// const App = () => {
//   const data = jokesData.map((joke) => {
//     const { question, punchLine, id, details } = joke;
//     return <Joke key={id} jokeProps={{ question, punchLine, details}} />;
//   });

//   return <>{data}</>;
// };

// export default App;

