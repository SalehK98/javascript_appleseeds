console.time("my counter");
const myObj = {};
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers", ,];
const myString = array
  .join("")
  .replace(/[^a-zA-Z]+/g, "") // remove everything but letters
  .toLowerCase()
  .split("");
myString.forEach((element) => {
  myObj[element] ? (myObj[element] += 1) : (myObj[element] = 1);
});
console.log(myString);
console.log(myObj);
console.timeEnd("my counter");
