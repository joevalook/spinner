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