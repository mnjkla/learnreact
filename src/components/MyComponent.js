import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";
class MyComponent extends React.Component {
  //jsx
  render() {
    const myInfor = { age: 30, name: "Minh Minh", address: "Ha Noi" };
    return (
      <div>
        <UserInfor />
        <DisplayInfor name="Minh Minh" age="30" />
        <hr />
        <DisplayInfor name="Minh   ecMinh" age="30" myInfor={myInfor} />
      </div>
    );
  }
}
export default MyComponent;
