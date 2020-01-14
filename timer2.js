const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('beep \n');
  }
  if (!isNaN(key)) {
    process.stdout.write(`Setting timer for ${key} seconds ...`);
    setTimeout(() => {
      process.stdout.write('beep\n');
    }, key * 1000);
  }
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});
