// BATTON :)

process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin = function(num, num2) {
  let x = num;

  for (let i = 0; i <= num2; i++) {
    setTimeout(() => {
      process.stdout.write('\r|   ');
    }, (i * 4 * 250 * x) + (250 * x));  // 250ms delay for each stage

    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, (i * 4 * 250 * x) + (500 * x));

    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, (i * 4 * 250 * x) + (750 * x));

    setTimeout(() => {
      process.stdout.write('\r\\   ');
    }, (i * 4 * 250 * x) + (1000 * x));
  }
};

spin(.5, 10);
