function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
  words = message.split(delimeter);
  // Change code above this line
  return words;
}
console.log(splitMessage('Mango hurries to the train', ' '));
console.log(splitMessage('Mango', ''));
