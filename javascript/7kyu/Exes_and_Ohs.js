function XO(str) {
  let o = 0;
  let x = 0;

  for (let char of str) {
    if (char.toLowerCase() === 'x') {
      x += 1;
    }
    if (char.toLowerCase() === 'o') {
      o += 1;
    }
  }
  return x === o;
}
