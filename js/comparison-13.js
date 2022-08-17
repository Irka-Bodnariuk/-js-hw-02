function slugify(title) {
  // Change code below this line
  // const slug =

  return title.toLowerCase().split(' ').join('-');

  // Change code above this line
}
console.log(slugify('Arrays for begginers'));
console.log(slugify('English for developer'));
