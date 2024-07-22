import { taskFirst, taskNext } from './0-constants.js';

test('taskFirst', () => {
  expect(taskFirst()).toBe('I prefer const when I can.');
});

test('taskNext', () => {
  expect(taskNext()).toBe('But sometimes let is okay');
});
