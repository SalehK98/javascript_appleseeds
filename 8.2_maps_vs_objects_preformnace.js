const myObj = {};
const myMap = console.time("my operation");
for (let i = 0; i < 100000; i++) {
  myObj[i] = i;
  //   console.log(myObj);
}
myObj[88] = 4;
// console.log(myObj[55]);
console.timeEnd("my operation");
