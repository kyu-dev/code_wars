function parse(data) {
  let value = 0;
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === 'i') {
      value += 1;
    }
    if (data[i] === 'd') {
      value -= 1;
    }
    if (data[i] === 's') {
      value *= value;
    }
    if (data[i] === 'o') {
      result.push(value);
    }
  }

  return result; // your code here
}
