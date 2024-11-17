export function taskFirst() {
  const task = 'I prefer const when I can.'; // Use `const` for immutable values
  return task; // The variable `task` is used here
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let'; // Use `let` for values that can be reassigned
  combination += getLast(); // Append the value returned by `getLast()`
  return combination; // Return the updated `combination`
}
