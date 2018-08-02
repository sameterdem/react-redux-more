import { counterIncrement, counterDecrement, actionTypes } from './counterActions';

describe('Counter actions', () => {
  test(`returns an action with type ${actionTypes.COUNTER_INCREMENT}`, () => {
    const action = counterIncrement();
    expect(action).toEqual({ type: actionTypes.COUNTER_INCREMENT });
  });

  test(`returns an action with type ${actionTypes.COUNTER_DECREMENT}`, () => {
    const action = counterDecrement();
    expect(action).toEqual({ type: actionTypes.COUNTER_DECREMENT });
  });
});
