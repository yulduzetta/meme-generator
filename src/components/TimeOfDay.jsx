import React from "react";

const TimeOfDay = () => {
  const day = new Date();
  const hour = day.getHours();
  let timeOfDay;

  const morningStyle = {
    backgroundColor: "green",
  };

  if (hour < 12) {
    timeOfDay = "morning";
    return <p style={morningStyle}>Morning</p>;
  } else if (hour > 12 && hour < 18) {
    timeOfDay = "day";
    return <p style={{ fontSize: 100, backgroundColor: "blue" }}>Day</p>;
  } else {
    timeOfDay = "night";
  }

  return (
    <div>
      <p>{`It's ${timeOfDay}`}</p>
    </div>
  );
};

export default TimeOfDay;
