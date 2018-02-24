// actions
const TOGGLE_CHANGE = 'TOGGLE_CHANGE';

// reducer
const reducer = (state = {open: false}, action) => {
  switch (action.type) {
    case TOGGLE_CHANGE:
      return {
        open: !state.open,
      };
    default:
      return state;
  }
};

export default reducer;

export const onToggleOpen = () => {
  return {
    type: TOGGLE_CHANGE,
  };
};

