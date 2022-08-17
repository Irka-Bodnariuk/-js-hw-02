function getEvenNumbers(start, end) {
  // Change code below this line
  const array = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      array.push(i);
    }
  }
  return array;
  // Change code above this line
}

console.log(getEvenNumbers(2, 5));
console.log(getEvenNumbers(3, 11));
