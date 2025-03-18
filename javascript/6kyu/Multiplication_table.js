function multiplicationTable(size) {
  let result = [];
  for (let i = 1; i < size + 1; i++) {
    let row = [];
    for (let j = 1; j < size + 1; j++) {
      row.push(i * j);
    }
    result.push(row);
  }

  return result;
}
