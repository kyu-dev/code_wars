var countBits = function (n) {
  console.log(
    n
      .toString(2)
      .split('')
      .reduce((a, b) => a + Number(b), 0)
  );
};
countBits(3432);
