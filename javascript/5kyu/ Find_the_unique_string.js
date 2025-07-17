function findUniq(arr) {
  const normalized = arr.map((str) =>
    [...new Set(str.toLowerCase())].sort().join("")
  );

  const count = {};

  for (const norm of normalized) {
    count[norm] = (count[norm] || 0) + 1;
  }

  const uniqueForm = Object.keys(count).find((key) => count[key] === 1);

  return arr.find(
    (str) => [...new Set(str.toLowerCase())].sort().join("") === uniqueForm
  );
}

console.log(findUniq(["aBbc", "cba", "jil"]));
