const myObj = {
    name: "saleh"

}
const myObj1 = {
    name: "kalouti"

}
const myObj2 = {
    name: "saleh kalouti"

}

const myMap = new Map()

myMap.set(myObj, 0)
myMap.set(myObj1, 1)
myMap.set(myObj2, 2)

for (const [key, value] of myMap) {
    console.log(key.name, value);
}