process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  if (!process.stdin.isTTY) {
    // This block will execute when input is piped (not interactive mode)
    process.stdout.write('This important software is now closing\n');
    process.exit();
  }
});

// Exit gracefully when in interactive mode (Ctrl+D or piping input)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
