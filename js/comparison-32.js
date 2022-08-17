function includes(array, value) {
  // Change code below this line
  for (const num of array) {
    if (num === value) {
      return true;
    }
  }
  return false;
  // Change code above this line
}
console.log(includes([1, 2, 3, 4, 5], 3));
