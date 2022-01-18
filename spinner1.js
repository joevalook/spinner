const spinner = (spins, speed) => {
  let symbols = ["\r|", "\r/", "\r-" ,'\r\\' ]

  for (let i = 0; i < spins*4; i++) {
    let a = i
    if (a > 3) {
      a = a % 4
    }
    setTimeout(() => {
      process.stdout.write(symbols[a]);
    }, i*1000/speed);
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, spins*4000/speed);
}

spinner(10,10);
/*
setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 500);

setTimeout(() => {
   Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 700);

 ... fill in the rest yourself ...
*/
