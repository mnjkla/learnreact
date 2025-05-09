import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShow: true,
  };
  handleShowHide = () => {
    // this.setState({ isShow: !this.state.isShow });
    this.setState((prevState) => {
      return {
        isShow: !prevState.isShow,
      };
    });
  };
  render() {
    const { listUser } = this.props;
    // Destructuring props to get myInfor
    // const { name, age } = this.props;
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShow ? "Hide" : "Show"}
          </span>
        </div>
        {this.state.isShow && (
          <div>
            {listUser.map((x) => {
              return (
                <div key={x.id} className={+x.age < 18 ? "red" : "green"}>
                  <h2>Display Information</h2>
                  <p>Name: {x.name}</p>
                  <p>Age: {x.age}</p>
                  <p>Address: {x.address}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
export default DisplayInfor;
