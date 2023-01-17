const arr = [1, 5, 26, 14, -99, 77994, 33, 7, -6, 9, 456]

console.log(arr.reduce((max, currentValue) => max > currentValue ? max : currentValue)); // method to find max
console.log(arr.reduce((max, currentVal) => Math.max(max, currentVal))); // method to find max 
console.log(arr.reduce((sum, currentValue) => currentValue % 2 === 0 ? sum += currentValue : sum, 0));
console.log(arr.reduce((sum, currentValue) => (sum + currentValue)) / arr.length);