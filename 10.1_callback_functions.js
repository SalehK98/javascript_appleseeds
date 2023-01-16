const func = str => console.log(str);

function isString(str, func) {
    if (typeof str !== "string") {
        return
    }
    else {
        func(str)
    }

}

isString("saleh", func)

// ----------------------------------------- 2

const func1 = arr => console.log(arr.join("-"))
const func2 = arr => {
    const arr2 = [arr.map(el => el += "ll")]
    console.log(arr2.join(" "));
}

const firstWordUpperCase = (str, func) => {
    const arr = str.split(" ")
    arr[0] = arr[0].toUpperCase();
    func2(arr)
}

firstWordUpperCase("my name is saleh kalouti")

//  ------------------------------------------ 3

