function steps(num) {
    for (let i = 0; i < num + 1; i++) {
        let str = ""
        for (let j = 1; j <= i; j++) {
            str += "#";
        }
        console.log(str);
    }
}

steps(4)