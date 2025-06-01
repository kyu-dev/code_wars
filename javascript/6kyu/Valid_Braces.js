function validBraces(braces) {
  let prev = '';
  while (braces !== prev) {
    prev = braces;
    braces = braces.replace('()', '').replace('{}', '').replace('[]', '');
  }
  return braces.length === 0;
}
