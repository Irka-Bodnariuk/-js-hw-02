function findLongestWord(string) {
  // Change code below this line
  const array = string.split(' ');
  let longWord = array[0];
  for (let i = 0; i < array.length; i++) {
    if (longWord.length < array[i].length) {
      longWord = array[i];
    }
  }
  return longWord;
}
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
