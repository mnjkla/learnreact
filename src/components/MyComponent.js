import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Minh Minh", age: 1, address: "Hà Nội" },
      { id: 2, name: "a a", age: 62, address: "Hà Nội" },
      { id: 3, name: "e ee", age: 17, address: "Hà Nội" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
  };
  //jsx
  render() {
    //DRY
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
      </div>
    );
  }
}
export default MyComponent;
