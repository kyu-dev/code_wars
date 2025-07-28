function addBinary(a, b) {
  let num = a + b;
  if (num === 0) return "0"; // ça fait le tri direct

  let result = "";

  while (num > 0) {
    let bit = num % 2;
    result = bit + result;
    num = Math.floor(num / 2);
  }

  return result;
}
