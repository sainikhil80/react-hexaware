import React, { useState } from "react";

const Header = () => {
  const [name, setName] = useState("");

  function onChangeHandler(event) {
    setName(event.target.value);
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log(name);
  }

  return (
    <div>
      <h1>{name}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" onChange={onChangeHandler} value={name} className='form-control' />
        </div>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};
export default Header;
