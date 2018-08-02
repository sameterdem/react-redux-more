// Action Types
export const actionTypes = {
  COUNTER_INCREMENT: 'COUNTER_INCREMENT',
  COUNTER_DECREMENT: 'COUNTER_DECREMENT',
  ASYNC_COUNTER_INCREMENT: 'ASYNC_COUNTER_INCREMENT',
  ASYNC_COUNTER_DECREMENT: 'ASYNC_COUNTER_DECREMENT',
};

// Action Creatore
export const counterIncrement = () => ({
  type: actionTypes.COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: actionTypes.COUNTER_DECREMENT,
});
