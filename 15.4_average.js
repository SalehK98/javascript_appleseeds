function calcAverage(arr) {
    // var sum;
    let sum;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    } return sum / arr.length;
}
calcAverage([85, 90, 92]);

// we should not use var
// we return sum not average so we divide by the length of the array