function getCommonElements(array1, array2) {
  // Change code below this line
  const newArray = [];
  for (const number of array1) {
    if (array1.includes(number) && array2.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
}
console.log(getCommonElements([1, 2, 3], [2, 4]));
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
