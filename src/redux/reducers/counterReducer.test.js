import { actionTypes } from '../actions/counterActions';
import counterReducer from './counterReducer';

test(`returns default initial state of '0' when no action is passed`, () => {
  const getState = counterReducer(undefined, {});
  expect(getState.count).toBe(0);
});

test(`returns state of '5' upon receiving an action of type COUNTER_INCREMENT`, () => {
  const getState = counterReducer({ count: 4 }, { type: actionTypes.COUNTER_INCREMENT });
  expect(getState.count).toBe(5);
});

test(`returns state of '5' upon receiving an action of type COUNTER_DECREMENT`, () => {
  const getState = counterReducer({ count: 6 }, { type: actionTypes.COUNTER_DECREMENT });
  expect(getState.count).toBe(5);
});
