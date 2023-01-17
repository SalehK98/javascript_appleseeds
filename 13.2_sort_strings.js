const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

console.log(foods.sort((a, b) => a > b ? 1 : -1));
console.log(foods.sort((a, b) => a > b ? -1 : 1));

const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
]

console.log(foodsWithUpperCase.sort((a, b) => a > b ? 1 : -1));
console.log(foodsWithUpperCase.sort((a, b) => a > b ? -1 : 1));


const words = ["apple",
    "supercalifragilisticexpialidocious",
    "hi", "zoo"];


console.log(words.sort((a, b) => {
    if (a.length < b.length) {
        return 1
    } else if (a.length > b.length) {
        return -1
    } else {
        return 0
    }
}));