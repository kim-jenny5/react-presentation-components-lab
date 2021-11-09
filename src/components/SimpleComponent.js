import React, { Component } from "react";

export default class SimpleComponent extends Component {
  state = {
    mood: "happy",
  };

  handleClick = (e) => {
    // console.log(e.target);
    const mood2 = this.state.mood === "happy" ? "sad" : "happy";
    this.setState({ mood: mood2 });
  };

  render() {
    return <div onClick={this.handleClick}>{this.state.mood}</div>;
  }
}
