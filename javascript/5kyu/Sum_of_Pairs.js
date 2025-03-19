function sumPairs(ints, s) {
  const seen = new Set();

  for (let i = 0; i < ints.length; i++) {
    let diff = s - ints[i];
    if (seen.has(diff)) {
      return [diff, ints[i]];
    }
    seen.add(ints[i]);
  }

  return undefined;
}
