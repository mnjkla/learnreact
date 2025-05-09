import React from "react";

class DisplayInfor extends React.Component {
  render() {
    console.log(this.props);
    const { myInfor } = this.props;
    // Destructuring props to get myInfor
    // const { name, age } = this.props;
    return (
      <div>
        <h2>Display Information</h2>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>
          Address: {this.props.myInfor ? this.props.myInfor.address : "N/A"}
        </p>
      </div>
    );
  }
}
export default DisplayInfor;
