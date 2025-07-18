function nextSmaller(n) {
  const arr = n.toString().split("").map(Number);

  // Étape 1 : Trouver le pivot (le premier chiffre qui est plus grand que son voisin de droite)
  let i = arr.length - 2;
  while (i >= 0 && arr[i] <= arr[i + 1]) {
    i--;
  }

  if (i < 0) return -1;

  let maxSmaller = -1;
  for (let j = arr.length - 1; j > i; j--) {
    if (arr[j] < arr[i]) {
      if (maxSmaller === -1 || arr[j] >= arr[maxSmaller]) {
        maxSmaller = j;
      }
    }
  }

  if (maxSmaller === -1) return -1;

  [arr[i], arr[maxSmaller]] = [arr[maxSmaller], arr[i]];

  const right = arr.splice(i + 1);
  right.sort((a, b) => b - a);
  arr.push(...right);

  const result = parseInt(arr.join(""), 10);
  if (arr[0] === 0) return -1;
  return result < n ? result : -1;
}
