import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Minh",
    age: 20,
  };
  handleClick(event) {
    console.log("Hello, World!");
    // console.log(event.target);
    console.log("my name is " + this.state.name);
  }
  handleOnMoverOver(event) {
    console.log(event.pageX);
  }

  //jsx
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is my first React component.</p>
        <p>Name: {this.state.name} </p>
        <p>Age: {this.state.age}</p>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <button onClick={this.handleClick}> click me</button>
      </div>
    );
  }
}
export default MyComponent;
