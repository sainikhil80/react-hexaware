import React, { Component } from "react";

class Child extends Component {
  componentWillUnmount() {
    alert("the component is about to removed");
  }

  render() {
    return (
      <div>
        <h1>Hello from Child Component</h1>
      </div>
    );
  }
}
export default Child;
