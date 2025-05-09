import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "aaaMinh",
    age: 20,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault(); // ngăn chặn hành vi mặc định của form
    console.log("submit form", this.state);
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100),
      name: this.state.name,
      age: this.state.age,
    });
  };
  render() {
    return (
      <div>
        {" "}
        <h1>Hello, World!</h1>
        <p>This is my first React component.</p>
        <p>Name: {this.state.name} </p>
        <p>Age: {this.state.age}</p>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label> ten cua ban</label>
          <input
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <label> tuoi cua ban</label>
          <input
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <button>Summit</button>
        </form>
      </div>
    );
  }
}
export default AddUserInfor;
