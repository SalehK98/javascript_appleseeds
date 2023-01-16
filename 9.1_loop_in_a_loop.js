const listOfNeighbors = [
    ["Canada", "Mexico"],
    ["Spain"],
    ["Norway", "Sweden", "Russia"],
];


const loopOverMultiDimensionalArray = (arr) => {
    arr.flat().forEach(element => {
        console.log(`Neighbor : ${element}`);
    });
}

const loopOverMultiDimensionalArray2 = (arr) => { // without flat built in function 
    if (Array.isArray(arr)) { //  this checks if array as well 
        for (let i = 0; i < arr.length; i++) {
            loopOverMultiDimensionalArray2(arr[i])
        }
    } else {
        console.log(`Neighbor : ${arr}`);
    }

    // if (arr.prop && arr.prop.constructor === Array) { //  this checks if array as well 
    //     for (let i = 0; i < arr.length; i++) {
    //         loopOverMultiDimensionalArray2(arr[i])
    //     }
    // } else {
    //     console.log(`Neighbor : ${arr}`);
    // }
}

loopOverMultiDimensionalArray(listOfNeighbors)
console.log("-----------------------");
loopOverMultiDimensionalArray2(listOfNeighbors)