const doubleValues = arr => {
    return arr.map(el => el * 2)
}

const onlyEvenValues = arr => {
    return arr.filter(el => el % 2 === 0)
}

const showFirstAndLast = arr => {
    return arr.filter((el, idx) => (idx === 0 || idx === -1) && typeof el === "string")
}

const vowelCount = str => {
    return [...str].filter(el => el === "a" || el === "o" || el === "e"
        || el === "u" || el === "i").length
}

const capitalize = str => {
    return str.toUpperCase()
}

const arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const shiftLetters = str => {
    const arr2 = []
    str.toLowerCase().split(" ").forEach(element => {
        arr2.push(
            [...element].map((el) => {
                if (arr.indexOf(el) === arr.length - 1) { el = arr[arr.indexOf(0)] } else {
                    el = arr[arr.indexOf(el) + 1]
                }
                return el
            }).join(""))

    });
    return arr2.join(" ")
}

const swapCase = str => {
    const arr2 = str.split(" ")
    arr2.forEach((el, idx) => {
        arr2[idx] = arr2[idx].charAt(0).toUpperCase() + arr2[idx].slice(1);
    })
    return arr2.join(" ")
}
