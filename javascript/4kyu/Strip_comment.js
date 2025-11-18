function solution(text, markers) {
  const lines = text.split("\n");
  const result = [];

  for (let line of lines) {
    let minIndex = line.length;
    for (let marker of markers) {
      const idx = line.indexOf(marker);
      if (idx !== -1 && idx < minIndex) {
        minIndex = idx;
      }
    }
    result.push(line.slice(0, minIndex).trim());
  }
  return result.join("\n");
}

solution("aa # bb\ncc dd", ["#", "!"]);
