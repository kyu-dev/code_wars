function grow(x) {
  return x.reduce((a, c) => {
    return a * c;
  });
}
