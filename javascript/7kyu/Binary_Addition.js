function addBinary(a, b) {
  let num = a + b;
  let rem;
  let result = 0;
  let i = 1;

  while (num > 0) {
    rem = num % 2;
    result += rem * i;
    i *= 10;
    num = Math.floor(num / 2);
  }
  result = result.toString();
  return result;
}
