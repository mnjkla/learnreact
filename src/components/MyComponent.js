import React from "react";
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>This is my first React component.</p>
        {Math.random() > 0.5 ? (
          <p>Random number is greater than 0.5</p>
        ) : (
          <p>Random number is less than or equal to 0.5</p>
        )}
      </div>
    );
  }
}
export default MyComponent;
