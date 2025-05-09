import React from "react";

class DisplayInfor extends React.Component {
  render() {
    const { listUser } = this.props;
    // Destructuring props to get myInfor
    // const { name, age } = this.props;
    return (
      <div>
        {listUser.map((x) => {
          return (
            <div key={x.id}>
              <h2>Display Information</h2>
              <p>Name: {x.name}</p>
              <p>Age: {x.age}</p>
              <p>Address: {x.address}</p>
              <hr />
            </div>
          );
        })}
        {/* {<h2>Display Information</h2>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>
          Address: {this.props.myInfor ? this.props.myInfor.address : "N/A"}
        </p>
        <hr />
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>
          Address: {this.props.myInfor ? this.props.myInfor.address : "N/A"}
        </p>{" "}
        <hr />
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
        <p>
          Address: {this.props.myInfor ? this.props.myInfor.address : "N/A"}
        </p>} */}
      </div>
    );
  }
}
export default DisplayInfor;
