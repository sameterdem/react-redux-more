import configureStore from './configureStore';

test(`create store successfully`, () => {
  const store = configureStore();

  expect(store).toHaveProperty('dispatch');
  expect(store).toHaveProperty('getState');
});
