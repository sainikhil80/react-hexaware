import { createStore } from "redux";

// initialState
const initialState = {
  counter: 0,
};

// reducer function
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// create store
const store = createStore(counterReducer);

export default store;