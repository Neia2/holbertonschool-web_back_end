export default function taskBlock(trueOrFalse) {
  const task = false; // Declare as `const` for block scope
  const task2 = true; // Declare as `const` for block scope

  if (trueOrFalse) {
    const innerTask = true; // Use different names to avoid overwriting
    const innerTask2 = false;
    console.log(innerTask, innerTask2); // If needed, use them inside the block
  }

  return [task, task2];
}
