import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

// Root Reducer
import rootReducer from '../reducers';

// Enhancers && Middleware
const enhancers = [];
const middleware = [thunk];

// Redux logger push
/* istanbul ignore if */
if (process.env.NODE_ENV === 'development') {
  middleware.push(createLogger({ collapsed: true }));
}

// Redux dev tool push
/* istanbul ignore if */
if (process.env.NODE_ENV === 'development') {
  enhancers.push(composeWithDevTools());
}

// Composed Enhancers
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

// Store
const store = initialState => createStore(rootReducer, initialState, composedEnhancers);

export default store;
