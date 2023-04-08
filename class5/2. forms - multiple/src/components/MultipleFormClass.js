import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
    };
  }

  //   onNameChangeHandler = (event) => {
  //     this.setState({
  //       name: event.target.value,
  //     });
  //   };

  //   onEmailChangeHandler = (event) => {
  //     this.setState({
  //       email: event.target.value,
  //     });
  //   };

  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  onChangeHandler = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>
          {this.state.name}, {this.state.email}
        </h1>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="">Name</label>
            <input
              type="text"
              name="name"
              onChange={this.onChangeHandler}
              value={this.state.name}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="">Email</label>
            <input
              type="text"
              name="email"
              onChange={this.onChangeHandler}
              value={this.state.email}
              className="form-control"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default Header;
