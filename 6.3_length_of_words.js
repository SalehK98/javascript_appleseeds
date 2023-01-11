arr = ["boo", "doooo", "hoo", "ro"];

const lengthOfWords = (arr) => {
  let arr2 = [];
  for (let i in arr) {
    arr2.push(arr[i].length);
  }
  return arr2;
};
console.log(lengthOfWords(arr));
