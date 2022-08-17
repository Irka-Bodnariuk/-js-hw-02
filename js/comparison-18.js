function calculateTotal(number) {
  // Change code below this line
  let add = 0;
  for (let i = 0; i <= number; i += 1) {
    add += i;
  }
  return add;
  // Change code above this line
}
console.log(calculateTotal(3));
