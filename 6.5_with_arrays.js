// 1
// const arr = new Array(100);
const myObj = { name: "saleh" };
const arr = Array(100).fill(myObj);
// 2
const arr1 = Array.from(Array(100), (el, idx) => {
  return idx + 1;
});
console.log(arr1);
// 3

// 4

// 5
console.log(Array.isArray(arr1));

// 6
const arr2 = [];
const adder = (arr) => {
  for (let i = 0; i < arr.length; i++) arr2.push(arr[i]);
};

const arr3 = arr;

// const arr = ["df", "fg"];
// arr[4] = "df";
// console.log(arr);

const array = ["make", "make2", "make3"];
const array2 = array.slice(1, 3);
console.log(array);
console.log(array2);
array.pop();
console.log(array);
console.log(array2);
