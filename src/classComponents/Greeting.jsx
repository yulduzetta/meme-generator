import React, { Component } from "react";

export default class Header extends Component {
  timeOfDay() {
    const day = new Date();
    const hour = day.getHours();

    if (hour < 12) {
      return "morning";
    } else if (hour > 12 && hour < 18) {
      return "day";
    } else {
      return "night";
    }
  }

  render() {
    return (
      <main>
        <h3>Good {this.timeOfDay()} to you, sir or madam!</h3>
      </main>
    );
  }
}
