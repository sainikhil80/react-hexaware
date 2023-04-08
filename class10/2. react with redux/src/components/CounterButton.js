import React from "react";
import { useDispatch } from 'react-redux';

const CounterButton = () => {

  const dispatch = useDispatch();

  function incrementHandler(){
    dispatch({ type: 'INCREMENT' })
  }

  function decrementHandler(){
    dispatch({ type: 'DECREMENT' })
  }

  return (
    <div>
      <button onClick={incrementHandler} className="btn btn-primary">
        Increment
      </button>
      <button onClick={decrementHandler} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
};
export default CounterButton;
