function solution(list) {
  const res = [];
  let start = list[0];
  let temp = [start];

  for (let i = 1; i <= list.length; i++) {
    if (list[i] === list[i - 1] + 1) {
      temp.push(list[i]);
    } else {
      if (temp.length >= 3) {
        res.push(`${temp[0]}-${temp[temp.length - 1]}`);
      } else {
        res.push(...temp.map((n) => `${n}`));
      }
      temp = [list[i]];
    }
  }

  return res.join(",");
}
solution([-1, 1, 2, 3, 4, 5, 8]);
