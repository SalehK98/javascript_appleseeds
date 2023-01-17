const arr = [
    {
        color: 'red',
        type: 'station wagon',
        registration: 'Sat Mar 03 2018 01:00:00 GMT+0100 (GMT+01:00)',
        capacity: 5
    },
    {
        color: 'red',
        type: 'cabrio',
        registration: 'Sat Mar 03 2012 01:00:00 GMT+0100 (GMT+01:00)',
        capacity: 2
    }
]

const extractOnlyValue = (arr, key) => {
    const arr2 = arr.reduce((values, value) => {
        values.push(value[key])
        return values // very important to return to array methods
    }, [])
    return arr2
}

console.log(extractOnlyValue(arr, "type"));


const arr3 = ["a", "i", "o", "u", "e", "A", "I", "O", "E", "U"]
const countOnlyVowels = str => {
    const myObj = [...str].reduce((count, value) => {
        if (arr3.includes(value)) {
            count[value] = (count[value] || 0) + 1
        }
        return count
    }, {})
    return myObj
}

console.log(countOnlyVowels("my name is saleh"));


const addKeyAndValue = (arr, key, value) => {
    arr.reduce((arr, obj) => {
        obj[key] = value
        return arr
    }, arr)
    return arr
}

console.log(addKeyAndValue(arr, "pass", 0000));