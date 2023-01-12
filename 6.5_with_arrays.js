// 1 fill method
// const arr = new Array(100);
const myObj = { name: "saleh" };
const arr = Array(100).fill(myObj);

// --------------------------------------------------------------
console.log("------------------------------------------------------------   2");

// 2 from array method
const arr1 = Array.from(Array(100), (el, idx) => {
  return idx + 1;
});
console.log(arr1);

// ------------------------------------------------------------
console.log("------------------------------------------------------------   3");

// 3 object values to array
const myObj1 = {
  name: "saleh",
  age: 24,
  height: 174,
};

const arr4 = [...Object.values(myObj1)];
// const arr4 = Object.values(myObj1); this works as well
console.log(arr4);

// -----------------------------------------------------------------
console.log("------------------------------------------------------------   4");

// 4 array to object

const arr5 = ["saleh", "dana", "kalouti"];
// const myObj2 = Object.assign({}, arr5);
const myObj2 = { ...arr5 };
// const myObj2 = arr5.reduce((a, v) => ({ ...a, [v]: v }), {});

console.log(myObj2);
// -----------------------------------------------------------------
console.log(
  "------------------------------------------------------------    5"
);

// 5 is array
console.log(Array.isArray(arr1));

// ---------------------------------------------------------------------
console.log(
  "------------------------------------------------------------    6"
);

// 6 copies pf arrays
const arr2 = [2, 5, 7];

// these two ways to copy arrays by value
const adder = (arr) => {
  for (let i = 0; i < arr.length; i++) arr2.push(arr[i]);
};
const arr6 = arr2.slice(0);

const arr7 = [...arr2];
// this copies array by reference
const arr3 = arr;

// const arr = ["df", "fg"];
// arr[4] = "df";
// console.log(arr);

const array = ["make", "make2", "make3"];
const array2 = array.slice(1, 3);
console.log(array);
console.log(array2);
array.pop();
array2[0] = 88;
console.log(array);
console.log(array2);
