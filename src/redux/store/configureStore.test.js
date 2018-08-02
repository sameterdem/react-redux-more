import createHistory from 'history/createBrowserHistory';
import configureStore from './configureStore';

test(`create store successfully`, () => {
  const history = createHistory();
  const store = configureStore(undefined, history);

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
