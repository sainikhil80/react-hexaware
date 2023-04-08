import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  // const [firstName, setFirstName] = useState('')
  // const [email, SetEmail] = useState('')
  // const [mobile, setMobile] = useState('')
  // const [password, setPassword] = useState('')

  const [user, setUser] = useState({
    firstName: "",
    email: "",
    mobile: "",
    password: "",
  });

  function onChangeHandler(event) {
    setUser({...user,
      [event.target.name]: event.target.value
    })
  }

  function onSubmitHandler(event){
    event.preventDefault()
    axios.post('http://apolis-grocery.herokuapp.com/api/auth/register', user)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h1>Register</h1>
      <h2>
        {user.firstName}, {user.email}, {user.mobile}, {user.password}
      </h2>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            value={user.firstName}
            onChange={onChangeHandler}
            name="firstName"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={user.email}
            onChange={onChangeHandler}
            name="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Mobile</label>
          <input
            type="text"
            value={user.mobile}
            onChange={onChangeHandler}
            name="mobile"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="text"
            value={user.password}
            onChange={onChangeHandler}
            name="password"
            className="form-control"
          />
        </div>
        <input type="submit" value="Register" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Register;
