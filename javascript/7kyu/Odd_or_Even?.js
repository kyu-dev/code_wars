function oddOrEven(array) {
  const isEven = array.reduce((acc, cur) => acc + cur, 0) % 2 === 0;
  return isEven ? 'even' : 'odd';
}
