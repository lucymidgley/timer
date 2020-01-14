const timer = process.argv.slice(2);

for (let i = 0; i < timer.length; i++) {
  if (timer[i] < 0 || isNaN(timer[i])) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('.');
  }, timer[i] * 1000);
}