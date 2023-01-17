const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}


const getCandy = (obj, id) => {
    return obj.candies.find(el => el.id === id)
}

const getPrice = (obj, id) => {
    return obj.candies.find(el => el.id === id).price

}

function addCandy(obj, id, name, price) {
    obj.candies.push({ "name": name, "id": id, "price": price, "amount": 1 })
}
addCandy(candyStore, "jshy4", "mints", 8)


const buy = (obj, id) => {
    const myObj = obj.candies.findIndex(el => el.id === id)
    obj.candies[myObj].amount -= 1
    obj.cashRegister += obj.candies[myObj].price
    return obj
}
