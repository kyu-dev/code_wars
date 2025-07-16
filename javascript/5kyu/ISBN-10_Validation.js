//1 transformer le x en 10
//2 multiplier les chiffre par leur index
//3 convertirles string en nombre
//4 on doit verifier que la string a e bon forma donc 10 caractere
//5 somme(num * i) % 11

//on reçoit une string et on veut un boolean
function validISBN10(isbn) {
  if (isbn.length != 10) {
    return false;
  }

  //transoformer la string en array de nombre + gerer le cas de X = 10  a la fin
  const num = isbn.split("");

  //gere le cas ou num[9] === X doit etre 10
  const digits = num.map((char, index) => {
    if (char === "X" && index === 9) return 10;
    return Number(char);
  });

  //retourne la somme total de position * nombre
  const sum = digits.reduce((a, c, i) => {
    return a + c * (i + 1);
  }, 0);

  return sum % 11 === 0;
}

console.log(validISBN10("1293000000"));
