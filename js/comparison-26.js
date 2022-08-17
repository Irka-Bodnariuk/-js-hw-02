function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line

  // for (let i = 0; i < order.length; i += 1) {
  //   total += order[i];
  // }
  for (const num of order) {
    total += num;
  }

  // Change code above this line
  return total;
}
console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
