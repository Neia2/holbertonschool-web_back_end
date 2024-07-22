import createEmployeesObject from './11-createEmployeesObject.js';

test('createEmployeesObject', () => {
  expect(createEmployeesObject("Software", ["Bob", "Sylvie"])).toEqual({
    Software: ["Bob", "Sylvie"]
  });
});
