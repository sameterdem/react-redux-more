import { combineReducers } from 'redux';

// Reducers
import counterReducer from './counterReducer';

// RootReducer
const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
