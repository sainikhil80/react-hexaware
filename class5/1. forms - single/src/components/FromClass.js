import React, { Component } from "react";

class FormClass extends Component {
  constructor() {
    super();
    this.state = {
      name: "Mark",
    };
  }

  onChangeHandler = (event) => {
      //console.log('changed')
      //console.log(event.target)
      //console.log(event.target.value)
      this.setState({
          name: event.target.value
      })
  }

  onSubmitHandler = (event) => {
      event.preventDefault()
      console.log(this.state.name)
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
          <marquee>Hello</marquee>
        <h1>{this.state.name}</h1>
        <div className="form-group">
          <label>Name</label>
          <input type="text" onChange={this.onChangeHandler} className="form-control" value={this.state.name} />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    );
  }
}
export default FormClass;
