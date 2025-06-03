function lastDigit(a, b) {
  if (b === 0n) return 1n;

  const base = a % 10n;
  const cycle = [];

  let current = base;
  while (!cycle.includes(current)) {
    cycle.push(current);
    current = (current * base) % 10n;
  }

  const index = Number((b - 1n) % BigInt(cycle.length));
  return cycle[index];
}
