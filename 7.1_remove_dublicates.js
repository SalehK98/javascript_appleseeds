const arr = [3, 4, 4, 3, 6, 3]

const arr2 = []
const removeDuplicates = arr => {
    arr.forEach(element => {
        if (arr2.indexOf(element) < 0) arr2.push(element)
    });
    return arr2
}

console.log(removeDuplicates(arr));


// solution without built in function and better lookup time is with map
const myMap = new Map()
for (let i = 0; i < arr.length; i++) {
    if (myMap.get(arr[i]) === undefined) myMap.set(arr[i], true)
}

console.log(myMap.keys());