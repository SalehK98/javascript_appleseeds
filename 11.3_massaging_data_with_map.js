const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
]

const func1 = arr => {
    return arr.map(el => el.name)
}

const func2 = arr => {
    return arr.map(el => el.birthday.split("-")[2] < "1990" ? el : []).flat()
}

const func3 = arr => {
    const arr3 = {}
    const arr2 = arr.map(el => {
        return [el.favoriteFoods.meats, el.favoriteFoods.fish]

    }).flat(2)
    arr2.forEach(element => {
        arr3[element] ? arr3[element] += 1 : arr3[element] = 1
    });
    return arr3
}

console.log(func1(data));
console.log(func2(data));
console.log(func3(data));
