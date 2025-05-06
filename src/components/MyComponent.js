import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "Minh",
    age: 20,
  };
  //jsx
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is my first React component.</p>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
      </div>
    );
  }
}
export default MyComponent;
