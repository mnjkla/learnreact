import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "aaaMinh",
    age: 20,
  };
  handleClick(event) {
    console.log("Hello, World!");
    // console.log(event.target);

    console.log("random " + Math.floor(Math.random() * 100));
    this.setState({
      name: "Minh",
      age: Math.floor(Math.random() * 100),
    });
  }
  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); // ngăn chặn hành vi mặc định của form
    console.log("submit form", this.state);
  };
  //jsx
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is my first React component.</p>
        <p>Name: {this.state.name} </p>
        <p>Age: {this.state.age}</p>

        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          click me
        </button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <button>Summit</button>
        </form>
      </div>
    );
  }
}
export default MyComponent;
