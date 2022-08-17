function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const allArray = firstArray.concat(secondArray);
  // return allArray;

  return allArray.length > maxLength ? allArray.slice(0, maxLength) : allArray;
  // Change code above this line
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3));
