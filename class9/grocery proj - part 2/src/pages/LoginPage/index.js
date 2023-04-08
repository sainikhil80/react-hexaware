import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault()
    axios.post('http://apolis-grocery.herokuapp.com/api/auth/login', user)
    .then(response => {
        console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="row">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">
        <div className="wrapper">
          <h2>Login</h2>         
          <hr />
          <form onSubmit={onSubmitHandler}>
           
         
            <div className="form-group">
              <label>Email</label>
              <input
                name="email"
                type="text"
                value={user.email}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
          
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={user.password}
                onChange={onChangeHandler}
                className="form-control"
              />
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
            />
            <br />
            <p>
              <a href="">New User? Click here</a>
            </p>
          </form>
        </div>
      </div>
      <div className="col-lg-4"></div>
    </div>
  );
};
export default LoginPage;
