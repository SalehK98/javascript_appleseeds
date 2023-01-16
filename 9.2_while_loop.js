arr = ["boo", "doooo", "hoo", "ro"];

const lengthOfWords2 = arr => {
    let arr2 = [];
    let i = 0;
    while (i < arr.length) {
        arr2.push(arr[i].length)
        i++
    }
    return arr2
}
console.log(lengthOfWords2(arr));
