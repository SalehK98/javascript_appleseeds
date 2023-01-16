const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const printSimilar = (arr, arr2) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr2.includes(arr[i])) {
            console.log(arr[i]);
        }
    }

    // const result = arr.filter(el => arr2.includes(el))
}

printSimilar(food1, food)


