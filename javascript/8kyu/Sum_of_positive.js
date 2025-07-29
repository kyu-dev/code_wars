function positiveSum(arr) {
  const result = arr.reduce((a, c) => {
    if (c < 0) {
      return a;
    }
    return a + c;
  }, 0);
  console.log(result);
}

positiveSum([2, -2, 7]);
