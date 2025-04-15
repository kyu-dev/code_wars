function count(string) {
  let object = {};
  for (let char of string) {
    if (object.hasOwnProperty(char)) {
      object[char]++;
    } else {
      object[char] = 1;
    }
  }

  return object;
}
