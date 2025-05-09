import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "Minh Minh", age: 30, address: "Hà Nội" },
      { id: 2, name: "a a", age: 30, address: "Hà Nội" },
      { id: 3, name: "e ee", age: 30, address: "Hà Nội" },
    ],
  };
  //jsx
  render() {
    //DRY
    return (
      <div>
        <UserInfor />
        <br />
        <br />
        <DisplayInfor listUser={this.state.listUser} />
        <hr />
      </div>
    );
  }
}
export default MyComponent;
