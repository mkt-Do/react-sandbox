// actions
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const INCREMENT_ASYNC = 'INCREMENT_ASYNC';

// reducer
const reducer = (state = { num: 0 }, action) => {
  switch (action.type) {
  case INCREMENT:
    return {
      num: state.num + action.payload,
    };
  case DECREMENT:
    return {
      num: state.num - action.payload,
    };
  default:
    return state;
  }
};

export default reducer;

export const increment = (amount = 1) => {
  return {
    type: INCREMENT,
    payload: amount,
  };
};

export const decrement = (amount = 1) => {
  return {
    type: DECREMENT,
    payload: amount,
  };
};

export const incrementAsync = () => {
  return {
    type: INCREMENT_ASYNC,
  };
};

