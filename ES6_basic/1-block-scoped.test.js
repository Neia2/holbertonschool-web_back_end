import taskBlock from './1-block-scoped.js';

test('taskBlock with true', () => {
  expect(taskBlock(true)).toEqual([false, true]);
});

test('taskBlock with false', () => {
  expect(taskBlock(false)).toEqual([false, true]);
});
