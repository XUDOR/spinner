process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin = function(num, num2) {
  let x = num;
  const spinnerChars = ['|', '/', '-', '\\'];

  for (let i = 0; i <= num2; i++) {
    for (let j = 0; j < spinnerChars.length; j++) {
      setTimeout(() => {
        process.stdout.write('\r' + spinnerChars[j] + '   ');
      }, (i * spinnerChars.length * 250 * x) + ((j + 1) * 250 * x));
    }
  }
};

spin(.5, 10);
