import concatArrays from './5-spread-operator.js';

test('concatArrays', () => {
  expect(concatArrays(['a', 'b'], ['c', 'd'], 'Hello')).toEqual(['a', 'b', 'c', 'd', 'H', 'e', 'l', 'l', 'o']);
});
