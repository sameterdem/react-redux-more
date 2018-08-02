// Action Types
import { actionTypes } from '../actions/counterActions';

// Initial State
const initialState = {
  count: 0,
};

// Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case actionTypes.COUNTER_DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
