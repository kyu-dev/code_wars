function solution(number) {
  // on itaire number
  // on regarde si % = 0 pour 3 et 5 et siu les 2 on compte une fois on le compte une fois

  let result = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0) {
      result += i;
    }
    if (i % 5 === 0) {
      result += i;
    }
  }
  console.log(result);
}

solution(10);
