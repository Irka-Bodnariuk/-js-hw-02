function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  return number;
  // Change code above this line
}
console.log(findNumber(2, 6, 5));
