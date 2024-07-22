import appendToEachArrayValue from './10-loops.js';

test('appendToEachArrayValue', () => {
  expect(appendToEachArrayValue(['appended', 'fixed', 'displayed'], 'correctly-')).toEqual([
    'correctly-appended', 'correctly-fixed', 'correctly-displayed'
  ]);
});
