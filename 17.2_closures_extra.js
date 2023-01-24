// Block 1 ------------
(function immediateA(a) {
    return (function immediateB(b) {
        console.log(a);
    })(1);
})(0);

console.log("------------ 2");
// Block 2 ------------
let count = 0;
(function immediate() {
    if (count === 0) {
        let count = 1;
        console.log(count);
    }
    console.log(count);
})();

console.log("------------ 3");
// Block 3 ------------
var module = (function () {
    var foo = 'foo'
    function addToFoo(bam) {
        foo = bam;
        return foo;
    }
    var publicInterface = {
        bar: function () {
            return 'bar';
        },
        bam: function () {
            return addToFoo('bam')
        }
    }
    return publicInterface
})()
console.log(module.bar())
console.log(module.bam())

console.log("------------ 4");
// Block 4 ------------
function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();

console.log("------------ 5");
// Block 5 ------------
var x = 10;
console.log(x);
if (true) {
    (function () {
        var x = 20;
        console.log(x);
    })();
}
console.log(x);

console.log("------------ 6");
// Block 6 -------------
var x = 10;
console.log(x);
function test() {
    var x = 20;
    console.log(x);
    if (x > 10) {
        let x = 30;
        console.log(x);
    }
    console.log(x);
}
test();
console.log(x);

console.log("------------ 7");
// // Block 7 -------------
// var x;
// x = 10;
// function test() {
//     var x;
//     if (x > 20) {
//         x = 50;
//     }
//     console.log(x);
// }
// test();

// console.log("------------ 8");
// // Block 8 ------------
// function test() {
//     var x, y;
//     if (false) {
//         x = 50;
//     }
//     console.log(x);
//     console.log(y);
//     y = 100;
//     console.log(y);
// }
// test();

// console.log("------------ 9");
// // Block 9 -------------
// function test() {
//     foo();
//     bar();
//     function foo() {
//         console.log('foo');
//     }
//     var bar = function () {
//         console.log('bar');
//     }
// }
// test();