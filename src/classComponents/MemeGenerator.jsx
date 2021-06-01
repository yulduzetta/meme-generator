//  smart component

import React, { Component } from "react";

export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((json) => {
        const data = json.data.memes;
        this.setState({
          allMemeImgs: data,
        });
      });
  }

  handleOnChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleOnSubmit(event) {
    event.preventDefault();
    const randomImage = this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)]; // returns a random integer from 0 to 99

    this.setState({
      randomImg: randomImage.url,
      topText: "",
      bottomText: "",
    });
  }

  render() {
    return (
      <main>
        <form className="form" onSubmit={this.handleOnSubmit}>
          <label>
            <input
              type="text"
              name="topText"
              value={this.state.topText}
              placeholder="Top Text"
              onChange={this.handleOnChange}
            ></input>{" "}
            Top Text
          </label>
          <label>
            <input
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              placeholder="Bottom Text"
              onChange={this.handleOnChange}
            ></input>{" "}
            Bottom Text
          </label>
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="random-meme" />
          <p className="top"> {this.state.topText}</p>
          <p className="bottom"> {this.state.bottomText}</p>
        </div>
      </main>
    );
  }
}
